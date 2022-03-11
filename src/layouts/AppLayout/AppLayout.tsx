import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { useDrawer } from '@/layouts/AppLayout/use-drawer'
import { useWindowSize } from '@/hooks/use-window-size'
import { DrawerHeader } from '@/layouts/AppLayout/DrawerHeader'
import { DrawerList } from '@/layouts/AppLayout/DrawerList'
import { MenuIcon } from '@/svg/icon/menu'
import { Searchbar } from '@/components/Searchbar'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const drawerWidth = 300

const Drawer = styled(MuiDrawer)(({ theme }) => (
  {
    [theme.breakpoints.down('sm')]: {
      'width': '70%',
      'flexShrink': 0,
      '& .MuiDrawer-paper': {
        width: '70%',
        boxSizing: 'border-box',
      },
    },
    [theme.breakpoints.up('sm')]: {
      'width': drawerWidth,
      'flexShrink': 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    },
  }
))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export function AppLayout(props: { children: ReactNode }) {
  const { open, variant, handleDrawerClose, handleDrawerOpen } = useDrawer()
  const { isSm } = useWindowSize()

  return (
    <>
      <Box className={'relative w-screen h-screen'}>
        <AppBar position="fixed" open={open} className={'p-1 sm:p-0'} style={{ boxShadow: 'none', backgroundColor: 'rgba(255,255,255,.3)' }}>
          <Toolbar>
            {isSm
              ? <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              : ''}
            <Searchbar />
          </Toolbar>
        </AppBar>
        <Drawer
          variant={variant}
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
        >
          <DrawerHeader />
          <DrawerList />
        </Drawer>
        <div
          className={'flex justify-center'}
          children={props.children}
        />
        <Footer />
      </Box>
    </>
  )
}
