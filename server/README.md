**Task Management Backend (Express + MongoDB + JWT + WebSockets)**

**Features**
- User Authentication: Register & login using JWT-based authentication.
- Task Management: CRUD operations for tasks.
- Real-Time Updates: Uses WebSockets to update tasks across connected clients.
- Protected Routes: Only authenticated users can manage tasks.

**Tech Stack**
- Node.js + Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- WebSockets (Socket.io)

**Installation**
npm install 

**Run the server**
npm start

**Task Management (Protected Routes)**
**Add \`Authorization: Bearer <token>\` in headers.**

**Real-Time Task Updates (WebSockets)**
When a task is created, updated, or deleted, all connected users will see the changes instantly.
