export interface MyNavigator extends Navigator {
  userAgentData: {
    platform: string
  }
}

export type CSSStyle = Partial<CSSStyleDeclaration>

export type InputValidationRule = (value: any) => string | boolean
