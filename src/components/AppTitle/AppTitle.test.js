import { shallow } from 'enzyme'
import React from 'react'
import AppTitle from './AppTitle.js'

describe('<AppTitle>', () => {
    it('renders the expected app title', () => {
        const wrapper = shallow(<AppTitle />)

        expect(wrapper.text()).toMatchInlineSnapshot(`"Usage Analytics"`)
    })
})
