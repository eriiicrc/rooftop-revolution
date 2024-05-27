import { defineStore } from 'pinia'
import type { Client, SupplyPoint } from '@/types'

export const useMainStore = defineStore('main', {
  state: () => ({
    clients: [] as Client[],
    currentClient: undefined as Client | undefined,
    supplyPoints: [] as SupplyPoint[],
  }),
  actions: {
    async fetchClients() {
      this.clients = await $fetch<Client[]>('/api/clients')
    },
    async fetchSupplyPoints() {
      this.supplyPoints = await $fetch<SupplyPoint[]>('/api/supplyPoints')
    }
  },
})