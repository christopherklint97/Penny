import React from 'react'
import { render } from '../testUtils'
import Footer from '../../components/Footer'

describe('Footer component', () => {
  it('renders without crashing', function () {
    render(<Footer />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
