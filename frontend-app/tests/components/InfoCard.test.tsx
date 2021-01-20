import React from 'react'
import { render } from '../testUtils'
import InfoCard from '../../components/InfoCard'

describe('InfoCard component', () => {
  it('renders without crashing', function () {
    render(
      <InfoCard
        title="This is a test"
        img="www.example.com/img"
        body="This is an image"
      />
    )
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <InfoCard
        title="This is a test"
        img="www.example.com/img"
        body="This is an image"
      />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
