import { useEffect, useState } from 'react'
import { RESPONSE_DESIGN } from '@/shared/constant'

export function useWindowSize() {
  const [size, setSize] = useState<RESPONSE_DESIGN>(RESPONSE_DESIGN.sm)
  const [isSm, setIsSm] = useState<boolean>(true)

  useEffect(() => {
    if (window.innerWidth <= RESPONSE_DESIGN.sm) {
      setIsSm(true)
      setSize(RESPONSE_DESIGN.sm)
    } else {
      setIsSm(false)
      setSize(RESPONSE_DESIGN.lg)
    }
  }, [])

  return {
    size,
    isSm,
  }
}
