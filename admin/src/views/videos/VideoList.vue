<template>
  <div>
    <h3>专辑列表</h3>
    <div>
      <el-button style="margin-bottom: 15px" type="primary" size="default" @click="$router.push(`/videos/create`)">创建专辑</el-button>
      
    </div>
    <el-table :data="data.data" border stripe>
      <el-table-column v-for="(field,name) in fields"
        :prop="name"
        :key="name"
        :label="field.label"
        :width="field.width">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center">
        <!-- 获取行的作用域 并取其中的id router.push到对应id的编辑页 -->
        <template v-slot="{row}">
          <el-button type="primary" size="mini" @click="$router.push(`/videos/edit/${row._id}`)">编辑</el-button>
          <el-button type="danger" size="mini" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
      
    </el-table>
  </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component({})
export default class VideoList extends Vue {
  data = {}
  fields = {
    _id: {label: 'ID'},
    name: {label: '专辑名称'},
    cover: {label: '专辑封面'}
  }

  async remove(row){
    try{
      await this.$confirm('是否确认删除？')
    }
    catch(e){
      this.$message.info('删除已取消！')
      return
    }
    
    await this.$http.delete(`videos/${row._id}`)
    this.$message.error('删除成功！')
    this.fetch()
  }

  async fetch(){
    const res = await this.$http.get('videos')
    this.data = res.data
  }

  created(){
    this.fetch()
  }
}
</script>

<style>

</style>