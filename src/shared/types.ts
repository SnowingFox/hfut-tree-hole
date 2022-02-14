export interface MyNavigator extends Navigator {
  userAgentData: {
    platform: string
  }
}

export type CSSStyle = Partial<CSSStyleDeclaration>
