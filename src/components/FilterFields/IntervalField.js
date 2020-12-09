import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import FieldSpacer from '../FieldSpacer/index.js'
import intervals from '../../constants/intervals.js'

const IntervalField = ({ interval, setReportInterval }) => (
    <FieldSpacer>
        <SingleSelectField
            selected={interval}
            onChange={({ selected }) => {
                setReportInterval(selected)
            }}
            label={i18n.t('Interval')}
        >
            {intervals.map(({ label, value }) => (
                <SingleSelectOption label={label} key={value} value={value} />
            ))}
        </SingleSelectField>
    </FieldSpacer>
)

IntervalField.propTypes = {
    interval: PropTypes.string.isRequired,
    setReportInterval: PropTypes.func.isRequired,
}

export default IntervalField
