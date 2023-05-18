<template>
    <div>

        <el-form :model="form" label-width="120px" v-loading="loading2" :rules="rules" ref="formRef">
            <el-form-item label="家具名字" prop="name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="家具厂" prop="marker">
                <el-input v-model="form.marker" />
            </el-form-item>
            <el-form-item label="价格" prop="price">
                <el-input v-model.number="form.price" />
            </el-form-item>
            <el-form-item label="销量" prop="sales">
                <el-input v-model.number="form.sales" />
            </el-form-item>
            <el-form-item label="库存" prop="stock">
                <el-input v-model.number="form.stock" />
            </el-form-item>
            <el-form-item>
                <slot name="ok" :form="form" :formRef="formRef"></slot>
                <slot name="cancel"></slot>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import "element-plus/theme-chalk/el-message-box.css";

import { ref, watchEffect, reactive } from "vue";
export default {
    name: 'goodsView',
    props: ["loading", "currentRow"],
    components: {

    },
    setup(props) {
        const loading2 = ref(props.loading)
        const formRef = ref(null)
        const form = ref({
            name: "",
            marker: "",
            price: "",
            sales: "",
            stock: "",
            img_path: "assets/imgages/2.jgp"
        })
        if (props.currentRow != null) {
            form.value = {
                ...props.currentRow
            }
        }
        const rules = reactive({
            name: [
                { required: true, message: '请输入家具', trigger: 'blur' }
            ],
            marker: [
                {
                    required: true,
                    message: '请输入家具厂商'
                },
            ],
            price: [
                {
                    required: true,
                    message: '请输入价格',

                },
                { type: 'number', message: '请输入数字类型' },
            ],
            sales: [
                {
                    required: true,
                    message: '请输入销量',

                },
                { type: 'number', message: '请输入数字类型' },
            ],
            stock: [
                {
                    required: true,
                    message: '请输入库存量',

                },
                { type: 'number', message: '请输入数字类型' },
            ],
        })

        watchEffect(() => {
            loading2.value = props.loading;
        })
        return {
            form,
            loading2,
            rules,
            formRef
        }
    }
}
</script>
<style scoped></style>
  