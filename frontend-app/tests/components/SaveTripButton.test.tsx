import React from 'react'
import { render } from '../testUtils'
import SaveTripButton from '../../components/SaveTripButton'

describe('SaveTripButton component', () => {
  it('renders without crashing', function () {
    render(<SaveTripButton city={{}} />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<SaveTripButton city={{}} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
