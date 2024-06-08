<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
     //變數
     data() {
          return {
               list: [
                    {
                         pic: "/naganoWholeWheatBagel.jpg",
                         name: "長野県産小麦の全粒粉ベーグル",
                         bag: "OPP袋",
                         comment: "長野県産の小変を使用。シンプルな味わいのためそのままでも良いが、サンドイッチのように具を挟んで食べるのもおすす物。",
                    },

                   

               ]

          }

     },
     //方法
     methods: {}

}

</script>

<template>
     <h2>シンプル</h2>
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
