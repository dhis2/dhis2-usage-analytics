import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { Line } from 'react-chartjs-2'
import ChartWrapper from './ChartWrapper.js'
import {
    getTitles,
    getLabels,
    getSumTotalFavoriteViewsDatasets,
} from './selectors.js'
import options from './options.js'

const SumTotalFavoriteViewsChart = ({ data, category, interval }) => {
    const { title, subtitle } = getTitles(category)
    const labels = getLabels(data, interval)
    const datasets = getSumTotalFavoriteViewsDatasets(data)

    return (
        <ChartWrapper title={title} subtitle={subtitle}>
            <Line data={{ labels, datasets }} options={options} />
        </ChartWrapper>
    )
}

SumTotalFavoriteViewsChart.propTypes = {
    category: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            totalViews: PropTypes.number.isRequired,
        })
    ).isRequired,
    interval: PropTypes.string.isRequired,
}

export default SumTotalFavoriteViewsChart
