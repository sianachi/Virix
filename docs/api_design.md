# API Design - Video Chat App

## Base URL
`http://127.0.0.1:8000`

## 1. Authentication (`/auth`)
| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| POST | `/auth/register` | Register a new user | `{ "username", "password", "email" }` |
| POST | `/auth/login` | Log in and get a JWT token | `{ "username", "password" }` |
| GET | `/auth/me` | Get current user info | *Header: Authorization Bearer* |

## 2. User Management (`/users`)
| Method | Endpoint | Description | Response |
| :--- | :--- | :--- | :--- |
| GET | `/users/` | List all users | `[ { "id", "username", "status", "emoji", "color", "activity" } ]` |
| GET | `/users/{user_id}` | Get user details | `{ "id", "username", "status", "emoji", "color", "activity" }` |

## 3. Chat Rooms (`/chat`)
| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| GET | `/chat/rooms` | List all active rooms | `[ { "id", "name", "created_by" } ]` |
| POST | `/chat/rooms` | Create a new chat room | `{ "name" }` |
| DELETE | `/chat/rooms/{room_id}` | Delete a room | - |

## 4. Real-time Communication (WebSockets)
| Endpoint | Protocol | Description | Purpose |
| :--- | :--- | :--- | :--- |
| `/ws/chat/{room_id}` | WS | Real-time text messaging | Group chat |
| `/ws/signaling/{room_id}` | WS | WebRTC Signaling | Video/Audio Handshake (Offer, Answer, ICE) |

### WebSocket Messaging Protocol (JSON)
Messages for signaling should follow this structure:
```json
{
  "type": "offer | answer | ice-candidate | chat-message",
  "from": "user_id",
  "data": { ... }
}
```

## 5. Security
- **Authentication:** JWT (JSON Web Tokens).
- **Password Hashing:** Argon2 or BCrypt.
- **Connection:** WSS (Secure WebSockets) for production.
