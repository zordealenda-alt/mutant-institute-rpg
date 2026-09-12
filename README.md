# 🧬 Mutant Institute RPG Platform

A complete, modern RPG platform for Mutant Institute campaigns featuring character management, mutation database, campaigns, and lore management.

## 🚀 Features

- **Landing Page**: Beautiful, responsive landing page with mutation-themed design
- **Lore Management**: Complete lore system with categories and ordering
- **Mutation Database**: Comprehensive mutation system with levels and effects
- **Character Creation**: Full character creation with mutations and progression
- **Campaign Management**: Create and manage campaigns with missions
- **Mission System**: Track objectives, rewards, and status
- **User Authentication**: Secure login with role-based access
- **Real-time Updates**: WebSocket support for live campaign updates

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Real-time**: Socket.io
- **State Management**: Zustand

## 📋 Setup

### Prerequisites
- Node.js 18+
- PostgreSQL

### Installation

1. Clone the repository
```bash
git clone https://github.com/zordealenda-alt/mutant-institute-rpg.git
cd mutant-institute-rpg
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables
```bash
cp .env.example .env.local
```

4. Setup database
```bash
npm run prisma:generate
npm run prisma:migrate
```

5. Run development server
```bash
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── pages/           # API routes
├── lib/             # Utilities and database
├── types/           # TypeScript types
└── styles/          # Global styles
prisma/
└── schema.prisma    # Database schema
```

## 📝 License

MIT
