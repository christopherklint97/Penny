import React from 'react'
import { render } from '../testUtils'
import DeleteIcon from '../../components/DeleteIcon'

describe('DeleteIcon component', () => {
  const handleDelete = jest.fn()

  it('renders without crashing', function () {
    render(<DeleteIcon handleDelete={handleDelete} id="1234" />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <DeleteIcon handleDelete={handleDelete} id="1234" />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
