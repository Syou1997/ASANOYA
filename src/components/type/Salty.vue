<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
     //變數
     data() {
          return {
               list: [
                    {
                         pic: "/tomatoesAndMozzarella.jpg",
                         name: "トマトとモッツァレラ",
                         bag: "バーガー袋",
                         comment: "ビザ生地の中にモッツァレラチーズとプチトマト2個を入れて揚げた大人気商品。旧道店菓子パン人気No1。",

                    },
                    {
                         pic: "/fermentedButterCroissant.jpg",
                         name: "発酵バタークロワッサン",
                         bag: "デニッシュ袋",
                         comment: "バターたっぷりのシンプルなクロワッサン。",
                    },
                    {
                         pic: "/AsanoyaCurryBread.jpg",
                         name: "浅野屋カレーパン",
                         bag: "バーガー袋",
                         comment: "シンプルなカレーパン・辛くないので子供も安心して食べられる。",

                    },
                    {
                         pic: "/potatoFrench.jpg",
                         name: "ポテトフランス",
                         bag: "ポテフラバック",
                         comment: "フランス生地に皮つきじゃがいもがまるごと入っています。上にはマヨネーズがたっぷり。",

                    },
                    {
                         pic: "/garlicFrench.jpg",
                         name: "ガーリックフランス",
                         bag: "ポリ袋",
                         comment: "フランス生地にガーリックバターを塗って焼き上げました。使用している自家製ガーリックバターは冷凍販売しています。",
                    },
                    {
                         pic: "/bacon.jpg",
                         name: "Wベーコンエビ",
                         bag: "デニッシュ袋",
                         comment: "エビは「麦の穂」の意味。麦の穂に見えるようにきれいに陣列しましょう",

                    },
                    {
                         pic: "/focaccia.jpg",
                         name: "セミドライトマトとチーズのもっちリフォカッチャ",
                         bag: "専用窓口袋",
                         comment: "ドライトマトの酸味がくせになる夏におすすめの一品。",
                    },
                    {
                         pic: "/mapoCurryBread.jpg",
                         name: "新宿中村屋麻婆カリーパン",
                         bag: "バーガー袋",
                         comment: "財間派定コラボ商品。辛いのでお子様の販売時は注意。",

                    },
                    {
                         pic: "/cheeseSticks.jpg",
                         name: "チーズスティック",
                         bag: "ポリ袋",
                         comment: "フランス生地にチーズクリーム、角切りチーズを練りこみスティック状に仕上げました。",
                    },
                    {
                         pic: "/butterSalt.jpg",
                         name: "バターソルト",
                         bag: "ポリ袋",
                         comment: "バターを練りこみ、仕上げに岩塩を振りかけたシンプルな塩パン。",
                    },
                    {
                         pic: "/mincedMeatCutlet.jpg",
                         name: "メンチカツ",
                         bag: "?",
                         comment: "バLorem ipsum。",
                    },
                    {
                         pic: "/hokkaidoPotatoVegetableCroquette.jpg",
                         name: "北海道産じゃがいもの野菜コロッケ",
                         bag: "?",
                         comment: "バLorem ipsum。",
                    },
               ]

          }

     },
     //方法
     methods: {}

}

</script>

<template>
     <h2>塩小物</h2>
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
                    .name {}

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
