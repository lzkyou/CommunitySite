<template>
  <div>
    <h3>{{ isNew ? "新建" : "编辑" }}专辑</h3>
    <ele-form
      v-model="data"
      :form-desc="fields"
      :request-fn="submit"
    ></ele-form>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class VideoEdit extends Vue {
  @Prop(String) id?: string;

  data = {};

  get isNew() {
    return !this.id;
  }

  fields = {
    name: { label: "专辑名称", type: "input" },
    cover: { label: "专辑封面", type: "input" },
  };

  async submit(data){
    const url = this.isNew ? 'videos' : `videos/${this.id}`
    const method = this.isNew ? 'post': 'put'
    await this.$http[method](url,data)
    this.$message.success('保存成功！')
    this.data = {}
    this.$router.go(-1)
  }

  async fetch() {
    const res = await this.$http.get(`videos/${this.id}`);
    this.data = res.data;
  }

  created(){
    //&&前面条件不达成不做后面
    !this.isNew && this.fetch()
  }
}
</script>

<style>
</style>