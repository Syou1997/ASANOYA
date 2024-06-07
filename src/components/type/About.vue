<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
     //變數
     data() {
          return {



          }

     },
     //方法
     methods: {

     }

}

</script>

<template>
     <div class="container">
          <main>
               <div class="titleName">
                    <h1>ブランジェ浅野屋軽井沢旧道本店について</h1>
               </div>

               <div class="info">
                    <h2>住所 : 〒389-0102 長野県北佐久郡軽井沢町軽井沢738</h2>
                    <h2>電話 : 0267-42-2149</h2>
               </div>
          </main>


     </div>
</template>

<style lang="scss" scoped>
.container {
     animation-name: loading;
     animation-duration: 1s;

     main {

          margin-top: 1rem;

          .titleName {
               display: flex;
               justify-content: center;
               align-items: center;

               h1 {}
          }

          .info {
               display: flex;
               justify-content: center;
               align-items: center;

               h2 {
                    margin: 0 1rem;
               }
          }
     }

}

//進場動畫
@keyframes loading {
     from {
          opacity: 0;
     }

     to {
          opacity: 1;
     }
}
</style>
