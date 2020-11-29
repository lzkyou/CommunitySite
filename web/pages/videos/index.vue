<template>
  <div class="pa-3">
    <h3>专辑列表</h3>
    <v-row>
      <v-col v-for="item in videos" :key="item._id" md="4">
        <v-card :to="`/videos/${item._id}`" class="mx-auto" max-width="344">
          <v-img
            :src="item.cover"
            height="280px"
          ></v-img>

          <v-card-title> {{item.name}} </v-card-title>

          <v-card-subtitle>发布日期： {{item.publish}} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}){
    const data = await $axios.$get('videos') 
    return{
      videos: data.data
    }
  },
  data(){
    return{
      show: false,
    }
  }
}
</script>

<style>
</style>