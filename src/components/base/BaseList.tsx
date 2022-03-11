import type { ReactNode } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useCallback, useState } from 'react'

export interface BaseListProps {
  icon: ReactNode
  path: string
  txt: string
}

export function BaseList(props: { list: BaseListProps[] }) {
  const [selectedIdx, setSelectedIdx] = useState(0)

  const handleSelect = useCallback((idx: number) => {
    setSelectedIdx(idx)
  }, [])

  return <List>
    {
      props.list.map((item, idx) => {
        const Icon = item.icon
        return (
          <ListItem
            selected={selectedIdx === idx}
            key={item.path} button
            className={'flex select-none'}
            style={{ width: '90%', marginLeft: '5%', borderRadius: '5px', marginTop: '5px', paddingTop: '10px', paddingBottom: '10px' }}
            onClick={() => handleSelect(idx)}
          >
            <ListItemIcon>
              {Icon}
            </ListItemIcon>
            <ListItemText>
              <p className={'text-sm'}>{item.txt}</p>
            </ListItemText>
          </ListItem>
        )
      })
    }
  </List>
}
