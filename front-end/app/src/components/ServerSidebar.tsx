import { cn } from '../lib/cn'
import { useAppStore } from '../store/app-store'
import { servers } from '../data/servers'
import Logo from './Logo'
import Tooltip from './Tooltip'
import Separator from './Separator'
import Emoji from './Emoji'

export default function ServerSidebar() {
  const activeServer = useAppStore((s) => s.activeServer)
  const setActiveServer = useAppStore((s) => s.setActiveServer)

  return (
    <div className="w-[72px] shrink-0 bg-surface-alt flex flex-col items-center py-3 gap-2 overflow-y-auto">
      {servers.map((server, index) => (
        <div key={server.id}>
          {index === 1 && <Separator className="w-8 my-1" />}
          <Tooltip content={server.label} side="right">
            <div className="relative flex items-center justify-center">
              {activeServer === server.id && (
                <span className="absolute left-0 w-[3px] h-10 rounded-r-full bg-primary" />
              )}
              <button
                onClick={() => setActiveServer(server.id)}
                className={cn(
                  'w-12 h-12 flex items-center justify-center text-xl transition-all duration-200 cursor-pointer',
                  activeServer === server.id
                    ? 'rounded-[16px]'
                    : 'rounded-full hover:rounded-[16px]',
                  activeServer === server.id
                    ? 'shadow-md'
                    : 'hover:shadow-sm'
                )}
                style={{
                  backgroundColor:
                    activeServer === server.id
                      ? `${server.color}18`
                      : 'hsl(260, 20%, 93%)',
                  boxShadow:
                    activeServer === server.id
                      ? `0 4px 12px ${server.color}25`
                      : undefined,
                }}
              >
                {server.id === 'home' && activeServer === 'home' ? (
                  <Logo size={28} />
                ) : (
                  <Emoji emoji={server.icon} size={24} />
                )}
              </button>
            </div>
          </Tooltip>
        </div>
      ))}

      <Separator className="w-8 my-1" />

      <Tooltip content="Create a Room" side="right">
        <button className="w-12 h-12 rounded-full flex items-center justify-center text-xl bg-[hsl(260,20%,93%)] hover:bg-[#10B981] hover:text-white transition-all duration-200 cursor-pointer text-online hover:rounded-[16px]">
          +
        </button>
      </Tooltip>
    </div>
  )
}
