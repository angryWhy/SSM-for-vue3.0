<template>
  <div>
    <el-button type="primary" style="margin:20px;" @click="addDialogVisible= true">新增</el-button>
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <el-table-column fixed="left" type="index" width="80" />
      <el-table-column prop="id" label="id" width="80" />
      <el-table-column prop="name" label="家具名字" width="150" />
      <el-table-column prop="factory" label="家具厂" width="150" />
      <el-table-column prop="price" label="价格" width="150" />
      <el-table-column prop="sale" label="销量" width="150" />
      <el-table-column prop="residue" label="库存" />
      <el-table-column fixed="right" label="操作栏" width="200">
        <template #default="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="addDialogVisible" title="添加" width="650px" center>
      <goodsView>
        <template #ok="form">
          <el-button type="primary" @click="onSubmit(form)">添加</el-button>
        </template>
        <template #cancel>
          <el-button @click="addDialogVisible = false">取消</el-button>
        </template>
      </goodsView>
    </el-dialog>
    <el-dialog v-model="editDialogVisible" title="添加" width="650px" center>
      <goodsView>
        <template #ok="form">
          <el-button type="primary" @click="onEdit(form)">提交</el-button>
        </template>
        <template #cancel>
          <el-button @click="editDialogVisible = false">取消</el-button>
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
import { h,ref } from 'vue'
export default {
  name: 'tableView',
  components: {
    goodsView
  },
  setup() {
    const addDialogVisible = ref(false)
    const editDialogVisible = ref(false)
    const tableData = [
      {
        id: 1,
        name: "桌子",
        factory: "顺华家具",
        price: "900.5",
        sale: "10",
        residue: 10
      },
      {
        id: 2,
        name: "凳子",
        factory: "胜利家具",
        price: "2000.99",
        sale: "5",
        residue: 2
      }
    ]

    //删除数据
    const handleDelete = (row) => {
      console.log(row);
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
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 1000)
          } else if (action === 'cancel') {
            done()
          } else {
            done()
          }
        },
      }).then(() => {
        ElMessage({
          type: 'success',
          message: `删除成功`,
        })
      })
    }

    //提交数据
    const onSubmit = (row) => {
      console.log(row);
      addDialogVisible.value = false;
    }
    //操作栏编辑事件
    const handleEdit = (row) => {
      console.log(row);
      editDialogVisible.value = true;
    }
    const onEdit = (row) => {
      console.log(row);
      editDialogVisible.value = false;
    }
    return {
      tableData,
      handleDelete,
      onSubmit,
      addDialogVisible,
      editDialogVisible,
      handleEdit,
      onEdit
    }
  }
}
</script>
<style scoped></style>
