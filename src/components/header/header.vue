<script lang="ts" setup>
import MLogin from '@/components/login/login.vue'
import useSearch from '@/components/header/use-search'
import { Device } from '@/shared/utils'
import useLogin from '@/components/header/use-login'

export interface HeaderEmits {
  (e: 'onSearch', keywords: string): void
}
const emits = defineEmits<HeaderEmits>()

const { focus, searchVal, searchBarStyle, handleSearchClick, onSearchClose, currentDevice } = useSearch(emits)
const { handleLoginClick, isRenderLogin } = useLogin()
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
    <div class="mdui-toolbar-spacer"></div>
    <div class="login-btn mdui-btn mdui-btn-dense" @click="handleLoginClick">登录</div>
  </div>
  <m-login v-if="isRenderLogin"></m-login>
</template>

<style lang="scss" scoped>
.header {
  min-width: 100vw;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  .search-bar {
    margin: 7px 8px 8px;
    height: 50px;
    width: 60%;
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
        width: 56px;
        right: 80px;
        background-color: white;
        z-index: 1;
        .search-btn {
          left: 0;
        }
      }
      .login-btn {
        position: absolute;
        right: 0;
        z-index: 0;
      }
      &-focus {
        right: 0;
      }
    }
  }
}
</style>
