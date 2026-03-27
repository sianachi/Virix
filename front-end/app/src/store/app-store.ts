import { create } from 'zustand'

interface AppState {
  activeServer: string
  activeRoom: string
  roomsCollapsed: boolean
  membersCollapsed: boolean
  setActiveServer: (id: string) => void
  setActiveRoom: (id: string) => void
  toggleRoomsCollapsed: () => void
  toggleMembersCollapsed: () => void
}

export const useAppStore = create<AppState>((set) => ({
  activeServer: 's1',
  activeRoom: 'general',
  roomsCollapsed: false,
  membersCollapsed: false,
  setActiveServer: (id) => set({ activeServer: id }),
  setActiveRoom: (id) => set({ activeRoom: id }),
  toggleRoomsCollapsed: () => set((s) => ({ roomsCollapsed: !s.roomsCollapsed })),
  toggleMembersCollapsed: () => set((s) => ({ membersCollapsed: !s.membersCollapsed })),
}))
