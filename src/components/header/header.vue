<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Device, getCurrentDevice } from '@/shared/utils'
import { CSSStyle } from '@/shared/types'
import { useThrottleFn } from '@vueuse/core'

const emits = defineEmits<{
  (e: 'onSearch', keywords: string): void
}>()
const focus = ref(false)
const searchVal = ref<string>('')
const searchBarStyle = reactive<CSSStyle>({})

const currentDevice = ref(getCurrentDevice())

function handleSearchClick() {
  const focusVal = focus.value
  if (currentDevice.value === Device.phone) {
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
}

const onSearch = useThrottleFn(() => {
  emits('onSearch', searchVal.value)
}, 200)
</script>

<template>
  <div class="mdui-toolbar header">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">menu</i>
    </a>
    <span class="mdui-typo-title">HFUT树洞</span>
    <div class="search-bar" :class="focus ? 'search-bar-focus' : ''" :style="searchBarStyle">
      <button class="mdui-btn mdui-btn-icon search-btn mdui-ripple">
        <i class="mdui-icon material-icons mdui-text-color-theme-icon" @click="handleSearchClick">search</i>
      </button>
      <input
        placeholder="搜索树洞"
        @focus="focus = !focus"
        @blur="focus = !focus"
        v-model="searchVal"
        @keyup.enter="onSearch"
      />
      <button class="mdui-btn mdui-btn-icon search-close-btn mdui-ripple" v-if="currentDevice === Device.phone">
        <i class="mdui-icon material-icons mdui-text-color-theme-icon" @click="onSearchClose">close</i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  .search-bar {
    margin: 7px 8px 8px;
    height: 50px;
    width: 80%;
    border-radius: 2px;
    background-color: #f1f3f4;
    transition: all 0.25s;
    overflow: hidden;
    display: flex;
    align-items: center;
    &-focus {
      background-color: #fff;
      box-shadow: 0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%);
    }
    & > input {
      flex: 1 1;
      height: 100%;
      padding: 0;
      margin: 0;
      border: none;
      background: none;
      font-family: Roboto;
      font-size: 14px;
      line-height: 100%;
      margin: 0 16px;
      outline: none;
      color: rgba(0, 0, 0, 0.87);
    }
    & > input::placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
    & > .mdui-icon {
      margin: 0 16px;
    }
    & > .mdui-btn-icon {
      margin: auto 11px;
    }
    @media screen and(max-width: $phone-width) {
      & {
        position: absolute;
        height: 56px;
        margin: 0;
        right: 0;
        width: 56px;
        background-color: white;
        .search-btn {
          left: 0;
        }
      }
    }
  }
}
</style>
