import React from 'react'
import { render } from '../testUtils'
import Home from '../../pages/index'

describe('Home page', () => {
  it('renders without crashing', function () {
    render(<Home />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
