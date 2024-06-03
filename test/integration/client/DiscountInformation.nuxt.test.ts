import { render, screen } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import DiscountInformation from '@/components/client/DiscountInformation.vue'

describe('DiscountInformation should', () => {
    it('render a message when a client is able to access to Rooftop Revolution', () => {
        render(DiscountInformation, {
            props: {
                clientAllowed: true,
                discount: {}
            }
        })

        const allowedMsg = screen.getByTestId('allowed-msg')
        expect(allowedMsg).toBeInTheDocument()
    })

    it('render a message when a client is not able to access rooftop revolution', () => {
        render(DiscountInformation, {
            props: {
                clientAllowed: false,
                discount: {}
            }
        })

        const notAllowedMsg = screen.getByTestId('not-allowed-msg')
        expect(notAllowedMsg).toBeInTheDocument()
    })

    it('render discount information when client is able to access rooftop revolution', () => {
        render(DiscountInformation, {
        props: {
            clientAllowed: true,
            discount: {
                type: 'Standard Discount',
                discount: 'No Discount'
            }
        }
        })
        const discountType = screen.getByTestId('discount-type')
        const discountValue = screen.getByTestId('discount-value')

        expect(discountType.textContent).toEqual('Standard Discount')
        expect(discountValue.textContent).toEqual('No Discount')
    })
})
