import { create } from 'zustand'

interface AppState {
  activeServer: string
  activeRoom: string
  setActiveServer: (id: string) => void
  setActiveRoom: (id: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  activeServer: 'home',
  activeRoom: '',
  setActiveServer: (id) => set({ activeServer: id }),
  setActiveRoom: (id) => set({ activeRoom: id }),
}))
