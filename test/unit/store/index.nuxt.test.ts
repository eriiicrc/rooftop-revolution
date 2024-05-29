import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from '@/stores'
import clients from '@/data/clients.json'
import supplyPoints from '@/data/supplyPoints.json'

describe('useMainStore', () => {
    let store: any
    const cups: string = "123456"
    
    beforeEach(() => {
        setActivePinia(createPinia())
        store = useMainStore()
        store.clients = clients
        store.supplyPoints = supplyPoints
    })

    it('should set clientInfo correctly', () => {
        store.setClientByCups(cups)
        expect(store.clientInfo).toEqual(clients[0])
    })

    it('should set supplyInfo correctly', () => {
        store.setSupplyInfoByCups(cups)
        expect(store.supplyInfo).toEqual(supplyPoints[0])
    })

    it('should return supply point', () => {
        const neighbor = store.getNeighborByCups(cups)
        expect(neighbor).toEqual(supplyPoints[0])
    })

    describe('hasClientInfo action', () => {
        it('should return true if clientInfo is set', () => {
            store.setClientByCups(cups)
            expect(store.hasClientInfo()).toBe(true)
        })
    
        it('should return false if clientInfo is not set', () => {
            expect(store.hasClientInfo()).toBe(false)
        })
    })    

    describe('hasClientSupplyPointInfo action', () => {
        it('should returns true if supplyInfo is set', () => {
            store.setSupplyInfoByCups(cups)
            expect(store.hasClientSupplyPointInfo()).toBe(true)
        })
    
        it('should returns false if supplyInfo is not set', () => {
            expect(store.hasClientSupplyPointInfo()).toBe(false)
        })
    })
})