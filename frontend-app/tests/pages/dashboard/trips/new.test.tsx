import React from 'react'
import { render } from '../../../testUtils'
import NewTrip from '../../../../pages/dashboard/trips/new'

describe('NewTrip page', () => {
  it('renders without crashing', function () {
    render(<NewTrip />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<NewTrip />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
