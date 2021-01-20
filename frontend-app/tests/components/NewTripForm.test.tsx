import React from 'react'
import { render } from '../testUtils'
import NewTripForm from '../../components/NewTripForm'

describe('NewTripForm component', () => {
  it('renders without crashing', function () {
    render(<NewTripForm onSubmit={jest.fn()} />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<NewTripForm onSubmit={jest.fn()} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
