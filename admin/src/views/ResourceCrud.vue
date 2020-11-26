<template>
  <div>
    <h2>{{ option.title }}</h2>
    <avue-crud
      v-if="option.column"
      :option="option"
      :data="data.data"
      :page.sync="page"
      @on-load="changePage"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @sort-change="changeSort"
      @search-change="search"
    >
    </avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop(String) resource?: string;
  data: any = {};
  option: any = {};
  page: any = {
    total: 0,
    // pageSizes: [2, 5, 10],
    // pageSize: 2,
  };
  query: any = {
    // limit: 2,
    sort: { _id: -1 },
  };

  fields = {
    _id: { label: "ID" },
    name: { label: "专辑名称" },
    cover: { label: "专辑封面" },
  };

  //新增
  async create(row, done) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("添加成功！");
    this.fetch();
    done();
  }

  //更新
  async update(row, index, done) {
    //avue会往row中添加$index引起修改失败问题
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`${this.resource}/${row._id}`, data);
    this.$message.success("更新成功！");
    this.fetch();
    done();
  }

  //删除
  async remove(row) {
    try {
      await this.$confirm("是否确认删除？");
    } catch (e) {
      this.$message.info("删除已取消！");
      return;
    }
    await this.$http.delete(`${this.resource}/${row._id}`);
    this.$message.error("删除成功！");
    this.fetch();
  }

  async changePage({ pageSize, currentPage }) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async changeSort({ prop, order }) {
    if (!order) {
      this.query.sort = null;
    } else {
      this.query.sort = {
        //动态键[]
        [prop]: order === "asscending" ? 1 : -1,
      };
    }
    this.fetch()
  }

  async search(query,done){
    //遍历模糊查询的字段对象：{name: "aaa"}
    for(let key in query){
      //在option.column里查找对应的字段对象
      const field = this.option.column.find(col => col.prop === key)
      //判断字段 reg属性是否为true(模糊查询)
      if(field.reg){
        query[key]={$regex: query[key]};
      }
    }
    this.query.where = query
    done()
    this.fetch()
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: { query: this.query },
    });
    this.page.total = res.data.total;
    this.data = res.data;
  }
  async fetchOptions() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }

  created() {
    this.fetch();
    this.fetchOptions();
  }
}
</script>

<style>
</style>