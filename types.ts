
export enum UserRole {
  ADMIN = 'ADMIN',
  REVIEWER = 'REVIEWER',
  CONFERENCE_MANAGER = 'CONFERENCE_MANAGER',
  USER = 'USER'
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface Paper {
  id: string;
  title: string;
  author: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  date: string;
}
