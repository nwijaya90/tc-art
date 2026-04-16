import { create } from "zustand";

const useCartStore = create((set) => ({
  // ── STATE ─────────────────────────
  items: [],
  totalCount: 0,
  totalPrice: 0,

  // helper buat hitung ulang
  recalc: (items) => {
    const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { totalCount, totalPrice };
  },

  // ── ACTIONS ───────────────────────
  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === product.id);

      let items;

      if (existing) {
        items = state.items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      } else {
        items = [...state.items, { ...product, quantity: 1 }];
      }

      return {
        items,
        ...state.recalc(items),
      };
    }),

  decrementItem: (id) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === id);
      if (!existing) return state;

      let items;

      if (existing.quantity === 1) {
        items = state.items.filter((i) => i.id !== id);
      } else {
        items = state.items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
        );
      }

      return {
        items,
        ...state.recalc(items),
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const items = state.items.filter((i) => i.id !== id);
      return {
        items,
        ...state.recalc(items),
      };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      let items;

      if (quantity <= 0) {
        items = state.items.filter((i) => i.id !== id);
      } else {
        items = state.items.map((i) => (i.id === id ? { ...i, quantity } : i));
      }

      return {
        items,
        ...state.recalc(items),
      };
    }),

  clearCart: () => set({ items: [], totalCount: 0, totalPrice: 0 }),
}));

export default useCartStore;
