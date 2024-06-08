<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
     //變數
     data() {
          return {
               list: [
                    {
                         pic: "/whiteBread.jpg",
                         name: "ホワイトブレッド\n1斤/1本\n(3斤分)",
                         bag: "3番袋",
                         comment: "定番の人気商品。1本で3斤分。4、5、6、8が定番の厚さ。サンドイッチ用で10、12枚も対応。",
                    },
                    {
                         pic: "/specialBread.jpg",
                         name: "スペシャルブレッド \n1斤/1本\n(2斤分)",
                         bag: "3番袋",
                         comment: "生クリームや牛乳が入った甘めの食パン。1本で2斤分。焼かないでそのままでも美味しい。",
                    },
                    {
                         pic: "/goldenBread.jpg",
                         name: "ゴールデンブレッド \n1斤/1本\n(3斤分)",
                         bag: "3番袋",
                         comment: "生クリームや牛乳が入った甘めの食パン。スペシャルブレッドと同じ生地だが山形で焼いているのでよりふんりしている。",
                    },
                    {
                         pic: "/KaruizawaRaisin.jpg",
                         name: "軽井沢レザン",
                         bag: "3番袋",
                         comment: "量り売り。1枚3cmでカットし好きな枚数が選べる。皮はフランス生地、中はたまごたっぷりのふわふわ生地にラムレーズンがたっぷり。",
                    },
                    {
                         pic: "/KaruizawaBlueberry.jpg",
                         name: "軽井沢ブルーベリー",
                         bag: "3番袋",
                         comment: "量り売り。3cmでカットし好きな枚数を選べる。皮はフランス生地、中はたまごたっぷりのふふ生地にブルーベリーを練り込みました。",
                    },
                    {
                         pic: "/whiteStrawberry.jpg",
                         name: "ホワイトストロベリー",
                         bag: "3番袋",
                         comment: "レザンシリーズ※の季節限定商品。※軽井沢レザン等の同形状、り売りパンをレザンシリーズと呼んでいます。社内用語です。",
                    },
                    {
                         pic: "/wholeWhiteBread.jpg",
                         name: "ホールホイートブレッド",
                         bag: "3番袋",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/briocheOrange.jpg",
                         name: "ブリオッシュオランジュ",
                         bag: "2番袋",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/raisinBread.jpg",
                         name: "レーズンブレッド",
                         bag: "3番袋",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/chewyBreadWalnut.jpg",
                         name: "レーズンブレッド",
                         bag: "3番袋",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/britishBread.jpg",
                         name: "イギリスパン",
                         bag: "3番袋",
                         comment: "Lorem ipsum。",
                    },
               ]

          }

     },
     //方法
     methods: {}

}

</script>

<template>
     <h2>ブレッド</h2>
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

               tr {
                    th {
                         border: 1px solid black;
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
