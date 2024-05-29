import { defineStore } from 'pinia'
import type { Client, SupplyPoint, SupplyPointResponse } from '@/types'

export const useMainStore = defineStore('main', {
  state: () => ({
    clients: [] as Client[],
    supplyPoints: [] as SupplyPoint[],
    clientInfo: {} as Client,
    supplyInfo: {} as SupplyPoint,
  }),
  actions: {
    async fetchClients() {
      try {
        this.clients = await $fetch<Client[]>('/api/clients')
      } catch (error) {
        console.error('Failed to fetch clients: ', error)
      }
    },
    async fetchSupplyPoints() {
      try {
        const supplyPointsResponse= await $fetch<SupplyPointResponse[]>('/api/supplyPoints')
        this.supplyPoints = supplyPointsResponse.map(supplyPoint => ({
          ...supplyPoint,
          invoiced_amount: parseFloat(supplyPoint.invoiced_amount),
          power: {
            p1: parseFloat(supplyPoint.power.p1),
            p2: parseFloat(supplyPoint.power.p2),
          },
        }))
      } catch (error) {
        console.error('Failed to supply points information: ', error)
      }
    },
    setClientByCups(cups: string) {
      this.clientInfo = this.clients.find(client => client.cups === cups) || {} as Client
    },
    setSupplyInfoByCups(cups: string) {
      this.supplyInfo = this.supplyPoints.find(supplyPoint => supplyPoint.cups === cups) || {} as SupplyPoint
    },
    getNeighborByCups(cups: string): SupplyPoint {
      return this.supplyPoints.find(client => client.cups === cups) || {} as SupplyPoint
    },
    hasClientInfo(): boolean {
      return this.clientInfo.cups !== undefined
    },
    hasClientSupplyPointInfo(): boolean {
      return this.supplyInfo.cups !== undefined
    }
  },
})