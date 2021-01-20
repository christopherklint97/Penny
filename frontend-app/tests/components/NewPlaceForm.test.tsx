import React from 'react'
import { render } from '../testUtils'
import NewPlaceForm from '../../components/NewPlaceForm'

describe('NewPlaceForm component', () => {
  it('renders without crashing', function () {
    render(<NewPlaceForm onSubmit={jest.fn()} />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<NewPlaceForm onSubmit={jest.fn()} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
