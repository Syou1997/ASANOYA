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

//RWD
@media screen and (max-width: 850px) {
main {
.titleName {

     h1 {
          font-size: 25px;    
     }
}

.info {
   flex-direction: column;

     h2 {
          margin-bottom: 2rem;
     }
}
}
}

@media screen and (max-width: 600px) {
main {



.titleName {
  

     h1 {
          font-size: 20px;
     }
}

.info {
   flex-direction: column;

     h2 {
          margin-bottom: 2rem;
          font-size: 15px;
     }
}
}
}


@media screen and (max-width: 400px) {
main {



.titleName {
  

     h1 {
          font-size: 15px;
     }
}

.info {
   flex-direction: column;

     h2 {
          font-size: 10px;
     }
}
}
}
</style>


