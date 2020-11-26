import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { Line } from 'react-chartjs-2'
import ChartWrapper from './ChartWrapper.js'
import {
    getTitles,
    getLabels,
    getAverageAllFavoriteViewsDatasets,
} from './selectors.js'
import options from './options.js'

const AverageAllFavoriteViewsChart = ({ data, category, interval }) => {
    const { title, subtitle } = getTitles(category)
    const labels = getLabels(data, interval)
    const datasets = getAverageAllFavoriteViewsDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

AverageAllFavoriteViewsChart.propTypes = {
    category: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            averageChartViews: PropTypes.number.isRequired,
            averageDashboardViews: PropTypes.number.isRequired,
            averageEventChartViews: PropTypes.number.isRequired,
            averageEventReportViews: PropTypes.number.isRequired,
            averageMapViews: PropTypes.number.isRequired,
            averagePivotTableViews: PropTypes.number.isRequired,
            day: PropTypes.number,
            month: PropTypes.number,
            week: PropTypes.number,
            year: PropTypes.number,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default AverageAllFavoriteViewsChart
