<template>
    <div class="login-form ">
        <div class="rainbow">1111111111111</div>
        <flush-button/>
    </div>
</template>
  
<script>
import FlushButton from './flush-button.vue'
export default {
    name: 'loginCard',
    components: {
        FlushButton
    },
    setup() {

        return {

        }
    }
}
</script>
  
<style scoped lang="scss">
@keyframes login {
    from {
        transform: scale(1);
        width: 0px;
        height: 0px;
        opacity: 0;
    }

    to {
        transform: scale(2);
        width: 200px;
        height: 200px;
        opacity: 1;
    }
}

.login-form {
    transition: all 1s;
    animation: login 1s;
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 40vh;
    right: 20vw;
    animation-fill-mode: both;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

@keyframes rotate {
    100% {
        transform: rotate(1turn);
    }
}

.rainbow {
    position: relative;
    z-index: 0;
    width: 250px;
    height: 250px;
    border-radius: 5px;
    overflow: hidden;
    padding: 1rem;

    &::before {
        content: '';
        position: absolute;
        z-index: -2;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        background-color: #399953;
        background-repeat: no-repeat;
        background-size: 50% 50%, 50% 50%;
        background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet),linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet),linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet),linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
        animation: rotate 12s linear infinite;
    }

    &::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 6px;
        top: 6px;
        width: calc(100% - 12px);
        height: calc(100% - 12px);
        background: white;
        border-radius: 5px;

    }
}
</style>

