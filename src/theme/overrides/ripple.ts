import type { ThemeOptions } from '@mui/material'
import type { TouchRippleClasses } from '@mui/material/ButtonBase/touchRippleClasses'
import type { CustomThemeOptions } from '@/theme/overrides/index'
let a: TouchRippleClasses
export function OverrideRipple(theme: CustomThemeOptions): ThemeOptions['components'] {
  return {
    MuiTouchRipple: {
      defaultProps: {
        classes: {
          // ripple: 'Mui-custom-ripple-color',
          // ripplePulsate: 'Mui-custom-ripple-color',
          // rippleVisible: 'Mui-custom-ripple-color',
          // child: 'Mui-custom-ripple-color',
          // childLeaving: 'Mui-custom-ripple-color',
          // childPulsate: 'Mui-custom-ripple-color',
        },
      },
    },
  }
}
