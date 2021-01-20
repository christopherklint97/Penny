import React from 'react'
import { render } from '../testUtils'
import LoginButton from '../../components/LoginButton'

describe('LoginButton component', () => {
  it('renders without crashing', function () {
    render(<LoginButton />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<LoginButton />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
