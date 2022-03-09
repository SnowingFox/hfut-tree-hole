import HomeIcon from '@mui/icons-material/Home'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { useRef } from 'react'
import type { BaseListProps } from '@/components/base/BaseList'
import { BaseList } from '@/components/base/BaseList'

export function DrawerList() {
  const list = useRef<BaseListProps[]>([
    {
      path: '/',
      txt: '首页',
      icon: <HomeIcon />,
    },
    {
      path: '/',
      txt: '话题',
      icon: <AssignmentIcon />,
    },
  ])
  return <>
    <BaseList list={list.current} />
  </>
}
