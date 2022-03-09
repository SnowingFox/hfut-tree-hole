import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import type { ReactNode } from 'react'
import * as React from 'react'
import { Footer } from '@/components/Footer'
import { useDrawer } from '@/components/AppLayout/use-drawer'
import { useWindowSize } from '@/hooks/use-window-size'
import { DrawerHeader } from '@/components/AppLayout/DrawerHeader'
import { DrawerList } from '@/components/AppLayout/DrawerList'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const drawerWidth = 240

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
    <Box className={'relative w-screen h-screen'}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className={'p-1 sm:p-0'} style={{ boxShadow: 'none', backgroundColor: 'rgba(255,255,255,.3)' }}>
        <Toolbar>
          {isSm
            ? <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            : ''}
          <Typography variant="h6" noWrap component="div">
            HFUT树洞
          </Typography>
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
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div
        className={'flex justify-center'}
        children={props.children}
      />
      <Footer />
    </Box>
  )
}
