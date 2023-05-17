<template>
    <div class="bg">
        <login-card/>
    </div>
</template>
  
<script>
import "element-plus/theme-chalk/el-message-box.css";
import LoginCard from '@/components/login-card.vue';

export default {
    name: 'loginView',

    components: {
        LoginCard

    },
    setup() {

        return {

        }
    }
}
</script>
<style scoped>
.bg{
    width: 100vw;
    height: 100vh;
    background-image: url("@/assets/login-bg.jpg");
}
</style>
  