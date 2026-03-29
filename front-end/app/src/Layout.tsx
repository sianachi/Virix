import { ToastProvider } from './components/ui/Toast'
import ServerSidebar from './components/layout/ServerSidebar'
import RoomsSidebar from './components/layout/RoomsSidebar'
import ChatArea from './components/layout/ChatArea'
import MembersSidebar from './components/layout/MembersSidebar'

export default function Layout() {
  return (
    <ToastProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        <ServerSidebar />
        <RoomsSidebar />
        <ChatArea />
        <MembersSidebar />
      </div>
    </ToastProvider>
  )
}
