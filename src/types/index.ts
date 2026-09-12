// User Types
export interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
  role: 'ADMIN' | 'DUNGEON_MASTER' | 'PLAYER';
}

// Mutation Types
export interface MutationLevel {
  id: string;
  level: number;
  name: string;
  description: string;
  effects: Record<string, any>;
  powerCost: number;
  cooldown?: number;
}

export interface Mutation {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'Offensive' | 'Defensive' | 'Utility';
  image?: string;
  levels: MutationLevel[];
}

// Character Types
export interface Character {
  id: string;
  name: string;
  description?: string;
  image?: string;
  level: number;
  experience: number;
  health: number;
  maxHealth: number;
  power: number;
  maxPower: number;
  mutations: CharacterMutation[];
}

export interface CharacterMutation {
  id: string;
  mutation: Mutation;
  currentLevel: number;
}

// Campaign Types
export interface Mission {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  status: 'ACTIVE' | 'COMPLETED' | 'FAILED' | 'ARCHIVED';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Extreme';
  rewards?: Record<string, any>;
}

export interface Campaign {
  id: string;
  name: string;
  description?: string;
  image?: string;
  status: 'ACTIVE' | 'PAUSED' | 'COMPLETED' | 'DRAFT';
  characters: Character[];
  missions: Mission[];
}

// Lore Types
export interface LoreEntry {
  id: string;
  title: string;
  content: string;
  category: string;
  image?: string;
  order: number;
}

export interface MainCharacter {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  mutations: string[];
  role: string;
}
