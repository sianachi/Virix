# MVP Checklist

> Full UI plan: [`ui_plan.md`](ui_plan.md)

Each feature groups backend and frontend work together so a feature can be built, tested, and shipped end-to-end before moving on.

---

## Feature 1 — Infrastructure & Project Setup

> Get both stacks running, talking to each other, and ready for feature work.

**Backend**
- [x] CORS configuration in `main.py` (allow frontend origin)
- [x] `.env` file with `SECRET_KEY`, `DATABASE_URL`, etc.
- [x] Pagination helpers (cursor-based for messages)
- [x] Rate limiting on auth and message endpoints

**Frontend**
- [x] Install React Router v7, define full route structure
- [x] Create `lib/api.ts` — fetch/axios wrapper with auth headers, base URL, error handling
- [x] Create `lib/ws.ts` — WebSocket connection manager (connect, reconnect, subscribe)
- [x] Create ui-store (sidebar collapsed, active modal, theme preference)
- [x] Reorganize components into domain folders (`layout/`, `chat/`, `ui/`, etc.)

---

## Feature 2 — Auth & Onboarding

> Users can register, log in, log out, and be routed correctly based on auth state.

**Backend**
- [x] Logout endpoint (token invalidation/blacklist)
- [x] Input validation — minimum password length, valid email format
- [x] `GET /users/me` — return the currently authenticated user

**Frontend**
- [ ] Build LandingPage at `/` (marketing page with CTA)
- [ ] Build LoginPage with inline form validation (email format, password length)
- [ ] Build RegisterPage with validation (username availability, password strength, confirm match)
- [ ] Build AuthGuard wrapper — redirect unauthenticated users to `/login`
- [ ] Create auth-store (user, token, login/logout actions, token persistence in localStorage)
- [ ] Connect login/register forms to backend auth endpoints
- [ ] Add full-screen loading state for initial auth check
- [ ] Handle auth errors — invalid credentials toast, session expired redirect

---

## Feature 3 — Servers

> Users can create, join, browse, and manage servers (communities).

**Backend**
- [ ] New `Server` model (id, name, icon, color, owner_id, created_at)
- [ ] New `ServerMember` junction table (server_id, user_id, role, joined_at)
- [ ] `GET /servers` — list servers the current user belongs to
- [ ] `POST /servers` — create a new server (auto-create `#general` text room)
- [ ] `GET /servers/{server_id}` — fetch server details
- [ ] `PATCH /servers/{server_id}` — update server (name, icon, color) — owner only
- [ ] `DELETE /servers/{server_id}` — delete server — owner only
- [ ] `POST /servers/{server_id}/members` — invite/add member to server
- [ ] `DELETE /servers/{server_id}/members/me` — leave server
- [ ] `GET /servers/{server_id}/members` — list server members with roles and status

**Frontend**
- [ ] Create servers-store — fetch server list, active server, CRUD actions
- [ ] Wire ServerBar to real server list (replace mock data)
- [ ] Create Server modal — name, emoji icon picker, color palette
- [ ] Join Server modal — invite link/code input
- [ ] Server name dropdown menu (server settings, invite, leave)
- [ ] Server Settings view — overview (name, icon, color, description)
- [ ] Server Settings — member management (list members, assign roles, kick)
- [ ] Server Settings — role management (create/edit roles with permissions)
- [ ] Server Settings — invite link generation and management
- [ ] Delete server flow — confirmation dialog requiring server name input
- [ ] Leave server flow — confirmation dialog
- [ ] Loading state: skeleton circles in server bar
- [ ] Empty state: "No servers yet" with Create/Join buttons
- [ ] First-time user prompt: "Create your first server" on empty home

---

## Feature 4 — Rooms

> Servers contain rooms. Users navigate between text and voice rooms.

**Backend**
- [ ] Add `type` field to Room model (`text` | `voice`)
- [ ] Add `description` field to Room model
- [ ] Add `server_id` foreign key to Room model (rooms belong to servers)
- [ ] `GET /servers/{server_id}/rooms` — list rooms in a server
- [ ] `GET /rooms/{room_id}` — fetch a single room's details
- [ ] `POST /servers/{server_id}/rooms` — create room within a server
- [ ] `PATCH /rooms/{room_id}` — update room (name, description, type)
- [ ] `DELETE /rooms/{room_id}` — delete room
- [ ] `DELETE /rooms/{room_id}/members/me` — leave room

**Frontend**
- [ ] Create rooms-store — fetch rooms per server, active room, CRUD actions
- [ ] Wire RoomsSidebar to real room list (replace mock data)
- [ ] RoomCategory component — collapsible "TEXT ROOMS" / "VOICE ROOMS" headers
- [ ] RoomItem component — room name, unread dot, mention badge, voice user list
- [ ] Create Room modal — type toggle (text/voice), name, description
- [ ] Room header — room name, description, action icons (search, pins, members toggle)
- [ ] Server/room navigation via URL routing (`/servers/:serverId/rooms/:roomId`)
- [ ] Auto-select first text room when entering a server
- [ ] Loading state: skeleton rows in room list
- [ ] Empty state: "No rooms in this server" with Create Room button (admin only)

---

## Feature 5 — Messaging

> Users send, receive, edit, and delete messages in real time within text rooms.

**Backend**
- [ ] `POST /rooms/{room_id}/messages` — send a message
- [ ] `GET /rooms/{room_id}/messages` — fetch message history (cursor-based pagination)
- [ ] `PATCH /messages/{message_id}` — edit a message (author only)
- [ ] `DELETE /messages/{message_id}` — delete a message (author or admin)
- [ ] WebSocket endpoint for live message delivery
- [ ] Broadcast `message_new` to all members of a room
- [ ] Broadcast `message_edit` to all members of a room
- [ ] Broadcast `message_delete` to all members of a room
- [ ] Typing indicator events (`user_typing_start`, `user_typing_stop`)
- [ ] Unread tracking — track last-read message per user per room, compute unread counts

**Frontend**
- [ ] Create messages-store — paginated fetch, send/edit/delete, optimistic updates
- [ ] Wire MessageList to real message data (replace mock data)
- [ ] Connect MessageInput to `POST /rooms/:id/messages`
- [ ] Optimistic message sending — message appears immediately, dims until confirmed, shows retry on failure
- [ ] Infinite scroll — load older messages on scroll up
- [ ] WebSocket integration — append new messages, update edits, remove deletes in real time
- [ ] Typing indicator — send typing events on input, show "X is typing..." from WebSocket
- [ ] DateSeparator component — date dividers between message groups
- [ ] UnreadSeparator component — "New Messages" divider at first unread message
- [ ] Message edit — inline edit mode on own messages (Escape to cancel, Enter to save)
- [ ] Message delete — confirmation dialog, author or admin only
- [ ] Unread badges on rooms — dot for unread, count for mentions
- [ ] "More" dropdown on messages — Edit, Delete, Pin, Copy Text
- [ ] Loading state: 3-5 skeleton message blocks
- [ ] Empty state: "No messages yet. Start the conversation!"
- [ ] Error state: failed message with red border and retry icon
- [ ] Reconnection banner: "Reconnecting..." with auto-retry on WebSocket disconnect

---

## Feature 6 — Reactions

> Users react to messages with emoji. Reactions update in real time.

**Backend**
- [ ] New `Reaction` model (id, message_id, user_id, emoji, created_at)
- [ ] `POST /messages/{message_id}/reactions` — add a reaction (emoji in body)
- [ ] `DELETE /messages/{message_id}/reactions/{emoji}` — remove own reaction
- [ ] Return reactions with message queries (aggregated: emoji, count, whether current user reacted)
- [ ] Broadcast `reaction_add` / `reaction_remove` to room members via WebSocket

**Frontend**
- [ ] Wire ReactionBar to real data — show aggregated reactions per message
- [ ] Click existing reaction to toggle own vote (add/remove)
- [ ] ReactionPicker — quick emoji grid on message hover action
- [ ] EmojiPickerPopover — full emoji picker for custom reactions
- [ ] WebSocket integration — increment/decrement/add/remove reactions in real time
- [ ] Reaction animation — scale pop on add

---

## Feature 7 — User Profiles & Presence

> Users customize their profile, set status, and see each other's presence in real time.

**Backend**
- [x] Update `status` on login/logout (online/offline via `UserStatus` enum)
- [x] Extend User model with profile fields: `emoji`, `color`, `status`, `activity`
- [ ] `PATCH /users/me` — update own profile (emoji, color, activity, status)
- [ ] `GET /users/{user_id}` — fetch a single user's public profile
- [ ] Broadcast `presence_update` via WebSocket — status changes to relevant servers

**Frontend**
- [ ] Create members-store — fetch member list per server, presence updates
- [ ] Wire MembersSidebar to real member data — online/offline sections
- [ ] ProfilePopover — click a member to see profile card (avatar, status, activity, roles, Message button)
- [ ] UserPanel (bottom of rooms sidebar) — current user avatar, status, quick actions (mic, deafen, settings)
- [ ] Presence status selector — dropdown to set online/idle/dnd/invisible
- [ ] WebSocket integration — update status dots in member list and friend list in real time
- [ ] User Settings view — account section (email, username, password change)
- [ ] User Settings — profile section (emoji picker, color palette, activity text)
- [ ] User Settings — appearance section (light/dark/system theme toggle, font size, compact mode)
- [ ] User Settings — voice section (input/output device selection, noise suppression, video preview)
- [ ] Theme toggle with persistence (localStorage)
- [ ] Log out with confirmation dialog
- [ ] Loading state: skeleton rows with circle + line in member list

---

## Feature 8 — Friends & Direct Messages

> Users add friends and have private 1-on-1 conversations.

**Backend**
- [ ] New `Friendship` model (id, requester_id, addressee_id, status: pending/accepted/declined)
- [ ] `POST /friends/requests` — send a friend request
- [ ] `PATCH /friends/requests/{request_id}` — accept or decline
- [ ] `DELETE /friends/{user_id}` — remove friend
- [ ] `GET /friends` — list friends with status (filter: all, online, pending)
- [ ] New `DirectMessage` model or reuse Room model with `type: 'dm'`
- [ ] `POST /dm/{user_id}` — create or get existing DM room
- [ ] `GET /dm` — list DM conversations with last message preview
- [ ] Message endpoints reused for DM rooms
- [ ] WebSocket events for DM messages and friend request notifications

**Frontend**
- [ ] Create friends-store — friend list, requests, DM conversations
- [ ] HomeView — friends list with tabs (All, Online, Pending)
- [ ] FriendItem — avatar, name, status, activity, action buttons (Message, Remove)
- [ ] Friend request UI — incoming (Accept/Decline), outgoing (Cancel)
- [ ] Add friend flow — search by username
- [ ] DMSidebar — list DM conversations (replaces RoomsSidebar when Home is active)
- [ ] DM conversation view — reuse ChatView, header shows other user's name/status
- [ ] DM detail panel — other user's full profile card
- [ ] WebSocket integration — new DM messages, friend request notifications
- [ ] Empty state: "Add friends to start chatting"

---

## Feature 9 — Voice & Video

> Users join voice rooms for real-time audio/video communication.

**Backend**
- [ ] Voice room presence tracking (who is currently in a voice room)
- [ ] `POST /rooms/{room_id}/voice/join` — join a voice room
- [ ] `POST /rooms/{room_id}/voice/leave` — leave a voice room
- [ ] `PATCH /voice/me` — update mute/deafen state (`{ muted, deafened }`)
- [ ] Broadcast voice room user list changes via WebSocket (`voice_user_join`, `voice_user_leave`, `voice_user_update`)
- [ ] WebRTC signaling endpoint — exchange offer/answer/ICE candidates between peers
- [ ] STUN/TURN server configuration
- [ ] Room membership events — broadcast join/leave to room members

**Frontend**
- [ ] Create voice-store — connection state, participants, local media tracks
- [ ] Create `lib/webrtc.ts` — WebRTC peer connection helpers
- [ ] Create `useWebRTC` hook — manage peer connections, media streams
- [ ] Create `useMediaDevices` hook — enumerate/select audio/video devices
- [ ] VoiceView — main content area when in a voice room
- [ ] ParticipantGrid — responsive grid layout (2-4 columns based on participant count)
- [ ] ParticipantTile — avatar/video feed, name, status icons (muted, deafened, speaking)
- [ ] Speaking detection — audio level monitoring, green pulsing border on active speaker
- [ ] VoiceControlBar — mute, deafen, video toggle, screen share, emoji react, leave
- [ ] VoiceConnectionBanner — persistent indicator in RoomsSidebar when connected but viewing a text room
- [ ] ScreenShareView — promoted large view for screen share, participants shrink to strip
- [ ] Video toggle — switch between avatar fallback and camera feed
- [ ] "Join Voice" button in main content when clicking a voice room
- [ ] Voice user list in RoomsSidebar under each voice room (name, mute status)
- [ ] Loading state: "Connecting..." with pulsing animation

---

## Feature 10 — Polish, Accessibility & Mobile

> Responsive design, keyboard navigation, accessibility, and performance.

**Responsive Design**
- [ ] Desktop (>= 1024px) — full 4-column layout
- [ ] Tablet (768-1023px) — server bar + main content; sidebars as overlay drawers
- [ ] Mobile (< 768px) — single column with bottom navigation bar
- [ ] Create `useBreakpoint` hook for responsive logic
- [ ] Mobile bottom navigation — Home, Servers, Chat, DMs, Profile
- [ ] Mobile drawer navigation for rooms and members
- [ ] Touch gestures — long press for message actions, swipe right to go back

**Accessibility**
- [ ] Keyboard shortcuts — Tab navigation, Escape to close, Shift+Enter for newline
- [ ] Quick switcher (Ctrl/Cmd+K) — search rooms, servers, users
- [ ] ARIA roles — `navigation`, `listbox`, `log`, `dialog`, `tooltip`
- [ ] Focus management — trap focus in modals, return focus on close, auto-focus inputs
- [ ] Status indicators with `aria-label` (not color-only)
- [ ] Reaction labels: `aria-label="thumbs up, 3 reactions, you reacted"`
- [ ] `useKeyboardShortcuts` hook
- [ ] Screen reader testing pass

**Performance**
- [ ] Virtualized message list (only render visible messages)
- [ ] Lazy-load routes and heavy components (code splitting)
- [ ] Debounce typing indicator events (300ms)
- [ ] Debounce search inputs (500ms)
- [ ] Image/asset lazy loading

**Visual Polish**
- [ ] Animation and transition consistency pass
- [ ] Error boundary components (graceful crash recovery)
- [ ] Skeleton loaders for every async list
- [ ] Toast notification system for all user-facing errors and confirmations
- [ ] Empty state illustrations or messaging for every view
- [ ] Network offline banner: "No internet connection"
- [ ] Rate limit feedback: "Slow down! Try again in a moment"

---

## Future / Post-MVP

> Not needed now. Revisit when scaling beyond a small user base.

- [ ] Migrate from SQLite to Postgres (when concurrent writes or multiple workers become a bottleneck)
- [ ] Horizontal scaling — multiple backend processes behind a load balancer
- [ ] Redis for WebSocket pub/sub across workers
- [ ] CDN for static assets and media uploads
- [ ] File/image upload storage (S3 or equivalent)
- [ ] Full-text message search (Postgres `tsvector` or dedicated search service)
- [ ] Email verification and password reset flow
- [ ] OAuth providers (Google, GitHub login)
- [ ] Push notifications (mobile/desktop)
