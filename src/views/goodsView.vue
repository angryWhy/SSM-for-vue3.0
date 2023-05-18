<template>
    <div>

        <el-form :model="form" label-width="120px" v-loading="loading2">
            <el-form-item label="家具名字">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="家具厂">
                <el-input v-model="form.marker" />
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="form.price" />
            </el-form-item>
            <el-form-item label="销量">
                <el-input v-model="form.sales" />
            </el-form-item>
            <el-form-item label="库存">
                <el-input v-model="form.stock" />
            </el-form-item>
            <el-form-item>
                <slot name="ok" :form="form"></slot>
                <slot name="cancel"></slot>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import "element-plus/theme-chalk/el-message-box.css";

import { ref, watchEffect } from "vue";
export default {
    name: 'goodsView',
    props: ["loading"],
    components: {

    },
    setup(props) {
        const loading2 = ref(props.loading)
        const form = ref({
            name:"",
            marker:"",
            price:"",
            sales:"",
            stock:"",
            img_path:"assets/imgages/2.jgp"
        })
        watchEffect(() => {
            loading2.value = props.loading;
        })
        return {
            form,
            loading2
        }
    }
}
</script>
<style scoped></style>
  