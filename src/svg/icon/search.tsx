import type { SVGAttributes } from 'react'
import { SVGIcon } from '@/svg/icon/creatSVGIcon'

export function SearchIcon(props: SVGAttributes<any>) {
  return <>
    <SVGIcon
      xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
      className="MuiBox-root css-1t9pz9x iconify iconify--eva"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
    >
      <path fill="currentColor"
        d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6Z"/>
    </SVGIcon>
  </>
}
