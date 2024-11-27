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
                         comment: "シンプルなメロンパン。お子様に人気",
                    },
                    {
                         pic: "/AnFrance.jpg",
                         name: "あんフランス",
                         bag: "ポリ袋、OPP袋",
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
                         bag: "ポテフラパック",
                         comment: "練乳を練りこんだ生地にナッツやシナモンクリームを巻き込みました。トッピングのチーズ風味のクリームはレンジで30秒ほどあたためるととろ〜り溶けてさらに美味しい。",

                    },
                    {
                         pic: "/LemonCinnamonRoll.jpg",
                         name: "レモンシナモンロール",
                         bag: "ポテフラパック",
                         comment: "Lorem ipsum。",

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
                         pic: "/applePieObuse.jpg",
                         name: "信州産食べごろりんごのアップルパイ(小布施)",
                         bag: "バーガー袋",
                         comment: "アップルバイ。",
                    },

                    {
                         pic: "/akihiro.jpg",
                         name: "信州産食べごろりんごのアップルパイ(秋映)",
                         bag: "バーガー袋",
                         comment: "アップルバイ。",
                    },
                    {
                         pic: "/shinanoSweet.jpg",
                         name: "信州産食べごろりんごのアップルパイ(シナノスイート)",
                         bag: "バーガー袋",
                         comment: "アップルバイ。",
                    },
                    {
                         pic: "/redApplePie.jpg",
                         name: "信州産紅玉のアップルパイ",
                         bag: "バーガー袋",
                         comment: "アップルバイ。",
                    },
                    {
                         pic: "/lemonPie.jpg",
                         name: "レモンパイ",
                         bag: "バーガー袋",
                         comment: "レモンパイ。",
                    },
                    {
                         pic: "/blueberryPie.jpg",
                         name: "信州産ブルーベリーパイ",
                         bag: "デリカパック",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/appleAndEarlGrayOzamandCustard.jpg",
                         name: "りんごとアールグレイのオザマンド〜カスタード入り",
                         bag: "デリカパック",
                         comment: "オザマンドとは、フランス語で「アーモンド」。",
                    },
                    {
                         pic: "/chocolateLoveTeaBaguette.jpg",
                         name: "ショコラブティバゲット",
                         bag: "ポリ袋",
                         comment: "中にはチョコレートがきっしり。チョコ好きにはたまらない。",
                    },
                    {
                         pic: "/purpleSweetPotatoDonut.jpg",
                         name: "紫芋あんドーナツ",
                         bag: "ポリ袋",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/bonjourChocolat.jpg",
                         name: "ボンジュールショコラ",
                         bag: "OPP袋",
                         comment: "やわらかい生地にチョコチップを包みました。",
                    },
                    {
                         pic: "/blueberrBagel.jpg",
                         name: "ブルーベリーベーグル",
                         bag: "OPP袋",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/blueberryCroissant.jpg",
                         name: "信州産ブルーベリーのクロワッサンオザマンド",
                         bag: "デリカパック",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/rhubarbCroissant.jpg",
                         name: "信州産ルバーブとスイードクリームチーズのオザマンド",
                         bag: "デリカパック",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/appy90thBirthdayAnpan.jpg",
                         name: "九十歳おめでたいあんぱん",
                         bag: "OPP袋",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/summerMandarinOrangeAnpan.jpg",
                         name: "夏みかんあんぱん",
                         bag: "OPP袋",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/creamCheeseAndSberries.jpg",
                         name: "スイートクリームチーズと5種のベリー",
                         bag: "デリカパック、ポリ袋",
                         comment: "Lorem ipsum。",
                    },
                    {
                         pic: "/harvest.jpg",
                         name: "ハーベスト",
                         bag: "デニッシュ袋、ポリ袋",
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
     <a href="#top"><button class="back_to_top" type="button">▲</button></a>
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
                              <img :src="item.pic" alt="画像なし">
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
                         position: sticky;
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
