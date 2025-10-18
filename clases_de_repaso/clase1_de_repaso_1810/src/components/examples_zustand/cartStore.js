import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  total: 0,

  addItem: (product) => {
    const items = get().items;
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        items: items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }

    get().calculateTotal();
  },

  removeItem: (productId) => {
    set({ items: get().items.filter((item) => item.id !== productId) });
    get().calculateTotal();
  },

  calculateTotal: () => {
    const total = get().items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    set({ total });
  },

  clearCart: () => {
    set({ items: [], total: 0 });
  },
}));
