import React from 'react'
import { render } from '../testUtils'
import Hero from '../../components/Hero'

describe('Hero component', () => {
  it('renders without crashing', function () {
    render(<Hero title="This is a test" text="Body" />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Hero title="This is a test" text="Body" />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
