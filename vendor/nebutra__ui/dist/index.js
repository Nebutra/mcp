"use client";
import { ThemeProvider } from '@lobehub/ui';
import { jsx } from 'react/jsx-runtime';
import '@icons-pack/react-simple-icons';
export { Anthropic, Claude, Gemini, Google, OpenAI } from '@lobehub/icons';
export { Robot as Bot, Check, LoaderCircle as Loader2, Menu, Moon, Plus, MagnifyingGlass as Search, SettingsGear as Settings, Sparkles, Sun, Cross as X } from '@nebutra/icons';

// src/theme/provider.tsx
function NebutraThemeProvider({
  children,
  appearance = "auto",
  defaultAppearance = "light"
}) {
  const resolvedAppearance = appearance === "auto" ? void 0 : appearance;
  return /* @__PURE__ */ jsx(
    ThemeProvider,
    {
      ...resolvedAppearance != null && { appearance: resolvedAppearance },
      defaultAppearance,
      customTheme: {
        primaryColor: "blue",
        neutralColor: "slate"
      },
      children
    }
  );
}

export { NebutraThemeProvider };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map