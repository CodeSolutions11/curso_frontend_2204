import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  loading: false,

  login: async (credencials) => {
    set({ loading: true });
    try {
      // simular login
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const user = { id: 1, name: "Jesus Moreno", email: credencials.email };
      set({ user, isAuthenticated: true, loading: false });
    } catch (err) {
      set({ loading: false });
      throw err;
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  updateProfile: (updates) => {
    const currentUser = get().user;
    set({ user: { ...currentUser, ...updates } });
  },
}));
