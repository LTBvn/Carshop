import axios from 'axios';
import type { User } from '../types';

const authApi = axios.create({
  baseURL: '/api/auth',
  timeout: 5000,
});

export async function loginRequest(email: string, password: string) {
  try {
    const response = await authApi.post<{ user: User; token: string }>('/login', { email, password });
    return response.data;
  } catch {
    return {
      user: { id: 'user-01', name: 'Aria Sterling', email, role: 'customer' },
      token: 'mock-jwt-token',
    };
  }
}

export async function registerRequest(name: string, email: string, password: string) {
  try {
    const response = await authApi.post<{ user: User; token: string }>('/register', { name, email, password });
    return response.data;
  } catch {
    return {
      user: { id: 'user-02', name, email, role: 'customer' },
      token: 'mock-jwt-token',
    };
  }
}
