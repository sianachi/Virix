# Chatty — Full UI Plan

> A real-time communication app built around **rooms** (text + voice/video) organized within **servers** (communities). This document is the single source of truth for every screen, component, interaction, and design decision before production implementation begins.

---

## Table of Contents

1. [App Architecture Overview](#1-app-architecture-overview)
2. [Screen Inventory](#2-screen-inventory)
3. [Screen-by-Screen Specifications](#3-screen-by-screen-specifications)
4. [Component Hierarchy](#4-component-hierarchy)
5. [User Flows](#5-user-flows)
6. [Design System](#6-design-system)
7. [State Management](#7-state-management)
8. [Real-Time UI Behavior](#8-real-time-ui-behavior)
9. [Responsive & Mobile Strategy](#9-responsive--mobile-strategy)
10. [Accessibility](#10-accessibility)
11. [Loading, Empty, & Error States](#11-loading-empty--error-states)
12. [Implementation Phases](#12-implementation-phases)

---

## 1. App Architecture Overview

### Layout Zones

The app uses a **4-column layout** on desktop that collapses progressively on smaller screens:

```
┌──────┬────────────┬──────────────────────────┬────────────┐
│  A   │     B      │           C              │     D      │
│      │            │                          │            │
│Server│   Rooms    │       Main Content       │  Members / │
│  Bar │  Sidebar   │   (Chat / Voice / etc)   │   Detail   │
│      │            │                          │   Panel    │
│ 72px │   240px    │        flex-1            │   240px    │
└──────┴────────────┴──────────────────────────┴────────────┘
```

| Zone | Purpose | Collapsible |
|------|---------|-------------|
| A — Server Bar | Navigate between servers + Home | No (icon-only, always visible) |
| B — Rooms Sidebar | Room list, server name, user panel | Yes (toggle or mobile drawer) |
| C — Main Content | Chat feed, voice room, settings, etc. | No (primary area) |
| D — Detail Panel | Member list, user profile, room info | Yes (toggle or mobile drawer) |

### View Modes

The **Main Content** area (Zone C) switches between distinct view modes:

| Mode | When Active |
|------|-------------|
| **Chat View** | User has selected a text room |
| **Voice/Video View** | User has selected or joined a voice room |
| **Server Settings** | User opened settings for the current server |
| **User Settings** | User opened their own profile/account settings |
| **Home / DMs** | User selected the Home icon (direct messages) |
| **Server Discovery** | User clicked "Join/Create Server" |

---

## 2. Screen Inventory

### Unauthenticated Screens (no sidebar layout)

| # | Screen | Route |
|---|--------|-------|
| U1 | Login (entry point) | `/` and `/login` |
| U2 | Register | `/register` |
| U3 | Forgot Password | `/forgot-password` |
| U4 | Reset Password | `/reset-password/:token` |

> **No landing page.** The login screen is the front door and introduces the app directly.

### Authenticated Screens (within sidebar layout)

| # | Screen | Route |
|---|--------|-------|
| A1 | Home — Friends / DMs | `/home` |
| A2 | DM Conversation | `/home/dm/:userId` |
| A3 | Server — Text Room | `/servers/:serverId/rooms/:roomId` |
| A4 | Server — Voice Room | `/servers/:serverId/rooms/:roomId` (voice type) |
| A5 | Server Settings | `/servers/:serverId/settings` |
| A6 | User Settings | `/settings` |
| A7 | Create Server | Modal over any screen |
| A8 | Join Server | Modal over any screen |
| A9 | Create Room | Modal within server |
| A10 | Invite Members | Modal within server |

---

## 3. Screen-by-Screen Specifications

### U1 — Login (App Entry Point)

The login page **is** the introduction to the app. No separate landing page.

**Layout: 50/50 horizontal split**

```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│                      │  [Logo]              │
│   Hero illustration  │  Welcome to Chatty   │
│   (auth-hero.png)    │  Your rooms. Your    │
│                      │  people. Chat, call, │
│   object-cover       │  and hang out...     │
│   object-left        │                      │
│                      │  USERNAME            │
│                      │  [________________]  │
│                      │                      │
│                      │  PASSWORD            │
│                      │  [________________]  │
│                      │                      │
│                      │  [Log In]            │
│                      │                      │
│                      │  New here? Sign up   │
└──────────────────────┴──────────────────────┘
```

**Key decisions:**
- Left half: anime-style hero image (purple night sky, fits brand palette)
- Right half: form with app introduction copy — serves as both welcome and login
- No back button (this is the root page)
- Mobile: image hides, form takes full width

**Behavior:**
- Inline validation (username required, password minimum 8 chars)
- Inline error message on invalid credentials (not toast)
- Redirect to `/home` on success
- "Log In" button shows spinner while request is in-flight

---

### U2 — Register

Same 50/50 split layout as login, shared hero image.

```
┌──────────────────────┬──────────────────────┐
│                      │  [← Back]            │
│                      │                      │
│   Hero illustration  │  [Logo]              │
│   (auth-hero.png)    │  Create an account   │
│                      │  Join Chatty and     │
│                      │  start chatting      │
│                      │                      │
│                      │  USERNAME            │
│                      │  [________________]  │
│                      │  EMAIL               │
│                      │  [________________]  │
│                      │  PASSWORD            │
│                      │  [________________]  │
│                      │  [===] Fair          │
│                      │  CONFIRM PASSWORD    │
│                      │  [________________]  │
│                      │                      │
│                      │  [Sign Up]           │
│                      │                      │
│                      │  Have an account?    │
│                      │  Log in              │
└──────────────────────┴──────────────────────┘
```

**Key decisions:**
- Back button (top-left of form side) → returns to `/login`
- Password strength bar (red/amber/green) with label

**Behavior:**
- Real-time validation: password strength indicator (weak / fair / strong)
- Live "Passwords do not match" feedback below confirm field
- On success: auto-login and redirect to `/home`

---

### U3 / U4 — Forgot / Reset Password

Standard email-based flow. Not a priority for MVP but routes should be reserved.

---

### A1 — Home (Friends & DMs)

When the user clicks the Home icon (top of Server Bar):

**Rooms Sidebar (Zone B) becomes "Direct Messages" sidebar:**

```
┌─────────────────┐
│ Direct Messages  │
│ [Search DMs...]  │
│─────────────────│
│ [+] New DM       │
│─────────────────│
│ 🟢 Alex          │
│ 🟡 Jordan        │
│ 🔴 Sam           │
│ ⚫ Riley         │
│                   │
│                   │
│                   │
├─────────────────┤
│ [🐱 You] Online  │
│ [⚙️]             │
└─────────────────┘
```

**Main Content (Zone C) shows Friends list:**

```
┌────────────────────────────────────────┐
│  Friends   [All] [Online] [Pending]    │
│  ──────────────────────────────────    │
│  🔍 Search friends...                  │
│                                        │
│  🟢 Alex         Playing Valorant   [...] │
│  🟡 Jordan       Idle for 15m       [...] │
│  🟢 Sam          ──                 [...] │
│                                        │
│  PENDING — 2                           │
│  Morgan (incoming)  [Accept] [Decline] │
│  Taylor (outgoing)  [Cancel]           │
└────────────────────────────────────────┘
```

**Detail Panel (Zone D):** Hidden on Home view (or shows selected friend's profile).

---

### A2 — DM Conversation

Selecting a user from the DM sidebar opens a 1-on-1 chat. Same chat UI as a text room, but:
- No room header description
- Header shows the other user's name, avatar, and status
- No member sidebar
- Detail panel shows the other user's full profile card

---

### A3 — Server: Text Room (Primary Chat View)

This is the **core screen** of the app and is already prototyped.

**Zone B — Rooms Sidebar:**
```
┌─────────────────┐
│ Server Name   [v]│  ← dropdown: server settings, invite, leave
│─────────────────│
│ TEXT ROOMS       │
│ # welcome        │
│ # general      2 │  ← unread count
│ # memes    @3   │  ← mention badge
│ # off-topic      │
│─────────────────│
│ VOICE ROOMS      │
│ 🔊 hangout       │
│   🐱 Alex  🎤    │  ← connected user, mic on
│   🐶 Jordan 🔇   │  ← mic muted
│ 🔊 music         │
│─────────────────│
├─────────────────┤
│ [🦊 You] Online  │
│ [🎤] [🔇] [⚙️]  │  ← mic, deafen, settings
└─────────────────┘
```

**Zone C — Chat Area:**
```
┌────────────────────────────────────────┐
│  # general         🔍  📌  👥  ⚙️     │  ← room name, search, pins, members toggle, settings
│  A place for general discussion        │  ← room description
│────────────────────────────────────────│
│                                        │
│  ── March 28, 2026 ──                  │  ← date separator
│                                        │
│  🐱 Alex            Today at 10:23 AM  │
│  Hey everyone! How's the project going?│
│  👍 3  ❤️ 1  [+]                       │  ← reactions
│                                        │
│  Anyone seen the new designs?          │  ← grouped (same author)
│                                        │
│  🐶 Jordan          Today at 10:25 AM  │
│  Yeah they look amazing 🔥             │
│                                        │
│  ── New Messages ──                    │  ← unread separator
│                                        │
│  🦊 Sam             Today at 11:02 AM  │
│  Just pushed the latest changes        │
│                                        │
│  Alex and Jordan are typing...         │  ← typing indicator
│────────────────────────────────────────│
│  [+] Message #general   [😀] [📎] [↵] │  ← input bar
└────────────────────────────────────────┘
```

**Message hover actions** (appear on message hover, right-aligned):
```
  ┌──────────────────────────────┐
  │  😀  👍  ↩️  •••             │
  │  React  Like  Reply  More   │
  └──────────────────────────────┘
```

**"More" dropdown:**
- Edit Message (own messages only)
- Delete Message (own or admin)
- Pin Message (admin)
- Copy Text

**Zone D — Members Sidebar:**
```
┌─────────────────┐
│ ONLINE — 5       │
│ 🐱 Alex    Admin │
│ 🐶 Jordan       │
│ 🦊 Sam          │
│ 🐸 Morgan       │
│ 🐼 Riley        │
│                   │
│ OFFLINE — 3      │
│ 🐰 Taylor       │
│ 🦉 Casey        │
│ 🐙 Drew         │
└─────────────────┘
```

Clicking a member opens a **profile popover:**
```
┌────────────────────┐
│   🐱               │
│   Alex              │
│   🟢 Online         │
│   ── About ──       │
│   "Building cool    │
│    things"          │
│   ── Activity ──    │
│   In Figma          │
│   ── Roles ──       │
│   [Admin]           │
│                     │
│   [Message]  [...]  │
└────────────────────┘
```

---

### A4 — Server: Voice/Video Room

When user selects a voice room, Zone C switches to the voice/video view:

```
┌────────────────────────────────────────┐
│  🔊 hangout                     [⚙️]  │
│────────────────────────────────────────│
│                                        │
│       ┌─────────┐   ┌─────────┐       │
│       │  🐱     │   │  🐶     │       │
│       │  Alex   │   │ Jordan  │       │
│       │  🟢 🎤  │   │  🟢 🔇  │       │
│       └─────────┘   └─────────┘       │
│                                        │
│       ┌─────────┐   ┌─────────┐       │
│       │  🦊     │   │  🐸     │       │
│       │   Sam   │   │ Morgan  │       │
│       │  🟢 🎤  │   │  🟢 🎤  │       │
│       └─────────┘   └─────────┘       │
│                                        │
│────────────────────────────────────────│
│  ┌──────────────────────────────────┐  │
│  │ 🎤 Mute │ 🔇 Deafen │ 📹 Video │  │
│  │ 🖥️ Share │ 😀 React  │ 🚪 Leave │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

**Participant tiles:**
- Grid layout, responsive (2-4 columns depending on count)
- Each tile shows: avatar/emoji, name, status indicators (speaking, muted, deafened)
- When video is on: tile becomes the video feed with name overlay
- Speaking indicator: green pulsing border around the active speaker's tile
- Screen share: promoted to large view, other participants shrink to a strip

**Voice control bar (bottom of Zone C):**
| Button | Action |
|--------|--------|
| Mute / Unmute | Toggle mic |
| Deafen / Undeafen | Toggle all audio |
| Video On / Off | Toggle camera |
| Share Screen | Start/stop screen share |
| React | Quick emoji reaction that floats up from your tile |
| Leave | Disconnect from voice room |

**Voice connection banner** (appears in Zone B when connected to voice but viewing a text room):
```
┌─────────────────┐
│ 🔊 hangout       │
│ Connected 04:23  │
│ [Disconnect]     │
└─────────────────┘
```

This lets users stay in voice while chatting in text rooms.

---

### A5 — Server Settings

Accessed via server name dropdown > "Server Settings". Replaces Zone C content.

**Left navigation within settings:**
```
┌────────────┬───────────────────────────────┐
│ Overview   │  Server Name: [Design Team]   │
│ Roles      │  Icon: [🎨] Color: [■]       │
│ Members    │                               │
│ Rooms      │  [Save Changes]               │
│ Invites    │                               │
│            │                               │
│ ─────────  │                               │
│ [Delete    │                               │
│  Server]   │                               │
└────────────┴───────────────────────────────┘
```

**Settings sections:**

| Section | Content |
|---------|---------|
| Overview | Server name, icon (emoji picker), color (palette), description |
| Roles | Create/edit roles with permissions (admin, moderator, member) |
| Members | List all members, assign roles, kick/ban |
| Rooms | Reorder rooms, create/edit/delete rooms |
| Invites | Generate invite links, view active invites, revoke |
| Danger Zone | Delete server (confirmation dialog with server name input) |

Only visible to server owner / admins.

---

### A6 — User Settings

Accessed via gear icon in the User Panel. Full-screen overlay or replaces main content.

```
┌────────────┬───────────────────────────────┐
│ My Account │  PROFILE                      │
│ Profile    │  Username: [foxdev]           │
│ Appearance │  Email: fox@example.com       │
│ Voice      │  [Change Password]            │
│            │                               │
│ ─────────  │  AVATAR                       │
│ [Log Out]  │  Emoji: [🦊]  Color: [■ ■ ■] │
│            │  Preview:  (live avatar)      │
│            │                               │
│            │  ACTIVITY STATUS              │
│            │  [Building cool things___]    │
│            │                               │
│            │  PRESENCE                     │
│            │  (•) Online  ( ) Idle         │
│            │  ( ) DND     ( ) Invisible    │
│            │                               │
│            │  [Save Changes]               │
└────────────┴───────────────────────────────┘
```

**Settings sections:**

| Section | Content |
|---------|---------|
| My Account | Email, username, password change |
| Profile | Emoji avatar, gradient color, activity status |
| Appearance | Theme toggle (light/dark/system), font size, compact mode |
| Voice & Video | Input/output device selection, noise suppression toggle, video preview |
| Log Out | Confirm dialog, invalidates token |

---

### A7 — Create Server (Modal)

```
┌──────────────────────────────────────┐
│  Create Your Server              [x] │
│                                      │
│  Give your server a personality.     │
│                                      │
│  Server Name  [________________]     │
│  Icon         [🎮] ← emoji picker   │
│  Color        [■ ■ ■ ■ ■ ■]         │
│                                      │
│           [Create Server]            │
└──────────────────────────────────────┘
```

On create: navigate to the new server's default `#general` room.

---

### A8 — Join Server (Modal)

```
┌──────────────────────────────────────┐
│  Join a Server                   [x] │
│                                      │
│  Enter an invite link or code:       │
│  [______________________________]    │
│                                      │
│  Example: chatty.app/invite/abc123   │
│                                      │
│           [Join Server]              │
└──────────────────────────────────────┘
```

---

### A9 — Create Room (Modal)

```
┌──────────────────────────────────────┐
│  Create Room                     [x] │
│                                      │
│  Type   (•) Text   ( ) Voice        │
│                                      │
│  Name   [________________]           │
│  Description (optional)              │
│         [________________________]   │
│                                      │
│           [Create Room]              │
└──────────────────────────────────────┘
```

---

### A10 — Invite Members (Modal)

```
┌──────────────────────────────────────┐
│  Invite Friends                  [x] │
│                                      │
│  Share this link to invite people:   │
│  ┌──────────────────────┬──────┐     │
│  │ chatty.app/invite/x7k│ Copy │     │
│  └──────────────────────┴──────┘     │
│                                      │
│  Expires in: [24 hours ▾]           │
│                                      │
│  Or search by username:              │
│  [______________________________]    │
│                                      │
│  🐱 Alex               [Invite]     │
│  🐶 Jordan             [Sent ✓]     │
└──────────────────────────────────────┘
```

---

## 4. Component Hierarchy

### Component Tree (Production)

```
App
├── AuthGuard (redirect unauthenticated users)
│
├── [Unauthenticated Routes]
│   ├── LoginPage (also serves `/`, the app entry point)
│   ├── RegisterPage
│   └── ForgotPasswordPage
│
└── [Authenticated Routes]
    └── Layout
        ├── ServerBar
        │   ├── HomeButton
        │   ├── ServerIcon (per server)
        │   ├── Separator
        │   ├── CreateServerButton (opens A7 modal)
        │   └── JoinServerButton (opens A8 modal)
        │
        ├── RoomsSidebar / DMSidebar (conditional on Home vs Server)
        │   ├── ServerHeader (name + dropdown)
        │   │   └── ServerDropdownMenu
        │   ├── RoomCategory (collapsible group)
        │   │   └── RoomItem (per room)
        │   │       └── VoiceUserList (voice rooms)
        │   ├── VoiceConnectionBanner (when in voice)
        │   └── UserPanel
        │       ├── Avatar
        │       ├── StatusText
        │       └── QuickActions (mic, deafen, settings, sign out)
        │
        ├── MainContent (switches by view mode)
        │   │
        │   ├── ChatView (text rooms & DMs)
        │   │   ├── RoomHeader
        │   │   │   ├── RoomName + Description
        │   │   │   └── HeaderActions (search, pins, members toggle)
        │   │   ├── MessageList
        │   │   │   ├── DateSeparator
        │   │   │   ├── UnreadSeparator
        │   │   │   └── Message
        │   │   │       ├── Avatar
        │   │   │       ├── AuthorName + Timestamp
        │   │   │       ├── MessageContent (text, embeds, attachments)
        │   │   │       ├── ReactionBar
        │   │   │       │   └── Reaction
        │   │   │       └── MessageActions (hover)
        │   │   │           ├── ReactionPicker
        │   │   │           └── MoreMenu
        │   │   ├── TypingIndicator
        │   │   └── MessageInput
        │   │       ├── AttachButton
        │   │       ├── TextArea (auto-resize)
        │   │       ├── EmojiPickerPopover
        │   │       └── SendButton
        │   │
        │   ├── VoiceView (voice/video rooms)
        │   │   ├── VoiceHeader
        │   │   ├── ParticipantGrid
        │   │   │   └── ParticipantTile
        │   │   │       ├── VideoFeed / AvatarFallback
        │   │   │       ├── NameLabel
        │   │   │       └── StatusIcons (muted, deafened, speaking)
        │   │   ├── ScreenShareView (when active)
        │   │   └── VoiceControlBar
        │   │
        │   ├── ServerSettingsView
        │   │   ├── SettingsNav
        │   │   └── SettingsPanel (overview, roles, members, etc.)
        │   │
        │   ├── UserSettingsView
        │   │   ├── SettingsNav
        │   │   └── SettingsPanel (account, profile, appearance, etc.)
        │   │
        │   └── HomeView (friends list)
        │       ├── FriendsHeader (tabs: All, Online, Pending)
        │       ├── FriendSearch
        │       └── FriendList
        │           └── FriendItem
        │
        └── DetailPanel (right side)
            ├── MembersSidebar (in server text rooms)
            │   ├── MemberCategory (Online / Offline)
            │   └── MemberItem
            │       └── ProfilePopover (on click)
            └── UserProfilePanel (in DMs)

Global Overlays (portaled)
├── CreateServerModal
├── JoinServerModal
├── CreateRoomModal
├── InviteMembersModal
├── ConfirmDialog (delete, leave, kick, etc.)
├── EmojiPicker
├── ToastContainer
└── ContextMenu
```

### New Components Needed (vs. current prototype)

| Component | Status | Notes |
|-----------|--------|-------|
| AuthGuard | Done | Route protection wrapper |
| LoginPage / RegisterPage | Done | 50/50 split layout with hero image |
| Router setup | Done | React Router v7 with nested routes |
| DMSidebar | New | Variant of RoomsSidebar for Home view |
| HomeView / FriendList | New | Friends management |
| VoiceView | New | Voice/video room UI |
| ParticipantGrid / Tile | New | WebRTC video grid |
| VoiceControlBar | New | Mic/cam/share controls |
| VoiceConnectionBanner | New | Persistent voice indicator |
| ServerSettingsView | New | Server admin panel |
| UserSettingsView | New | User preferences panel |
| ServerHeader + Dropdown | New | Server name dropdown menu |
| RoomCategory | New | Collapsible room group headers |
| CreateServerModal | New | Server creation flow |
| JoinServerModal | New | Invite code entry |
| CreateRoomModal | New | Room creation form |
| InviteMembersModal | New | Invite link + user search |
| ProfilePopover | New | Member click profile card |
| ConfirmDialog | New | Destructive action confirmations |
| DateSeparator | New | Date dividers in message list |
| UnreadSeparator | New | "New messages" divider |
| MessageContent | Enhance | Support edits, embeds, markdown |
| MessageInput | Enhance | Auto-resize textarea, file upload |
| ContextMenu | New | Right-click context menus |

---

## 5. User Flows

### Flow 1: First-Time User

```
Login page (app entry) → "New here? Create an account"
→ Register → Auto-login → Home (empty friends list, no servers)
→ Prompt: "Create your first server" or "Join with invite"
→ Create Server modal → enters name, picks emoji + color
→ Lands in new server's #general room
→ Invite modal auto-opens: "Invite your friends!"
```

### Flow 2: Returning User

```
Login page (app entry) → enter credentials → Home
→ Navigate servers via Server Bar
→ Select room → Chat / Voice
```

### Flow 3: Joining a Voice Room

```
Click voice room in sidebar
→ "Join Voice" button appears in main content
→ Click Join → WebRTC connection established
→ Voice control bar appears
→ User tile added to participant grid
→ Other users see join notification
→ Navigate to text room → voice banner persists in sidebar
→ Click Leave → disconnected, banner removed
```

### Flow 4: Sending a Message

```
Click text room → focus message input
→ Type message → press Enter (or click send)
→ Message appears instantly (optimistic update)
→ Scroll to bottom
→ Other users see message via WebSocket
→ Typing indicator clears
```

### Flow 5: Managing a Server (Owner/Admin)

```
Click server name → dropdown → "Server Settings"
→ Settings view replaces main content
→ Edit name/icon/color → Save
→ Manage roles → Create "Moderator" role
→ Manage members → Assign roles, kick members
→ Manage rooms → Reorder, create, delete
→ Press Escape or Back → return to chat
```

### Flow 6: Reacting to a Message

```
Hover message → action bar appears
→ Click 😀 (React) → reaction picker opens
→ Select emoji → reaction added below message
→ Or click existing reaction to toggle your vote
→ Other users see reaction update via WebSocket
```

---

## 6. Design System

### Design Principles

1. **No cards.** Never display information in bordered/shadowed card containers. Cards feel like traditional AI-generated UI. Use open layouts with emoji, spacing, and typography to create visual hierarchy.
2. **Playful, not corporate.** Headings use a bubbly rounded font (Baloo 2). Inputs are oversized and dramatically rounded. The overall feel should be fun and inviting.
3. **Freedom to exit.** Users should always be able to go back. Auth pages have back navigation; modals have clear close actions.
4. **Purple glow.** Interactive elements (inputs, focus states) use a subtle purple glow to tie into the brand palette.
5. **Generous spacing.** UI elements breathe — forms use 1.75x spacing, inputs are wider than strictly needed, and content has room to sit.

### Logo

Two purple dots — minimalist and abstract. The larger dot (`#8B5CF6`, r=10) and smaller dot (`#7C3AED` at 65% opacity, r=7) are offset diagonally, suggesting two people in conversation. No background, no borders.

### Color Tokens

```
── Brand ──
primary:          #7C3AED  (purple-600)
primary-hover:    #6D28D9  (purple-700)
primary-light:    #EDE9FE  (purple-100)

── Semantic ──
success:          #22C55E  (green-500)
warning:          #F59E0B  (amber-500)
destructive:      #EF4444  (red-500)
info:             #3B82F6  (blue-500)

── Status ──
status-online:    #22C55E
status-idle:      #F59E0B
status-dnd:       #EF4444
status-offline:   #9CA3AF

── Surface (Light) ──
background:       #FFFFFF
surface:          #F9FAFB
surface-raised:   #F3F4F6
border:           #E5E7EB
foreground:       #1C1435
muted:            #6B7280

── Surface (Dark) ──
background:       #111827
surface:          #1F2937
surface-raised:   #374151
border:           #374151
foreground:       #F9FAFB
muted:            #9CA3AF
```

### Typography

| Use | Font | Weight | Size |
|-----|------|--------|------|
| Body | DM Sans | 400 | 14px / 15px |
| Body Bold | DM Sans | 600 | 14px |
| Small | DM Sans | 400 | 12px |
| Caption | DM Sans | 500 | 11px / uppercase / tracking-wide |
| H1 (page) | Baloo 2 | 700 | 28px |
| H2 (section) | Baloo 2 | 600 | 20px |
| H3 (subsection) | DM Sans | 600 | 16px |
| Username | DM Sans | 600 | 14px |
| Timestamp | DM Sans | 400 | 12px / muted color |

> **Heading font: Baloo 2** — a rounded, bubbly display font. Headings should feel playful and soft, not sharp or formal. Replaced Fraunces (serif) to match the app's personality.

### Spacing Scale

Follows Tailwind's 4px base: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64`

### Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `radius-sm` | 6px | Badges, small buttons |
| `radius-md` | 8px | Buttons, small containers |
| `radius-lg` | 10px | Modals, panels |
| `radius-xl` | 12px | General containers |
| `radius-2xl` | 16px | Text inputs (dramatic rounding) |
| `radius-full` | 9999px | Avatars, pills |

### Text Inputs

Inputs are intentionally oversized and dramatically rounded to feel playful:
- Height: `h-12` (48px) — taller than typical
- Border radius: `rounded-2xl` (16px) — near-pill shape
- Padding: `px-5 py-3` — generous internal spacing
- Font size: `text-base` (16px) — larger than body
- Border: light purple hue (`border-primary-light/30`)
- Glow: subtle purple box-shadow at rest, intensifies on focus
- Form spacing: `gap-7` (28px) between fields — 1.75x standard

### Shadows

```
shadow-sm:   0 1px 2px rgba(0,0,0,0.05)
shadow-md:   0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)
shadow-lg:   0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)
shadow-xl:   0 20px 25px rgba(0,0,0,0.1), 0 8px 10px rgba(0,0,0,0.04)
```

### Avatar System

Avatars use an **emoji + gradient** system (no image uploads for MVP):
- Circle with linear gradient background (user-chosen color pair)
- Emoji centered in circle
- Size variants: `xs (24px)`, `sm (32px)`, `md (40px)`, `lg (64px)`, `xl (96px)`
- Status dot: positioned bottom-right, with a 2px white ring

### Motion / Animation

| Animation | Duration | Easing | Use |
|-----------|----------|--------|-----|
| Fade in | 150ms | ease-out | Tooltips, popovers |
| Slide up | 200ms | ease-out | Toasts, modals |
| Scale pop | 200ms | cubic-bezier(0.34,1.56,0.64,1) | Reactions, buttons |
| Collapse | 200ms | ease-in-out | Sidebar sections |
| Typing dots | 1.4s | infinite | Typing indicator |
| Speaking pulse | 1s | infinite | Voice active speaker |

---

## 7. State Management

### Store Architecture (Zustand)

Split into multiple small stores for maintainability:

```
stores/
├── auth-store.ts       → user session, token, login/logout
├── servers-store.ts    → server list, active server, server CRUD
├── rooms-store.ts      → room list per server, active room, room CRUD
├── messages-store.ts   → messages per room, send/edit/delete, reactions
├── members-store.ts    → member list per server, presence updates
├── voice-store.ts      → voice connection state, participants, media tracks
├── ui-store.ts         → sidebar collapsed, active modal, theme
└── friends-store.ts    → friend list, requests, DMs
```

### Key State Flows

**Auth State:**
```
{ user, token, status } → login() → stores token, fetches user
                        → logout() → clears token, disconnects WS
                        → refreshUser() → re-fetches /users/me
```

**Server/Room Navigation:**
```
setActiveServer(id) → fetches rooms for server
                    → fetches members for server
                    → sets first text room as active

setActiveRoom(id)   → fetches messages (paginated)
                    → marks room as read
                    → subscribes to room WebSocket events
```

**Messages (Optimistic Updates):**
```
sendMessage(text) → immediately add to local state with pending status
                  → POST to API
                  → on success: update message ID, mark as sent
                  → on failure: mark as failed, show retry button
```

---

## 8. Real-Time UI Behavior

### WebSocket Events → UI Updates

| Event | UI Response |
|-------|-------------|
| `message_new` | Append to message list, update unread badge |
| `message_edit` | Update message content in-place |
| `message_delete` | Remove message with fade-out |
| `reaction_add` | Increment reaction count or add new reaction |
| `reaction_remove` | Decrement reaction count or remove if 0 |
| `user_typing_start` | Show user in typing indicator (auto-expire 5s) |
| `user_typing_stop` | Remove user from typing indicator |
| `presence_update` | Update status dot in member list + friend list |
| `voice_user_join` | Add tile to voice grid + sidebar voice list |
| `voice_user_leave` | Remove tile + update sidebar |
| `voice_user_update` | Update mute/deafen/speaking state on tile |
| `member_join` | Add to member list with animation |
| `member_leave` | Remove from member list |

### Unread Tracking

- Each room shows an **unread dot** (boolean) or a **mention badge** (count)
- Viewing a room sends a "mark as read" event to the server
- The "New Messages" separator appears at the first unread message
- Server icons in the Server Bar show a white dot if any room has unreads

---

## 9. Responsive & Mobile Strategy

### Breakpoints

| Name | Width | Layout |
|------|-------|--------|
| `desktop` | >= 1024px | Full 4-column layout |
| `tablet` | 768-1023px | Server bar + main content; sidebars as drawers |
| `mobile` | < 768px | Single column with navigation drawer |

### Tablet (768-1023px)

- Server Bar: always visible (icon column)
- Rooms Sidebar: overlay drawer, toggle via hamburger
- Main Content: full width
- Members Sidebar: overlay drawer, toggle via members icon in header

### Mobile (< 768px)

- Bottom navigation bar replaces Server Bar:
  ```
  ┌────┬────┬────┬────┬────┐
  │Home│Serv│Chat│ DM │ Me │
  └────┴────┴────┴────┴────┘
  ```
- Rooms list is a full-screen view (replaces chat)
- Chat is a full-screen view (back button → rooms)
- Members list slides in from right
- Voice controls become a floating bottom sheet
- Message input sticks to bottom with virtual keyboard handling

### Touch Interactions (Mobile)

| Action | Gesture |
|--------|---------|
| Open room | Tap |
| View reactions | Tap reaction |
| Message actions | Long press message |
| Go back | Swipe right or back button |
| Switch server | Tap in bottom nav |

---

## 10. Accessibility

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus through interactive elements |
| `Escape` | Close modals, popovers, dropdowns |
| `Enter` | Send message, activate buttons |
| `Shift+Enter` | New line in message input |
| `Arrow Up/Down` | Navigate room list, member list, messages |
| `Ctrl/Cmd + K` | Quick switcher (search rooms/servers) |
| `Alt + Up/Down` | Navigate to prev/next room |

### ARIA Patterns

- Sidebars: `role="navigation"` with `aria-label`
- Room list: `role="listbox"` with `aria-selected`
- Messages: `role="log"` with `aria-live="polite"`
- Modals: `role="dialog"` with focus trap
- Tooltips: `role="tooltip"` with `aria-describedby`
- Status indicators: `aria-label="Online"` (not just color)
- Reactions: `aria-label="thumbs up, 3 reactions, you reacted"`

### Focus Management

- Modal open → focus first input
- Modal close → return focus to trigger element
- New message → do NOT steal focus from input
- Room switch → focus message input

---

## 11. Loading, Empty, & Error States

### Loading States

| Context | Treatment |
|---------|-----------|
| Initial app load | Full-screen spinner with logo |
| Room messages loading | Skeleton messages (3-5 gray blocks) |
| Server list loading | Skeleton circles in server bar |
| Member list loading | Skeleton rows with circle + line |
| Sending message | Message appears with reduced opacity |
| Image/file uploading | Progress bar on attachment preview |
| Voice connecting | "Connecting..." with pulsing animation |

### Empty States

| Context | Message | Action |
|---------|---------|--------|
| No servers | "No servers yet" | [Create Server] [Join Server] |
| No rooms | "No rooms in this server" | [Create Room] (if admin) |
| No messages | "No messages yet. Start the conversation!" | Focus input |
| No members online | "Everyone's offline" | -- |
| No friends | "Add friends to start chatting" | [Add Friend] |
| No search results | "No results for 'query'" | -- |
| No DM conversations | "Your DMs will show up here" | [Start a DM] |

### Error States

| Context | Treatment |
|---------|-----------|
| Failed to load messages | Inline error with [Retry] button |
| Failed to send message | Red border on message + [Retry] icon |
| Lost WebSocket connection | Yellow banner: "Reconnecting..." with auto-retry |
| Auth expired | Redirect to login with toast: "Session expired" |
| Server not found / kicked | Redirect to Home with toast |
| Rate limited | Toast: "Slow down! Try again in a moment" |
| Network offline | Persistent banner: "No internet connection" |

---

## 12. Implementation Phases

### Phase 1 — Auth & Routing Foundation ✓
> Get users in and out of the app with proper route protection.

- [x] Install React Router v7, define route structure
- [x] Build LoginPage and RegisterPage (50/50 split with hero image)
- [x] Build AuthGuard wrapper (redirect to `/login` if no token)
- [x] Create auth-store (login, logout, token persistence in localStorage)
- [x] Connect to backend auth endpoints
- [x] Add loading screen for initial auth check
- [x] Login page serves as app entry point (no separate landing page)

### Phase 2 — Server & Room Navigation (Live Data)
> Replace mock data with real API calls.

- [ ] Create servers-store, fetch from `GET /servers`
- [ ] Create rooms-store, fetch from `GET /servers/:id/rooms`
- [ ] Create members-store, fetch from `GET /servers/:id/members`
- [ ] Wire ServerBar to real server list
- [ ] Wire RoomsSidebar to real room list
- [ ] Wire MembersSidebar to real member list
- [ ] Implement server/room navigation with URL routing
- [ ] Add loading and empty states for each list

### Phase 3 — Messaging
> Core chat functionality with real-time delivery.

- [ ] Create messages-store with paginated fetch
- [ ] Connect MessageInput → `POST /rooms/:id/messages`
- [ ] Implement infinite scroll (load older messages on scroll up)
- [ ] WebSocket integration for `message_new`, `message_edit`, `message_delete`
- [ ] Optimistic message sending with failure states
- [ ] Typing indicators via WebSocket
- [ ] Unread tracking and badges
- [ ] Date separators and "New Messages" separator
- [ ] Message edit and delete (with confirmation)

### Phase 4 — Reactions & Interactions
> Enrich the messaging experience.

- [ ] Wire reaction add/remove to API
- [ ] WebSocket reaction events
- [ ] Profile popover on member click
- [ ] Right-click context menus on messages
- [ ] Message pinning (API + UI)
- [ ] In-room search (if backend supports it)

### Phase 5 — Server & Room Management
> Let users create and manage their communities.

- [ ] Create Server modal + API integration
- [ ] Join Server modal + invite code handling
- [ ] Create Room modal + API integration
- [ ] Server Settings view (all sections)
- [ ] Role management UI
- [ ] Invite link generation and sharing
- [ ] Delete server flow with confirmation

### Phase 6 — User Settings & Profile
> Personal customization and account management.

- [ ] User Settings view (all sections)
- [ ] Profile editing (emoji, color, activity status)
- [ ] Presence status selector (online/idle/dnd/invisible)
- [ ] Theme toggle (light/dark/system) with persistence
- [ ] Password change flow
- [ ] Log out with confirmation

### Phase 7 — Home, Friends, & DMs
> Direct messaging and social features.

- [ ] Home view with friends list
- [ ] Friend request send/accept/decline
- [ ] DM sidebar listing conversations
- [ ] DM conversation view (reuse ChatView)
- [ ] DM WebSocket events
- [ ] Online/offline friend filtering

### Phase 8 — Voice & Video
> Real-time audio/video communication.

- [ ] Voice room join/leave API integration
- [ ] WebRTC peer connection setup
- [ ] Participant grid UI
- [ ] Mute/deafen/video controls
- [ ] Speaking detection (audio level monitoring)
- [ ] Voice connection banner (persistent when navigating)
- [ ] Screen sharing
- [ ] STUN/TURN configuration

### Phase 9 — Polish & Mobile
> Responsive design and quality-of-life improvements.

- [ ] Responsive breakpoints (tablet + mobile layouts)
- [ ] Mobile bottom navigation
- [ ] Mobile drawer navigation
- [ ] Touch gesture support
- [ ] Keyboard shortcut system
- [ ] Quick switcher (Ctrl+K)
- [ ] Accessibility audit and ARIA implementation
- [ ] Animation and transition polish
- [ ] Error boundary components
- [ ] Performance optimization (virtualized message list, lazy loading)

---

## Appendix: File Structure (Production Target)

```
front-end/app/src/
├── main.tsx
├── App.tsx                     ← Router setup
├── index.css                   ← Theme tokens, global styles
│
├── pages/
│   ├── LoginPage.tsx           ← App entry point (also `/`)
│   ├── RegisterPage.tsx
│   ├── HomePage.tsx            ← Home / Friends / DMs
│   ├── ServerPage.tsx          ← Server layout (rooms sidebar + outlet)
│   ├── RoomPage.tsx            ← Text or voice room
│   ├── ServerSettingsPage.tsx
│   └── UserSettingsPage.tsx
│
├── components/
│   ├── layout/
│   │   ├── Layout.tsx
│   │   ├── ServerBar.tsx
│   │   ├── RoomsSidebar.tsx
│   │   ├── DMSidebar.tsx
│   │   ├── MembersSidebar.tsx
│   │   └── UserPanel.tsx
│   │
│   ├── chat/
│   │   ├── ChatView.tsx
│   │   ├── MessageList.tsx
│   │   ├── Message.tsx
│   │   ├── MessageInput.tsx
│   │   ├── MessageActions.tsx
│   │   ├── ReactionBar.tsx
│   │   ├── Reaction.tsx
│   │   ├── ReactionPicker.tsx
│   │   ├── TypingIndicator.tsx
│   │   ├── DateSeparator.tsx
│   │   └── UnreadSeparator.tsx
│   │
│   ├── voice/
│   │   ├── VoiceView.tsx
│   │   ├── ParticipantGrid.tsx
│   │   ├── ParticipantTile.tsx
│   │   ├── VoiceControlBar.tsx
│   │   ├── VoiceConnectionBanner.tsx
│   │   └── ScreenShareView.tsx
│   │
│   ├── server/
│   │   ├── ServerHeader.tsx
│   │   ├── RoomCategory.tsx
│   │   ├── RoomItem.tsx
│   │   ├── CreateServerModal.tsx
│   │   ├── JoinServerModal.tsx
│   │   ├── CreateRoomModal.tsx
│   │   └── InviteMembersModal.tsx
│   │
│   ├── settings/
│   │   ├── ServerSettingsView.tsx
│   │   ├── UserSettingsView.tsx
│   │   └── SettingsNav.tsx
│   │
│   ├── home/
│   │   ├── HomeView.tsx
│   │   ├── FriendList.tsx
│   │   └── FriendItem.tsx
│   │
│   ├── profile/
│   │   ├── ProfilePopover.tsx
│   │   └── ProfileCard.tsx
│   │
│   └── ui/                     ← existing primitives
│       ├── Avatar.tsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Checkbox.tsx
│       ├── ConfirmDialog.tsx
│       ├── Dialog.tsx
│       ├── DropdownMenu.tsx
│       ├── Emoji.tsx
│       ├── EmojiPickerPopover.tsx
│       ├── Input.tsx
│       ├── Logo.tsx
│       ├── Separator.tsx
│       ├── Sheet.tsx
│       ├── Switch.tsx
│       ├── Toast.tsx
│       └── Tooltip.tsx
│
├── stores/
│   ├── auth-store.ts
│   ├── servers-store.ts
│   ├── rooms-store.ts
│   ├── messages-store.ts
│   ├── members-store.ts
│   ├── voice-store.ts
│   ├── friends-store.ts
│   └── ui-store.ts
│
├── hooks/
│   ├── useWebSocket.ts
│   ├── useWebRTC.ts
│   ├── useInfiniteScroll.ts
│   ├── useKeyboardShortcuts.ts
│   ├── useMediaDevices.ts
│   └── useBreakpoint.ts
│
├── lib/
│   ├── api.ts                  ← axios/fetch wrapper with auth headers
│   ├── ws.ts                   ← WebSocket connection manager
│   ├── webrtc.ts               ← WebRTC helpers
│   └── utils.ts                ← clsx, date formatting, etc.
│
└── types/
    ├── api.ts                  ← API request/response types
    ├── models.ts               ← User, Server, Room, Message, etc.
    ├── ws-events.ts            ← WebSocket event type definitions
    └── stores.ts               ← Store state interfaces
```
