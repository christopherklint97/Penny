import React from 'react'
import { render } from '../testUtils'
import LogoutButton from '../../components/LogoutButton'

describe('LogoutButton component', () => {
  it('renders without crashing', function () {
    render(<LogoutButton />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<LogoutButton />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
