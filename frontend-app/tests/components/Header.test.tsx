import React from 'react'
import { render } from '../testUtils'
import Header from '../../components/Header'

describe('Header component', () => {
  it('renders without crashing', function () {
    render(<Header />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Header />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
