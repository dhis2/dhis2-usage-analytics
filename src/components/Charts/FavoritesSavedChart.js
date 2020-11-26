import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { Line } from 'react-chartjs-2'
import ChartWrapper from './ChartWrapper.js'
import { getTitles, getLabels, getFavoritesSavedDatasets } from './selectors.js'
import options from './options.js'

const FavoritesSavedChart = ({ data, category, interval }) => {
    const { title, subtitle } = getTitles(category)
    const labels = getLabels(data, interval)
    const datasets = getFavoritesSavedDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

FavoritesSavedChart.propTypes = {
    category: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            savedCharts: PropTypes.number.isRequired,
            savedDashboards: PropTypes.number.isRequired,
            savedEventCharts: PropTypes.number.isRequired,
            savedEventReports: PropTypes.number.isRequired,
            savedIndicators: PropTypes.number.isRequired,
            savedMaps: PropTypes.number.isRequired,
            savedPivotTables: PropTypes.number.isRequired,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default FavoritesSavedChart
