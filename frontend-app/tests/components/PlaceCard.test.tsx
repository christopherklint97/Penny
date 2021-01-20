import React from 'react'
import { render } from '../testUtils'
import PlaceCard from '../../components/PlaceCard'

describe('PlaceCard component', () => {
  it('renders without crashing', function () {
    render(
      <PlaceCard
        img="www.example.com/img"
        title="This is a title"
        next="trip"
        id="1234"
        handleDelete={jest.fn()}
      />
    )
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <PlaceCard
        img="www.example.com/img"
        title="This is a title"
        next="trip"
        id="1234"
        handleDelete={jest.fn()}
      />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
