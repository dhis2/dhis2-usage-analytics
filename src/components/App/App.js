import React, { useState } from 'react'
import { CssVariables, CssReset } from '@dhis2/ui'
import { FAVORITE_VIEWS } from '../../constants/categories.js'
import { WEEK } from '../../constants/intervals.js'
import { SUM } from '../../constants/aggregations.js'
import { ALL } from '../../constants/chartTypes.js'
import { CHART_VIEW } from '../../constants/eventTypes.js'
import { PS_25 } from '../../constants/pageSizes.js'
import { ASC } from '../../constants/sortOrders.js'
import FilterFields from '../FilterFields/index.js'
import {
    LayoutContainer,
    LayoutSidebar,
    LayoutContent,
} from '../Layout/index.js'
import CategoryField from '../CategoryField/index.js'
import AppTitle from '../AppTitle/index.js'
import Visualization from '../Visualization/index.js'
import './App.css'
import createDefaultDates from './createDefaultDates.js'

const App = () => {
    const { initialStartDate, initialEndDate } = createDefaultDates()

    // State
    const [aggregation, setAggregation] = useState(SUM)
    const [category, setCategory] = useState(FAVORITE_VIEWS)
    const [chartType, setChartType] = useState(ALL)
    const [endDate, setEndDate] = useState(initialEndDate)
    const [eventType, setEventType] = useState(CHART_VIEW)
    const [interval, setInterval] = useState(WEEK)
    const [pageSize, setPageSize] = useState(PS_25)
    const [sortOrder, setSortOrder] = useState(ASC)
    const [startDate, setStartDate] = useState(initialStartDate)

    /**
     * The rendering of the different date intervals in the charts and tables
     * will crash if the props and the data aren't in sync. To prevent stale
     * props from being used we're tracking the stale status of interval.
     */
    const [isIntervalStale, setIsIntervalStale] = useState(false)
    const setIsStaleAndInterval = interval => {
        setIsIntervalStale(true)
        setInterval(interval)
    }

    return (
        <React.Fragment>
            <CssVariables spacers />
            <CssReset />
            <LayoutContainer>
                <LayoutSidebar>
                    <AppTitle />
                    <CategoryField
                        category={category}
                        setCategory={setCategory}
                    />
                    <FilterFields
                        aggregation={aggregation}
                        category={category}
                        chartType={chartType}
                        endDate={endDate}
                        eventType={eventType}
                        interval={interval}
                        pageSize={pageSize}
                        setAggregation={setAggregation}
                        setChartType={setChartType}
                        setEndDate={setEndDate}
                        setEventType={setEventType}
                        setInterval={setIsStaleAndInterval}
                        setPageSize={setPageSize}
                        setSortOrder={setSortOrder}
                        setStartDate={setStartDate}
                        sortOrder={sortOrder}
                        startDate={startDate}
                    />
                </LayoutSidebar>
                <LayoutContent>
                    <Visualization
                        aggregation={aggregation}
                        category={category}
                        chartType={chartType}
                        endDate={endDate}
                        eventType={eventType}
                        interval={interval}
                        isIntervalStale={isIntervalStale}
                        pageSize={pageSize}
                        setIsIntervalStale={setIsIntervalStale}
                        sortOrder={sortOrder}
                        startDate={startDate}
                    />
                </LayoutContent>
            </LayoutContainer>
        </React.Fragment>
    )
}

export default App
