import type { ReactNode } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

export interface BaseListProps {
  icon: ReactNode
  path: string
  txt: string
}

export function BaseList(props: { list: BaseListProps[] }) {
  return <List>
    {
      props.list.map((item) => {
        const Icon = item.icon
        return <>
          <ListItem button className={'flex'} style={{ width: '90%', marginLeft: '5%', borderRadius: '5px' }}>
            <ListItemIcon>
              {Icon}
            </ListItemIcon>
            <ListItemText>
              {item.txt}
            </ListItemText>
          </ListItem>
        </>
      })
    }
  </List>
}
