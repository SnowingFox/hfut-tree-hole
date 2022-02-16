import { reactive, ref } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import type { CSSStyle } from '@/shared/types'
import { Device, getCurrentDevice } from '@/shared/utils'
import type { HeaderEmits } from '@/components/header/header.vue'

export default function useSearch(emits: HeaderEmits) {
  const focus = ref(false)
  const searchVal = ref<string>('')
  const searchBarStyle = reactive<CSSStyle>({})

  const currentDevice = ref(getCurrentDevice())

  function handleSearchClick() {
    const focusVal = focus.value
    if (currentDevice.value === Device.phone) {
      searchBarStyle.right = '0'
      // 处理动画
      if (!focusVal && searchBarStyle.width !== '100%') {
        searchBarStyle.width = '100%'
        return
      }
      if (searchBarStyle.width === '100%') {
        onSearch()
        return
      }
    }
    onSearch()
  }

  function onSearchClose() {
    searchBarStyle.width = '56px'
    removeSearchBarRight()
  }

  const removeSearchBarRight = () => (searchBarStyle.right = '')

  const onSearch = useThrottleFn(() => {
    emits('onSearch', searchVal.value)
  }, 200)

  return {
    focus,
    searchVal,
    searchBarStyle,
    currentDevice,
    handleSearchClick,
    onSearchClose,
  }
}
