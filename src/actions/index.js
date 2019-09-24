import * as api from '../api'
import * as ACTIONS from '../actions/types'
import { TOP_FAVORITES } from '../constants/categories'

export const initApp = () => async (dispatch, getState) => {
    try {
        const payload = await api.getUsageData(getState().filter)
        dispatch(createAction(ACTIONS.APP_LOAD_SUCCESS, payload))
    } catch (error) {
        dispatch(createAction(ACTIONS.APP_LOAD_ERROR, error))
    }
}

// Fetch data if category has changed from TOP_FAVORITES to anything else
// or vice versa
export const updateCategory = e => (dispatch, getState) => {
    const { filter } = getState()
    const oldCategory = filter.category

    dispatch(updateFilter(e.target.name, e.target.value))

    if (isNewDataRequiredAfterCategoryChange(oldCategory, e.target.value)) {
        return getUsageData({ ...filter, category: e.target.value }, dispatch)
    }
}

export const updateFilterAndGetData = e => (dispatch, getState) => {
    dispatch(updateFilter(e.target.name, e.target.value))

    const { filter } = getState()
    return getUsageData(filter, dispatch)
}

export const updateUsageData = () => (dispatch, getState) => {
    const { filter } = getState()
    return getUsageData(filter, dispatch)
}

export const updateFilter = (key, value) =>
    createAction(ACTIONS.FILTER_UPDATED, { key, value })

export function isNewDataRequiredAfterCategoryChange(oldCategory, newCategory) {
    return (
        oldCategory !== newCategory &&
        ((newCategory === TOP_FAVORITES && oldCategory !== TOP_FAVORITES) ||
            (oldCategory === TOP_FAVORITES && newCategory !== TOP_FAVORITES))
    )
}

async function getUsageData(filter, dispatch) {
    dispatch(createAction(ACTIONS.USAGE_DATA_REQUESTED))

    try {
        const usageData = await api.getUsageData(filter)
        dispatch(createAction(ACTIONS.USAGE_DATA_RECEIVED, usageData))
    } catch (error) {
        dispatch(createAction(ACTIONS.USAGE_DATA_ERRORED, error))
    }
}

function createAction(type, payload) {
    return { type, payload }
}
