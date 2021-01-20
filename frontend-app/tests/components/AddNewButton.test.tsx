import React from 'react'
import { render } from '../testUtils'
import AddNewButton from '../../components/AddNewButton'

describe('AddNewButton component', () => {
  it('renders without crashing', function () {
    render(<AddNewButton link="www.example.com" text="test" />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <AddNewButton link="www.example.com" text="test" />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
