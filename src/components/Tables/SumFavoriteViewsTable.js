import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import {
    Table,
    TableHead,
    TableRowHead,
    TableRow,
    TableCell,
    TableCellHead,
    TableBody,
} from '@dhis2/ui'
import { getIntervalDate } from '../../selectors/date.js'
import TableWrapper from './TableWrapper.js'

const SumFavoriteViewsTable = ({ data, interval }) => (
    <TableWrapper>
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>{i18n.t('Date')}</TableCellHead>
                    <TableCellHead>{i18n.t('Map')}</TableCellHead>
                    <TableCellHead>{i18n.t('Chart')}</TableCellHead>
                    <TableCellHead>{i18n.t('Pivot Table')}</TableCellHead>
                    <TableCellHead>{i18n.t('Event Report')}</TableCellHead>
                    <TableCellHead>{i18n.t('Event Chart')}</TableCellHead>
                    <TableCellHead>{i18n.t('Dashboard')}</TableCellHead>
                    <TableCellHead>{i18n.t('Data Set Report')}</TableCellHead>
                    <TableCellHead>{i18n.t('Total')}</TableCellHead>
                </TableRowHead>
            </TableHead>
            <TableBody>
                {data.map(
                    ({
                        year,
                        month,
                        week,
                        day,
                        mapViews,
                        chartViews,
                        pivotTableViews,
                        eventReportViews,
                        eventChartViews,
                        dashboardViews,
                        dataSetReportViews,
                    }) => {
                        const total =
                            mapViews +
                            chartViews +
                            pivotTableViews +
                            eventReportViews +
                            eventChartViews +
                            dashboardViews +
                            dataSetReportViews
                        const intervalDate = getIntervalDate(
                            { year, month, week, day },
                            interval
                        )

                        return (
                            <TableRow key={intervalDate}>
                                <TableCell>{intervalDate}</TableCell>
                                <TableCell>{mapViews}</TableCell>
                                <TableCell>{chartViews}</TableCell>
                                <TableCell>{pivotTableViews}</TableCell>
                                <TableCell>{eventReportViews}</TableCell>
                                <TableCell>{eventChartViews}</TableCell>
                                <TableCell>{dashboardViews}</TableCell>
                                <TableCell>{dataSetReportViews}</TableCell>
                                <TableCell>{total}</TableCell>
                            </TableRow>
                        )
                    }
                )}
            </TableBody>
        </Table>
    </TableWrapper>
)

SumFavoriteViewsTable.propTypes = {
    data: PropTypes.array.isRequired,
    interval: PropTypes.string.isRequired,
}

export default SumFavoriteViewsTable
