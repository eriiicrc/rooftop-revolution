import { render, screen } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import SupplyInformation from '@/components/client/SupplyInformation.vue'

describe('SupplyInformation', () => {
    it('should render all supply info of the client', () => {
        const props = {
            tariff: 'tariff',
            invoicedAmount: 10,
            p1: 3300,
            p2: 4400,
            neighbors: ['123']
        }

        render(SupplyInformation, { props })

        const tariff = screen.getByTestId('tariff')
        const invoicedAmount = screen.getByTestId('invoiced-amount')
        const p1 = screen.getByTestId('p1')
        const p2 = screen.getByTestId('p2')
        const neighbors = screen.getByTestId('neighbors')

        expect(tariff.textContent).toBe('tariff')
        expect(invoicedAmount.textContent).toBe('10€')
        expect(p1.textContent).toBe('3300W')
        expect(p2.textContent).toBe('4400W')
        expect(neighbors).toBeInTheDocument()
    })
})
