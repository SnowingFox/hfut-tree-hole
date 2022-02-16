<script lang="ts" setup>
import { ref } from 'vue'
import { InputValidationRule } from '@/shared/types'

export interface IInputProps {
  inputType?: 'text' | 'email' | 'password'
  label?: string
  rules?: InputValidationRule[]
}

const emits = defineEmits<{
  (e: 'input', val: string): void
}>()

const props = withDefaults(defineProps<IInputProps>(), {
  inputType: 'text',
  label: '',
  rules: () => [],
})

const rules = ref<InputValidationRule[]>(props.rules)
const rulesValidate = ref<string[]>([])

const forEachRules = (val: string) => {
  let isAlreadyNotPass = false
  ;(rules.value as InputValidationRule[]).forEach((fn, index) => {
    const pass = fn(val)

    if (pass && typeof pass === 'boolean') {
      rulesValidate.value.shift()
      return
    }

    if (typeof pass === 'string' && pass !== '' && !isAlreadyNotPass) {
      isAlreadyNotPass = true
      rulesValidate.value.push(pass)
    }
  })
}

function onInput(e: any) {
  const val: string = e.target.value
  forEachRules(val)
  emits('input', val)
}
</script>

<template>
  <div
    class="mdui-textfield mdui-textfield-has-bottom mdui-textfield-floating-label"
    :class="rulesValidate.length !== 0 ? 'mdui-textfield-invalid' : ''"
  >
    <label class="mdui-textfield-label">{{ label }}</label>
    <input class="mdui-textfield-input" :type="inputType" @input="onInput" />
    <div class="mdui-textfield-error" v-if="rulesValidate.length !== 0">{{ rulesValidate[0] }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
