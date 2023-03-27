import { create } from "zustand";
import { persist } from "zustand/middleware";

// screen size
type ScreenSizeState = {
  screenSize: number | undefined;
  setScreenSize: (screenSize: number) => void;
};
const useScreenSize = create<ScreenSizeState>((set) => ({
  screenSize: undefined,
  setScreenSize: (screenSize) => set({ screenSize }),
}));

// theme selected color
type CurrentColorState = {
  currentColor: string;
  setCurrentColor: (currentColor: string) => void;
};
const useCurrentColor = create<CurrentColorState>()(
  persist(
    (set) => ({
      currentColor: "#03C9D7",
      setCurrentColor: (currentColor) => set({ currentColor }),
    }),
    {
      name: "themeColor",
    }
  )
);

// theme dark or light mode
type ModeState = {
  currentMode: string;
  setCurrentMode: (mode: string) => void;
};
const useCurrentMode = create<ModeState>()(
  persist(
    (set) => ({
      currentMode: "Light",
      setCurrentMode: (mode) => set({ currentMode: mode }),
    }),
    {
      name: "themeMode",
    }
  )
);

// theme settings open state
type ThemeSettingsState = {
  themeSettings: boolean;
  setThemeSettings: (value: boolean) => void;
};
const useThemeSettings = create<ThemeSettingsState>((set, get) => ({
  themeSettings: false,
  setThemeSettings: (value) => set({ themeSettings: value }),
}));

export { useScreenSize, useCurrentColor, useCurrentMode, useThemeSettings };
