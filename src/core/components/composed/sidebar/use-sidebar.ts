import { create } from "zustand";
import { RefObject } from "react";

interface SidebarState {
  isOpen: boolean;
  toggleButtonRef: RefObject<HTMLElement | null> | null;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setToggleButtonRef: (ref: RefObject<HTMLElement | null>) => void;
}

export const useSidebar = create<SidebarState>((set) => ({
  isOpen: true,
  toggleButtonRef: null,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state: SidebarState) => ({ isOpen: !state.isOpen })),
  setToggleButtonRef: (ref) => set({ toggleButtonRef: ref }),
}));
