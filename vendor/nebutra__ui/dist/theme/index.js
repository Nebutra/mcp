"use client";
import { ThemeProvider } from '@lobehub/ui';
import { jsx } from 'react/jsx-runtime';

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