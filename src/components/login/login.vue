<script lang="ts" setup>
import Input from '@/components/base/Input/input.vue'
import { ref } from 'vue'

const studentId = ref<string>()
const password = ref<string>()

const studentIdRule = (val: string) => val.startsWith('20') && val.length === 10

const usernameRules = ref([
  (val: string) => !(val.length === 0) || '学号不能为空',
  (val: string) => studentIdRule(val) || '学号格式错误',
])

Input.validate = () => {}
console.log(Input)

const passwordRules = ref([(val: string) => !(val.length === 0) || '密码不能为空'])

setTimeout(() => {
  console.log(studentId.value)
}, 2000)
</script>

<template>
  <div class="login-page">
    <div class="login-page-box">
      <div class="login-page-box-header mdui-color-indigo">
        <button class="mdui-btn mdui-btn-icon login-page-close mdui-ripple">
          <i class="mdui-icon material-icons">close</i>
        </button>
        <div class="login-page-box-header-bottom">
          <p class="mdui-text-color-white">登录</p>
        </div>
      </div>
      <div class="login-page-box-form">
        <Input required @input="(val) => (studentId = val)" :rules="usernameRules" label="学号"></Input>
        <Input
          required
          @input="(val) => (password = val)"
          :rules="passwordRules"
          label="密码"
          inputType="password"
        ></Input>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  &-box {
    width: 448px;
    height: 50vw;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    @media screen and (max-width: $phone-width) {
      position: relative;
      width: 100vw;
      height: 100vh;
      z-index: 3;
      border-radius: 0;
    }
    &-header {
      position: relative;
      height: 20vw;
      width: 100%;
      &-bottom {
        position: absolute;
        bottom: 5%;
        font-size: 20px;
        left: 10%;
      }
    }
    &-form {
      position: relative;
      display: block;
      height: 100%;
    }
  }
  &-close {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
