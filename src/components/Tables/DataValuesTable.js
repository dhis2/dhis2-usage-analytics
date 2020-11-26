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

const DataValuesTable = ({ data, interval }) => (
    <TableWrapper>
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>{i18n.t('Date')}</TableCellHead>
                    <TableCellHead>{i18n.t('Data Values')}</TableCellHead>
                </TableRowHead>
            </TableHead>
            <TableBody>
                {data.map(({ year, month, week, day, savedDataValues }) => {
                    const intervalDate = getIntervalDate(
                        { year, month, week, day },
                        interval
                    )

                    return (
                        <TableRow key={intervalDate}>
                            <TableCell>{intervalDate}</TableCell>
                            <TableCell>{savedDataValues}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableWrapper>
)

DataValuesTable.propTypes = {
    data: PropTypes.array.isRequired,
    interval: PropTypes.string.isRequired,
}

export default DataValuesTable
