<template>
  <div class="pa-3">
    <h3>专辑</h3>
    <h1 class="ml-3">{{ videos.name }} 歌曲列表</h1>
    <v-select
      v-model="currentIndex"
      :items="videos.episodes.map( (v,i) => ({ text: `${i+1} - ${v.name}`, value: i }))"
    ></v-select>
    <!-- <p>{{videos.episodes}}</p> -->
    <video :src="episode.file" width="100%" controls></video>
  </div>
  
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { id } = params
    const videos = await $axios.$get(`videos/${id}`,{
      params:{
        query: { populate: 'episodes' }
      }
    })
    return {
      videos,
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  computed: {
    episode(){
      return this.videos.episodes[this.currentIndex]
    }
  },
}
</script>

<style>
</style>