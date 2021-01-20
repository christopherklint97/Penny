import React from 'react'
import { render } from '../../testUtils'
import Dashboard from '../../../pages/dashboard/index'

describe('Dashboard page', () => {
  it('renders without crashing', function () {
    render(<Dashboard />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Dashboard />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
