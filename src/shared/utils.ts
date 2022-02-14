import { IResponse } from './types'

export const sharedResponseFn = (res: any) => res.data || res
