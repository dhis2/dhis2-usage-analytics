import { getYearMonthDayString } from '../utils/date'
import { FILTER_UPDATED } from '../actions/types'
import { FAVORITE_VIEWS } from '../constants/categories'
import { WEEK } from '../constants/intervals'
import { SUM } from '../constants/aggregations'
import { TOTAL } from '../constants/chartTypes'
import { CHART_VIEW } from '../constants/eventTypes'
import { ASC } from '../constants/sortOrders'

const getEndDate = () => new Date('2016-10-30')

const initialState = {
    category: FAVORITE_VIEWS,
    // startDate: getYearMonthDayString(getEndDate(), -4),
    startDate: getYearMonthDayString(getEndDate(), -5),
    endDate: getYearMonthDayString(getEndDate()),
    interval: WEEK,
    aggregationLevel: SUM,
    chartType: TOTAL,
    eventType: CHART_VIEW,
    pageSize: 25,
    sortOrder: ASC,
}

export default function filter(state = initialState, { type, payload }) {
    switch (type) {
        case FILTER_UPDATED:
            return {
                ...state,
                [payload.key]: payload.value,
            }
        default:
            return state
    }
}