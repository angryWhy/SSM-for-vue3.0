<template>
    <div>
        <el-form :model="form" label-width="120px">
            <el-form-item label="家具名字">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="家具厂">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="销量">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="库存">
                <el-input v-model="form.name" />
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

import { ref } from "vue";
export default {
    name: 'goodsView',
    components: {

    },
    setup() {
        const form = ref({
            name: "1"
        })
        return {
            form
        }
    }
}
</script>
<style scoped></style>
  