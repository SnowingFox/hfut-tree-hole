import type { ThemeOptions } from '@mui/material'
import type { Palette } from '@/theme/theme-config/palette'
import type { CustomShadows, Shadows } from '@/theme/theme-config/shadows'
import { IconButton } from '@/theme/overrides/IconButton'
import { Button } from '@/theme/overrides/Button'

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
  )
}
