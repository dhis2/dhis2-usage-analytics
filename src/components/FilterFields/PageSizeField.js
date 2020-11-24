import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import pageSizes from '../../constants/pageSizes.js'

const PageSizeField = ({ pageSize, setPageSize }) => (
    <SingleSelectField
        selected={pageSize}
        onChange={({ selected }) => {
            setPageSize(selected)
        }}
        label={i18n.t('Page Size')}
    >
        {pageSizes.map(({ label, value }) => (
            <SingleSelectOption label={label} key={value} value={value} />
        ))}
    </SingleSelectField>
)

PageSizeField.propTypes = {
    pageSize: PropTypes.string.isRequired,
    setPageSize: PropTypes.func.isRequired,
}

export default PageSizeField
