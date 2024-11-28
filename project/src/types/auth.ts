export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  phone?: string;
  address?: string;
  preferences?: {
    newsletter: boolean;
    notifications: boolean;
  };
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  preferences: {
    newsletter: boolean;
    notifications: boolean;
  };
}