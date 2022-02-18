export const sharedResponseFn = (res: any) => res.data || res

export const handleToken = (authorization: any) => authorization.replace('Bearer ', '')
