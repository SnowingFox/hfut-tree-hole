import type { ThemeOptions } from '@mui/material'
import type { CustomShadows, Shadows } from '@/theme/theme-config/shadows'
import type { Palette } from '@/theme/theme-config/palette'
import { Button } from '@/theme/overrides/Button'
import { IconButton } from '@/theme/overrides/IconButton'
import { OverrideRipple } from '@/theme/overrides/ripple'

export interface CustomThemeOptions {
  palette: Palette
  customShadows: CustomShadows
  shadows: Shadows
  shape: ThemeOptions['shape']
  components?: any
  typography: any
}

export type OverrideFn = (theme: CustomThemeOptions) => Required<ThemeOptions>['components']

export function overrideComp(overrideFn: OverrideFn) {
  return overrideFn
}

export function mergeOverrideComps(theme: CustomThemeOptions) {
  return Object.assign(
    Button(theme),
    IconButton(theme),
    OverrideRipple(theme),
  )
}
