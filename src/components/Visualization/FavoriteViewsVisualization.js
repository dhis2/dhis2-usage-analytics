import React, { Fragment } from 'react'
import PropTypes from '@dhis2/prop-types'
import { SUM } from '../../constants/aggregations.js'
import { ALL } from '../../constants/chartTypes.js'
import {
    SumAllFavoriteViewsChart,
    SumTotalFavoriteViewsChart,
    AverageAllFavoriteViewsChart,
    AverageTotalFavoriteViewsChart,
} from '../Charts'
import { SumFavoriteViewsTable, AverageFavoriteViewsTable } from '../Tables'
import { DataStatisticsQuery } from '../Queries'

const fields = ['year', 'month', 'week', 'day']

const sumFields = [
    ...fields,
    'mapViews',
    'chartViews',
    'pivotTableViews',
    'eventReportViews',
    'eventChartViews',
    'dashboardViews',
    'dataSetReportViews',
    'totalViews',
]

const averageFields = [
    ...fields,
    'averageMapViews',
    'averageChartViews',
    'averagePivotTableViews',
    'averageEventReportViews',
    'averageEventChartViews',
    'averageDashboardViews',
    'averageViews',
]

const FavoriteViewsVisualization = ({
    aggregation,
    category,
    chartType,
    endDate,
    interval,
    isIntervalStale,
    setIsIntervalStale,
    startDate,
}) => {
    const isSum = aggregation === SUM
    const isAll = chartType === ALL

    if (isSum) {
        return (
            <DataStatisticsQuery
                endDate={endDate}
                fields={sumFields}
                interval={interval}
                isIntervalStale={isIntervalStale}
                setIsIntervalStale={setIsIntervalStale}
                startDate={startDate}
            >
                {data => (
                    <Fragment>
                        {isAll ? (
                            <SumAllFavoriteViewsChart
                                category={category}
                                data={data}
                                interval={interval}
                            />
                        ) : (
                            <SumTotalFavoriteViewsChart
                                data={data}
                                category={category}
                                interval={interval}
                            />
                        )}
                        <SumFavoriteViewsTable
                            data={data}
                            interval={interval}
                        />
                    </Fragment>
                )}
            </DataStatisticsQuery>
        )
    }

    return (
        <DataStatisticsQuery
            endDate={endDate}
            fields={averageFields}
            interval={interval}
            isIntervalStale={isIntervalStale}
            setIsIntervalStale={setIsIntervalStale}
            startDate={startDate}
        >
            {data => (
                <Fragment>
                    {isAll ? (
                        <AverageAllFavoriteViewsChart
                            category={category}
                            data={data}
                            interval={interval}
                        />
                    ) : (
                        <AverageTotalFavoriteViewsChart
                            category={category}
                            data={data}
                            interval={interval}
                        />
                    )}
                    <AverageFavoriteViewsTable
                        data={data}
                        interval={interval}
                    />
                </Fragment>
            )}
        </DataStatisticsQuery>
    )
}

FavoriteViewsVisualization.propTypes = {
    aggregation: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    chartType: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    isIntervalStale: PropTypes.bool.isRequired,
    setIsIntervalStale: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
}

export default FavoriteViewsVisualization
