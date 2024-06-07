<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    //變數
    data() {
        return {
            list: [
                {
                    pic: "/fruitRye.jpg",
                    name: "フルーツライ\n1本/ハーフ",
                    bag: "3番袋",
                    comment: "軽井沢本店1番人気商品。ライ麦の生地にレーズン、オレンジピール、くるみが入った香り豊かな商品。1〜1.5cの薄めがオススメ。",
                },
                {
                    pic: "/premiumFruitRye.jpg",
                    name: "プレミアムフルーツライ\n1本/ハーフ",
                    bag: "3番袋",
                    comment: "フルーツライよりかオレンジピール3倍!ジューシーです。1.5mがオススメ。",
                },
                {
                    pic: "/whiteFigAndNutRyeBread.jpg",
                    name: "白いちじくと木の実のライ麦パン",
                    bag: "2番袋",
                    comment: "ライ麦30%の生地にラムレーズン、イチジクとくるみ、アーモンド、カシューナッツなど。1〜1.5mの薄めがオススメ。。",
                },
                {
                    pic: "/painDeCampagne.jpg",
                    name: "パン・ド・カンパーニュ",
                    bag: "3番袋",
                    comment: "ぶどうからおこした自家製酵母で作った食事パン。ハーフと1/4サイズでも販売。2cm程度がオススメ。",
                },
                {
                    pic: "/batard.jpg",
                    name: "バタール",
                    bag: "3番袋",
                    comment: "短くて太いフランスパン。",
                },
                {
                    pic: "/baguette.jpg",
                    name: "バゲット",
                    bag: "フランス袋",
                    comment: "長くて細いフランスパン。",
                },
                {
                    pic: "/parisian.jpg",
                    name: "パリジャン",
                    bag: "フランス袋",
                    comment: "長くて太いフランスパン。",
                },
                {
                    pic: "/softBaguette.jpg",
                    name: "ソフトバゲット",
                    bag: "3番袋",
                    comment: "外側の生地が薄いフランスパン。歯が弱い方でも食べられます。",
                },
                {
                    pic: "/morningBreadWholeGrain.jpg",
                    name: "朝パン全粒粉",
                    bag: "3番袋",
                    comment: "全粒粉を使用したシンプルなパン。サンドイッチにおすすめ。",
                },
                {
                    pic: "/breadLait.jpg",
                    name: "パン●オレ",
                    bag: "?",
                    comment: "水の代わりに牛乳を使用しているので、しっとりとした味わい。",
                },

            ]

        }

    },
    //方法
    methods: {}

}

</script>

<template>
    <h2>ハード</h2>
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
