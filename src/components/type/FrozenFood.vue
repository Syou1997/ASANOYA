<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
     //變數
     data() {
          return {
               list: [
                    {
                         pic: "/zakuKuroneCustard.jpg",
                         name: "ザククロネカスタード",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/zakuKuroneStrawberry.jpg",
                         name: "ザククロネいちご",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/capetKokabuAndSteamedChickenSalad.jpg",
                         name: "キャペツとコカブと蒸し鶏のサラダ",
                         bag: "包装不要",
                         comment: "Lorem ipsum",
                    },
                    {
                         pic: "/mixedSandwich.jpg",
                         name: "ミックスサンド",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/kinpiraBurdockBanhMi.jpg",
                         name: "きんぴらごぼうのバインミー",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/shinshuChatamayaAsamaKomachiEggSandwich.jpg",
                         name: "信州ちゃたまや浅間小町の卵サンド",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/shinshuBeefPatty.jpg",
                         name: "信州牛のパテ",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/seafoodSalad.jpg",
                         name: "シーフードサラダ",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/mapleButtercream.jpg",
                         name: "メープルバタークリーム",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/shinshuGoldenShamoLiverPaste.jpg",
                         name: "信州黄金シャモのレバーペースト",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/homemadePickles.jpg",
                         name: "自家製ピクルス",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/honeyRumRaisinButter.jpg",
                         name: "はちみつラムレーズンバター",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/honeyRumRaisinButter.jpg",
                         name: "はちみつラムレーズンバター",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/sunDriedTomatoDip.jpg",
                         name: "ドライトマトのディップ",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/duckRillettes.jpg",
                         name: "鴨のリエット",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/duckRillettesFG.jpg",
                         name: "鴨のFG入リエット",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/hamAndCreamCheeseOneHandedSandwich.jpg",
                         name: "生ハムとクリームチーズのワンハンドサンド",
                         bag: "?",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/kitakaruCamembertCheese.jpg",
                         name: "北軽カマンベールチーズ",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/condensedMilkButterCream.jpg",
                         name: "練乳バタークリーム",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/tapenade.jpg",
                         name: "タップナード",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/garlicButter.jpg",
                         name: "ガーリックバター",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
                    {
                         pic: "/shinshuSPFPorkRillette.jpg",
                         name: "信州SPFポークリエット",
                         bag: "包装不要",
                         comment: "Lorem ipsum",

                    },
               ]

          }

     },
     //方法
     methods: {}

}

</script>

<template>
     <a href="#top"><button class="back_to_top" type="button">▲</button></a>
     <h2>冷凍食品</h2>
     <div class="container">
          <div class="main-area">
               <table>
                    <tr>
                         <th class="title title-pic">写真</th>
                         <th class="title title-name">名前</th>
                         <th class="title title-bag">袋</th>
                         <th class="title title-comment">コメント</th>
                    </tr>
                    <tr v-for="(item, index) in list" :key="index">
                         <td class="pic-frame">
                              <img :src="item.pic" alt="画像な">
                         </td>
                         <td class="name">{{ item.name }}</td>
                         <td class="bag">{{ item.bag }}</td>
                         <td class="comment">{{ item.comment }}</td>
                    </tr>
               </table>




          </div>
     </div>


</template>

<style lang="scss" scoped>
a {
     font-weight: bold;
     
     .back_to_top {
          position: fixed;
          right: 0;
          bottom: 0;
          min-width: 30px;
          display: block;
          background-color: #e74141;
          border: none;
          border: 2px solid white;
          cursor: pointer;
          transition: all 0.2s ease;
          color: white;


          &:hover {
               scale: 1.1;
               background-color: white;
               border: 2px solid #e74141;
               color: black;

          }

          &:active {
               scale: 0.95;
          }

     }

}
h2 {
     text-align: center;
}

.container {
     animation-name: loading;
     animation-duration: 1s;
     display: flex;
     justify-content: center;
     align-items: center;

     .main-area {
          // border: solid 2px blue;
          width: 90vw;
          height: 1000px;

          table {
               width: 100%;
               border-collapse: collapse;

               tr {
                    th {
                         border: 1px solid black;
                         position:sticky;
                         top: 0;
                    }

                    .title {
                         background-color: #e74141;
                         font-weight: bold;
                         table-layout: fixed;

                         &:hover {
                              cursor: pointer;
                              background-color: #ffe593;
                         }
                    }

                    .title-pic {
                         width: 30%;
                    }

                    .title-name {
                         width: 20%;
                    }

                    .title-bag {
                         width: 10%;
                    }

                    .title-comment {
                         width: 40%;
                    }

                    td {
                         border: 1px solid black;
                         text-align: center;
                    }

                    //圖片

                    .pic-frame {
                         // border: solid 3px red;

                         img {
                              width: 100%;
                              height: 100%;
                              object-fit: contain;
                         }
                    }

                    //名稱
                    .name {
                         font-weight: bold;
                    }

                    //袋子
                    .bag {}

                    //說明
                    .comment {}


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
