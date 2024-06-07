<script>
import { RouterLink,RouterView } from 'vue-router';

export default {
    components: {


    },
    //變數
    data() {
        return {


        }

    },
    //方法
    methods: {
        toHard(){
            this.$router.push({
            name: "Hard",
          });
        },
        toBread(){
            this.$router.push({
            name: "Bread",
          });
        },
        toSweets(){
            this.$router.push({
            name: "Sweets",
          });
        },
        toSalty(){
            this.$router.push({
            name: "Salty",
          });
        },
        toSimple(){
            this.$router.push({
            name: "Simple",
          });
        },
        toFrozenFood(){
            this.$router.push({
            name: "FrozenFood",
          });
        },



    },

    //生命週期
    mounted() {
       





    },

}

</script>

<template>
    <div class="option-area">
        <div class="btn-area">
            <button @click="toHard" class="btn" type="button">ハード</button>
            <button @click="toBread" class="btn" type="button">ブレッド</button>
            <button @click="toSweets" class="btn" type="button">お菓子小物</button>
            <button @click="toSalty" class="btn" type="button">塩小物</button>
            <button @click="toSimple" class="btn" type="button">シンプル</button>
            <button @click="toFrozenFood" class="btn" type="button">冷凍食品</button>


        </div>

    </div>
    <!-- 字路由 -->
    <RouterView />




</template>

<style lang="scss" scoped>
.option-area {

    .btn-area {
        display: flex;
        justify-content: space-evenly;
        margin-top: 0.5rem;
        .btn {
            width: 120px;
            background-color: #ce092a;
            color: white;
            border-radius: 1px;
            border: solid 5px rgba(250, 121, 121, 0.641);
            cursor: pointer;
            transition: 0.2s;
            border-radius: 15px;
            font-weight: bold;

            &:hover {
                scale: 1.05;
            }

            &:active {
                scale: 0.95;
            }

        }

    }

}


//RWD
@media screen and (max-width: 850px) { 
    .option-area {
        .btn-area {
            flex-direction: column;
            .btn{
                margin-bottom: 1rem;
            }
        }
    }
}
</style>