import type { SetupContext } from 'vue'
import type { MyNavigator } from '@/shared/types'

export const enum Device {
  // eslint-disable-next-line no-unused-vars
  phone = 0,
  // eslint-disable-next-line no-unused-vars
  pc =1
}
export const getCurrentDevice = (): Device => {
  if ((navigator as MyNavigator).userAgentData.platform === 'Windows' || (navigator as MyNavigator).userAgentData.platform === 'macOS') {
    return Device.pc
  }

  return Device.phone
}

export const isExistAttr = <T extends SetupContext['attrs']>(attrs: T, attrName: string) => typeof attrs[attrName] !== 'undefined'
