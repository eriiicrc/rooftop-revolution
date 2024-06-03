import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from '@/stores'
import clients from '@/data/clients.json'
import supplyPoints from '@/data/supplyPoints.json'
import supplyPointsStoredMock from '@/test/mock-responses/supplyPointsStoredMock.json'

describe('useMainStore should', () => {
    let store: any
    const cups: string = "123456"
    
    beforeEach(() => {
        setActivePinia(createPinia())
        store = useMainStore()
        store.clients = clients
        store.supplyPoints = supplyPoints
    })

    it('fetch clients correctly', () => {
        store.fetchClients(cups)
        expect(store.clients).toEqual(clients)
    })

    it('fetch supplyInfo correctly', () => {
        store.fetchSupplyPoints()
        expect(store.supplyPoints).toEqual(supplyPointsStoredMock)
    })

    it('set clientInfo correctly', () => {
        store.setClientByCups(cups)
        expect(store.clientInfo).toEqual(clients[0])
    })

    it('set supplyInfo correctly', () => {
        store.setSupplyInfoByCups(cups)
        expect(store.supplyInfo).toEqual(supplyPoints[0])
    })

    it('return supply point', () => {
        const neighbor = store.getNeighborByCups(cups)
        expect(neighbor).toEqual(supplyPoints[0])
    })

    describe('hasClientInfo action should', () => {
        it('return true if clientInfo is set', () => {
            store.setClientByCups(cups)
            expect(store.hasClientInfo()).toBe(true)
        })
    
        it('return false if clientInfo is not set', () => {
            expect(store.hasClientInfo()).toBe(false)
        })
    })    

    describe('hasClientSupplyPointInfo action should', () => {
        it('return true if supplyInfo is set', () => {
            store.setSupplyInfoByCups(cups)
            expect(store.hasClientSupplyPointInfo()).toBe(true)
        })
    
        it('returns false if supplyInfo is not set', () => {
            expect(store.hasClientSupplyPointInfo()).toBe(false)
        })
    })
})