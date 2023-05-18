<template>
  <div>
    <el-button type="primary" style="margin:20px;" @click="addDialogVisible = true">新增</el-button>
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <el-table-column fixed="left" type="index" width="80" />
      <el-table-column prop="id" label="id" width="80" />
      <el-table-column prop="name" label="家具" width="150" />
      <el-table-column prop="marker" label="厂商" width="150" />
      <el-table-column prop="price" label="价格" width="150" />
      <el-table-column prop="sales" label="销量" width="150" />
      <el-table-column prop="stock" label="库存" />
      <el-table-column fixed="right" label="操作栏" width="200">
        <template #default="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="addDialogVisible" title="添加" width="650px" center destroy-on-close="true" @close="handleClose">
      <goodsView :loading="loading">
        <template #ok="form">
          <el-button type="primary" @click="onSubmit(form)">添加</el-button>
        </template>
        <template #cancel>
          <el-button @click="handleClose">取消</el-button>
        </template>
      </goodsView>
    </el-dialog>
    <el-dialog v-model="editDialogVisible" title="编辑" width="650px" center destroy-on-close="true" @close="handleClose">
      <goodsView :loading="loading" :currentRow="currentRow">
        <template #ok="form">
          <el-button type="primary" @click="onEdit(form)">提交</el-button>
        </template>
        <template #cancel>
          <el-button @click="handleClose">取消</el-button>
        </template>
      </goodsView>
    </el-dialog>
  </div>
</template>

<script>
import "element-plus/theme-chalk/el-message-box.css";// messageBox的样式
// @ is an alias to /src
import { ElMessage, ElMessageBox } from 'element-plus'
import goodsView from "@/views/goodsView.vue"
import { h, onMounted, ref } from 'vue'
import { addFurn, searchAll, updateFurn, deletedFurn } from "@/services/furnRequest.js"


export default {
  name: 'tableView',
  components: {
    goodsView,
  },
  setup() {
    const addDialogVisible = ref(false);
    const editDialogVisible = ref(false);
    const loading = ref(false);
    const tableData = ref([]);
    const currentRow = ref();

    //删除数据
    const handleDelete = (row) => {
      ElMessageBox({
        title: '提示框',
        message: h('p', null, [
          h('span', null, '确定要'),
          h('span', { style: 'color: red' }, '删除'),
          h('span', null, '这条信息?'),
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '删除中...'
            deletedFurn(row.id).then(res => {
              if (res.code == 200) {
                ElMessage({
                  message: '删除成功',
                  type: 'success',
                })
                instance.confirmButtonLoading = false
                done()
                loadData()
              } else {
                instance.confirmButtonLoading = false
                done()
                ElMessage.error('删除失败')
              }
            })
          } else if (action === 'cancel') {
            done()
          } else {
            done()
          }
        },
      }).then(() => {
       
      })
    }

    //提交数据
    const onSubmit = (data) => {
      let formRef = data.formRef;
      formRef.validate((valid) => {
        if (valid) {
          addFurn(data.form).then(res => {
            loading.value = true;
            if (res.code == 200) {
              ElMessage({
                message: '添加成功',
                type: 'success',
              })
              loading.value = false;
              addDialogVisible.value = false;
              loadData()
            } else {
              ElMessage.error('添加失败')
            }
          })
        }
      })
    }

    //操作栏编辑事件
    const handleEdit = (row) => {
      currentRow.value = row;
      editDialogVisible.value = true;
    }

    //编辑提交事件
    const onEdit = (data) => {
      let formRef = data.formRef;
      formRef.validate((valid) => {
        if (valid) {
          updateFurn(data.form).then(res => {
            loading.value = true;
            if (res.code == 200) {
              ElMessage({
                message: '编辑成功',
                type: 'success',
              })
              loading.value = false;
              editDialogVisible.value = false;
              loadData()
            } else {
              ElMessage.error('编辑失败')
            }
          })
        }
      })
    }

    //关闭事件
    const handleClose = () => {
      loading.value = false;
      addDialogVisible.value = false;
      editDialogVisible.value = false;
    }

    //表格加载事件
    const loadData = () => {
      searchAll().then(res => {
        if (res.code == 200) {
          tableData.value = res.extend.result;
        }
      })
    }

    //获取信息列表
    onMounted(() => {
      loadData()
    })
    return {
      tableData,
      handleDelete,
      onSubmit,
      addDialogVisible,
      editDialogVisible,
      handleEdit,
      onEdit,
      loading,
      handleClose,
      currentRow
    }
  }
}
</script>
<style scoped></style>
