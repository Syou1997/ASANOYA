<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {


  },
  //變數
  data() {
    return {
      inputPwd: null,

    }

  },
  //方法
  methods: {
    //登入的方法
    loginCheck() {
      if (this.inputPwd === "TaiwanSyou") {
        alert("ログイン成功しました")
        this.$router.push({
          name: "About",
        });
      } else {
        alert("パスワードが間違っています")
      }
    }

  },

  //生命週期
  mounted() {





  },

}

</script>

<template>


  <h2>ログイン</h2>
  <div class="login-frame">
    <div class="login-area">

      <h3>パスポート</h3>
      <input v-model="inputPwd" type="text">

    </div>


  </div>

  <div class="btn-area">
    <button type="button" @click="loginCheck">ログイン</button>
  </div>



</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: 30px;
}

.login-frame {
  display: flex;
  justify-content: center;
  align-items: center;

  .login-area {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50vw;
    height: 10vw;

    h3 {
      margin-right: 0.5rem;
    }

    input {
      margin-right: 0.5rem;

    }
  }

}

.btn-area {
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 100px;
    display: block;
    background-image: linear-gradient(to left, #ce092a, #c7818d);
    color: white;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      scale: 1.05;
    }

    &:active {
      scale: 0.95;
    }

  }
}

//RWD
@media screen and (max-width: 700px) {
  h2 {
    font-size: 20px;
  }

  .login-frame {
    .login-area {
      flex-direction: column;
      margin-bottom: 4rem;

      h3 {
        margin: 0.5rem;
        font-size: 15px;
      }
    }
  }

}
</style>