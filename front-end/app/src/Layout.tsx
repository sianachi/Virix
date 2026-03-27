import { ToastProvider } from './components/Toast'
import ServerSidebar from './components/ServerSidebar'
import RoomsSidebar from './components/RoomsSidebar'
import ChatArea from './components/ChatArea'
import MembersSidebar from './components/MembersSidebar'

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
