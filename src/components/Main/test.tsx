import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /totem app/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /totem app/i })).toHaveClass(
      'text-9xl font-bold'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
