import { ThemeProvider, createTheme } from '@mui/material/styles'
import type { ReactNode } from 'react'
import { useMemo } from 'react'
import type { ThemeOptions } from '@mui/material'
import shadows, { customShadows } from './theme-config/shadows'
import palette from '@/theme/theme-config/palette'
import type { CustomThemeOptions } from '@/theme/overrides'
import { mergeOverrideComps } from '@/theme/overrides'
import typography from '@/theme/theme-config/typography'

export default function ThemeConfig(props: { children: ReactNode }) {
  const themeOptions = useMemo<CustomThemeOptions>(() => ({
    palette,
    shadows,
    customShadows,
    shape: { borderRadius: 8 },
    typography,
  }), [])

  // TODO solve type problem
  const theme = createTheme(themeOptions as unknown as ThemeOptions)
  theme.components = mergeOverrideComps(theme as unknown as any)

  return <>
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  </>
}
