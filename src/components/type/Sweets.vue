<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
     //變數
     data() {
          return {
               list: [
                    {
                         pic: "/mapleWalnut.jpg",
                         name: "メープルウォールナッツ",
                         bag: "デニッシュ袋",
                         comment: "フランス生地にメーブルバターとくるみを練り込み、ハート型に焼き上げました。旧道店菓子パン人気No.2。",

                    },
                    {
                         pic: "/campagneCranberryAndCheese.jpg",
                         name: "カンパーニュクランベリー＆チーズ",
                         bag: "ポリ袋",
                         comment: "自家製酵母のカンバーニュ生地に甘酸っぱいクランベリーとクリームチーズを練りこみました。1旧道店菓子パン人気No3。",
                    },
                    {
                         pic: "/melonBread.jpg",
                         name: "メロンパン",
                         bag: "ポリ袋",
                         comment: "シンプルなメロンパン。お子様に人気。。",
                    },
                    {
                         pic: "/AnFrance.jpg",
                         name: "あんフランス",
                         bag: "ポリ袋",
                         comment: "フランス生地にあんこを挟んだ食べ応えがある商品。あんこは粒あん。",
                    },
                    {
                         pic: "/ChocolateCroissantForAdults.jpg",
                         name: "大人のショコラクロワッサン",
                         bag: "デニッシュ袋",
                         comment: "ココア生地にヴァローナチョコを巻き込みました。ヴァローナとはフランスの高級製菓用チョコレートメーカー。",
                    },
                    {
                         pic: "/smoothCreamBread.jpg",
                         name: "なめらかクリームパン",
                         bag: "小バック",
                         comment: "やわらかい生地にカスタードクリームを入れたシンプルなクリームパン。",
                    },
                    {
                         pic: "/cinnamonRoll.jpg",
                         name: "シナモンロール",
                         bag: "ポテフラバック",
                         comment: "練乳を練りこんだ生地にナッツやシナモンクリームを巻き込みました。トッピングのチーズ風味のクリームはレンジで30秒ほどあたためるととろ〜り溶けてさらに美味しい。",

                    },
                    {
                         pic: "/cinnamonLaceinBagel.jpg",
                         name: "シナモンレースンベーグル",
                         bag: "ポリ袋",
                         comment: "茹でてから揚げているのでもっちりとした食感に仕上がっています。ラムレーズンとシナモンの組み合わせが相性抜群。",
                    },
                    {
                         pic: "/applePie.jpg",
                         name: "いちじくクリームのアップルパイ",
                         bag: "バーガー袋",
                         comment: "アップルバイ。",
                    },
                    {
                         pic: "/appleAndEarlGrayOzamandCustard.jpg",
                         name: "りんごとアールグレイのオザマンド〜カスタード入り",
                         bag: "デニッシュ袋",
                         comment: "オザマンドとは、フランス語で「アーモンド」。",
                    },
                    {
                         pic: "/chocolateLoveTeaBaguette.jpg",
                         name: "ショコラブティバゲット",
                         bag: "ポリ袋",
                         comment: "中にはチョコレートがきっしり。チョコ好きにはたまらない。",
                    },
                    {
                         pic: "/butterRoll.jpg",
                         name: "バターロール",
                         bag: "ポリ袋",
                         comment: "シンプルなバターロール。そのままでももちろん、切りこみを入れてロールサンドなどにも。",
                    },
                    {
                         pic: "/butterRollBagging.jpg",
                         name: "バターロール袋詰め",
                         bag: "ポリ袋",
                         comment: "バターロールの5個入り。",
                    },
                    {
                         pic: "/champignon.jpg",
                         name: "シャンピニオン",
                         bag: "ポリ袋",
                         comment: "小さく丸めたフランスパン。シャンピニオンは「きのこ」の意味。",
                    },
                    {
                         pic: "/bonjourChocolat.jpg",
                         name: "ボンジュールショコラ",
                         bag: "OPP袋",
                         comment: "やわらかい生地にチョコチップを包みました。",
                    },
                    {
                         pic: "/cafeBread.jpg",
                         name: "カフェブレッド",
                         bag: "2番袋",
                         comment: "Lorem ipsum。",

                    },
                    {
                         pic: "/teaBread.jpg",
                         name: "ティーブレッド",
                         bag: "2番袋",
                         comment: "Lorem ipsum。",

                    },
                    {
                         pic: "/bolognaSausageMuffin.jpg",
                         name: "ボローニャソーセージマフィン",
                         bag: "?",
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
     <h2>お菓子小物</h2>
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
