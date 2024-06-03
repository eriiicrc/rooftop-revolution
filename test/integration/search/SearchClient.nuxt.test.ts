import { describe, it, expect } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/vue'
import SearchClient from '@/components/search/SearchClient.vue'

describe('ClientSearch should', () => {
  it('render correctly', () => {
        render(SearchClient, {
            props: { error: false }
        })
    
        expect(screen.getByTestId('client-search')).toBeInTheDocument()
        expect(screen.getByTestId('client-search-form')).toBeInTheDocument()
        expect(screen.getByTestId('client-search-input')).toBeInTheDocument()
        expect(screen.getByTestId('client-search-cta')).toBeInTheDocument()
  })

  it('emit searchClient event with CUPS value', async () => {
    const { emitted } = render(SearchClient, {
        props: { error: false }
    })

    const input = screen.getByTestId('client-search-input')
    const button = screen.getByTestId('client-search-cta')

    await fireEvent.update(input, '123456')
    await fireEvent.click(button)

    expect(emitted().searchClient).toBeTruthy()
    expect(emitted().searchClient[0]).toEqual(['123456'])
  })

  it('show error message when CUPS is not found', async () => {
    render(SearchClient, {
        props: { error: true }
    })

    const input = screen.getByTestId('client-search-input')

    await fireEvent.update(input, '123456789')

    expect(screen.getByTestId('client-search-not-found-error')).toBeInTheDocument()
  })

  it('show error message when CUPS is empty', async () => {
    render(SearchClient, {
        props: { error: true }
    })

    const input = screen.getByTestId('client-search-input')

    await fireEvent.update(input, '')

    expect(screen.getByTestId('client-search-required-error')).toBeInTheDocument()
  })

  it('emit cleanError event when input changes', async () => {
    const { emitted } = render(SearchClient, {
        props: { error: true }
    })

    const input = screen.getByTestId('client-search-input')

    await fireEvent.update(input, '123456')

    expect(emitted().cleanError).toBeTruthy()
  })
})
