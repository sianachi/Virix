import { create } from 'zustand'

type Theme = 'light' | 'dark' | 'system'
type ModalType = 'create-server' | 'join-server' | 'create-room' | 'invite-members' | null

interface UIState {
  // Sidebar visibility
  roomsCollapsed: boolean
  membersCollapsed: boolean
  toggleRoomsCollapsed: () => void
  toggleMembersCollapsed: () => void

  // Modal management
  activeModal: ModalType
  openModal: (modal: ModalType) => void
  closeModal: () => void

  // Theme
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useUIStore = create<UIState>((set) => ({
  // Sidebar visibility
  roomsCollapsed: false,
  membersCollapsed: false,
  toggleRoomsCollapsed: () => set((s) => ({ roomsCollapsed: !s.roomsCollapsed })),
  toggleMembersCollapsed: () => set((s) => ({ membersCollapsed: !s.membersCollapsed })),

  // Modal management
  activeModal: null,
  openModal: (modal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),

  // Theme
  theme: (localStorage.getItem('theme') as Theme) ?? 'system',
  setTheme: (theme) => {
    localStorage.setItem('theme', theme)
    set({ theme })
  },
}))
