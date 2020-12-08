import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../App'

it('renders whole app without crashing', () => {
  shallow(<App />)
})
