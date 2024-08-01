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
               <!-- 標題 -->
               <div class="titleName">
                    <h1>ブランジェ浅野屋軽井沢旧道本店について</h1>
               </div>

               <!-- 圖片 -->
               <div class="pic_frame">
                    <div class="background_pic"></div>
               </div>

               <!-- 介紹 -->
               <div class="info_aera">
                    <h3>1933年創業、おかげさまで90周年</h3>

                    <p>1933年（昭和８年）創業者　浅野良明が東京・麹町6丁目に浅野屋商店を開業し、食料品の一部としてパン・菓子の製造をしたことが浅野屋の始まりです。当時の麹町は各国の大使館の多いエリアで、フランスパンやドイツパンなどのヨーロッパスタイルのパンが人気になりました。
                    </p>

                    <h3>軽井沢の地で80年余り</h3>
                    <p>1940年に避暑で東京を訪れる外国人外交官や家族からの要望を受けて夏季出張所を開設し、1944年には常設店をオープン。外務省より物資の配給元として指定され、戦時中同地に疎開されている外国の方向けに酒類・パンの配給業務を行っていました。それから軽井沢の地で80年余り。浅野屋の歴史に軽井沢あり！今では軽井沢に３店舗を構えています。
                    </p>

                    <h3>新しいものはすぐに取り入れる！</h3>

                    <p>1986年（昭和61年）には、日本で初めてのスペイン・ファルファス社製の円形石窯を設置。”新しいものでもよさそうなら積極的に取り入れる！”という創業者の姿勢は、今でも社内に根付いています。”老舗”にあぐらをかかず、常により美味しく、より安全安心なパンを追い求めます。
                    </p>
               </div>

          </main>

          <!-- 頁尾 -->
          <footer>
               <div class="contact_information">
                    <h2>住所 : 〒389-0102 長野県北佐久郡軽井沢町軽井沢738</h2>
                    <br>
                    <h2>電話 : 0267-42-2149</h2>
               </div>
          </footer>


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


          .pic_frame {
               .background_pic {
                    width: 100vw;
                    height: 100vh;
                    background-image: url("./../../../public/asanoya.jpg");
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position-x: center;
                    background-position-y: center;
               }


          }

          .info_aera {
               padding: 5rem;
          }
     }

     footer {
          background-color: #B5495B;
          padding: 2rem 0;
          .contact_information {
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;

               h2 {
                    margin: 0;
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
