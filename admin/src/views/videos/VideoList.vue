<template>
  <div>
    <h3>专辑列表</h3>
    <el-table :data="data.data" border stripe>
      <el-table-column v-for="(field,name) in fields"
        :prop="name"
        :key="name"
        :label="field.label"
        :width="field.width">
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