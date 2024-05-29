import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useClient } from '~/composables/useClient'
import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from '@/stores'
import clients from '@/data/clients.json'
import supplyPoints from '@/data/supplyPoints.json'

vi.mock('vue-router', () => ({
    useRoute: vi.fn(() => ({
        query: { cups: ""}
    })),
}))

describe('useClient', () => {
    let store: any
    
    beforeEach(() => {
        setActivePinia(createPinia())
        store = useMainStore()
        store.clients = clients
        store.supplyPoints = supplyPoints
    })

    it('should set error to true when there client cannot be found', () => {
        const { error, useSearchClient } = useClient()
        useSearchClient('xxxxxxx')
        expect(error.value).toBe(true)
    })

    it('should load client page with a client able to get enrolled with revolution rooftop', async () => {
        const { useInitClientPage, isRevolutionRooftopAllowed, useSearchClient } = useClient()
        useSearchClient("111222")
        await useInitClientPage()
        expect(isRevolutionRooftopAllowed.value).toEqual(true)
    })

    it('should load client page with a client not able to get enrolled with revolution rooftop', async () => {
        const { useInitClientPage, isRevolutionRooftopAllowed, useSearchClient } = useClient()
        useSearchClient("345678")
        await useInitClientPage()
        expect(isRevolutionRooftopAllowed.value).toEqual(false)
    })

    it('should set discount to Special Discount 12%', async () => {
        const discountMock = {
            discount: "12% discount",
            type: "Special discount",
        }
        const { useInitClientPage, discount, useSearchClient } = useClient()
        useSearchClient("111222")
        await useInitClientPage()
        expect(discount.value).toEqual(discountMock)
    })

    it('should set discount to Standard Discount', async () => {
        const discountMock = {
            discount: "No Discount",
            type: "Standard discount",
        }
        const { useInitClientPage, discount, useSearchClient } = useClient()
        useSearchClient("123456")
        await useInitClientPage()
        expect(discount.value).toEqual(discountMock)
    })  
})

