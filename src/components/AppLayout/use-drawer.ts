import { useMemo, useState } from 'react'
import type { DrawerProps } from '@mui/material/Drawer'
import { RESPONSE_DESIGN } from '@/shared/constant'

export function useDrawer() {
  const [open, setOpen] = useState(true)

  const variant = useMemo((): DrawerProps['variant'] => {
    if (window.innerWidth <= RESPONSE_DESIGN.sm) {
      return 'temporary'
    } else {
      return 'persistent'
    }
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(!open)
  }

  return {
    open,
    variant,
    handleDrawerClose,
    handleDrawerOpen,
    handleToggle,
  }
}
