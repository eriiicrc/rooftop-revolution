import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import CardWithTitle from '@/components/client/CardWithTitle.vue'

describe('CardWithTitle', () => {
    it('should render correctly', () => {
        render(CardWithTitle, {
            props: { title: 'patata' },
        })
    
        expect(screen.getByTestId('card')).toBeInTheDocument()
        expect(screen.getByTestId('card-title').textContent).toBe('patata')
    })
})