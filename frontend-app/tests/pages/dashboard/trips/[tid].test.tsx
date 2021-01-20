import React from 'react'
import { render } from '../../../testUtils'
import Trip from '../../../../pages/dashboard/trips/[tid]'

describe('Trip page', () => {
  it('renders without crashing', function () {
    render(<Trip />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Trip />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
