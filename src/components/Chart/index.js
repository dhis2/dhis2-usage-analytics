import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { connect } from 'react-redux'
import { CircularLoader } from '@dhis2/ui-core'
import { Line } from 'react-chartjs-2'
import parseChartData from './parseChartData'
import { LOADING, ERROR } from '../../constants/statuses'
import { TOP_FAVORITES } from '../../constants/categories'
import './Chart.css'

const baseClassName = 'uua-data-container uua-chart-container'
const loadingClassName = ' uua-data-container--loading'

export function Chart({ shouldHide, loading, chartConfig }) {
    let content

    if (shouldHide) {
        return null
    } else if (loading) {
        content = <CircularLoader overlay />
    } else {
        const { options, data, title, subtitle } = chartConfig
        content = (
            <Fragment>
                <h4 className="uaa-chart-title">{title}</h4>
                <h6 className="uaa-chart-subtitle">{subtitle}</h6>
                {/*
                    chart.js canvas needs a dedicated wrapper to have a responsive size
                    https://www.chartjs.org/docs/latest/general/responsive.html#important-note
                */}
                <div className="uaa-chart-wrap">
                    <Line data={data} options={options} />
                </div>
            </Fragment>
        )
    }

    const className = loading ? baseClassName + loadingClassName : baseClassName

    return <div className={className}>{content}</div>
}

Chart.propTypes = {
    loading: PropTypes.bool.isRequired,
    shouldHide: PropTypes.bool.isRequired,
    chartConfig: PropTypes.object,
}

// The Chart is not displayed for category TOP_FAVORITES, but it should also
// be hidden when usageData === ERROR, because one Error message is enough,
// and this Error will be displayed in the Table component
export function mapStateToProps({ usageData, filter }) {
    const shouldHide = filter.category === TOP_FAVORITES || usageData === ERROR
    const loading = usageData === LOADING
    return {
        shouldHide,
        loading,
        chartConfig:
            shouldHide || loading ? null : parseChartData(filter, usageData),
    }
}

export default connect(mapStateToProps)(Chart)
