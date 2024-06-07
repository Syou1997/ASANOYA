<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  methods: {
    gohome() {
      this.$router.push({
        name: "About",
      });
    }
  }

}
</script>
<template>
  <header>
    <h1 @click="gohome" title="ログアウト">ブランジェ浅野屋軽井沢旧道本店-研修サイト</h1>
  </header>
  <RouterView />



</template>

<style lang="scss" scoped>
header {
  background-color: #B5495B;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 50;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: black;
    }

  }
}
</style>
