import { ref } from 'vue'

export default function useLogin() {
  const isRenderLogin = ref<boolean>(false)
  function handleLoginClick() {
    isRenderLogin.value = true
  }

  return {
    isRenderLogin,
    handleLoginClick,
  }
}
