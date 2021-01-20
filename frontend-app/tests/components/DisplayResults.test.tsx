import React from 'react'
import { render } from '../testUtils'
import DisplayResults from '../../components/DisplayResults'

describe('DisplayResults component', () => {
  it('renders without crashing', function () {
    render(
      <DisplayResults handleClick={jest.fn()} cities={[]} select={jest.fn()} />
    )
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <DisplayResults handleClick={jest.fn()} cities={[]} select={jest.fn()} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
