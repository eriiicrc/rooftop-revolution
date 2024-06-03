import { render, screen } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import PersonalInformation from '@/components/client/PersonalInformation.vue'

describe('PersonalInformation should', () => {
    it('render all personal information', () => {
        const props = {
            title: 'Personal Information',
            address: '123 street',
            cups: '123456',
            role: 'customer',
            buildingType: 'house'
        }
        render(PersonalInformation, { props })

        const address = screen.getByTestId('address')
        const cups = screen.getByTestId('cups')
        const role = screen.getByTestId('role')
        const buildingType = screen.getByTestId('building-type')

        expect(address.textContent).toBe('123 street')
        expect(cups.textContent).toBe('123456')
        expect(role.textContent).toBe('customer')
        expect(buildingType.textContent).toBe('house')
    })
})