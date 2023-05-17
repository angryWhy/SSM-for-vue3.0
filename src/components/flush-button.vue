<template>
  <div class="btn">登录</div>
</template>

<script>
export default {
    name: 'flushButton',
    components: {

    },
    setup() {
       
        return {
            
        }
    }
}
</script>

<style scoped>
 .btn {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4vw;
    height: 2vh;
    line-height: 2vh;
    text-align: center;
    color: #fff;
    font-size: 0.5rem;
    cursor: pointer;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 40px;
    animation: animate 8s linear infinite;
  }
  @keyframes animate {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }

  .btn::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    /* background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%; */
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  }

  .btn:hover::before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }
</style>