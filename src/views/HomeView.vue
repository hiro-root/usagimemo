<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mb-4" >
        <v-list nav color="pink-lighten-4" @click:select="clickItem" v-if="hasMemos">
          <v-list-item v-for="memo in memos" :key="memo.id">
            <router-link style="text-decoration: none; color: inherit; margin: auto;" :to="{ name: 'edit', params: { id: memo.id } }">
              <!-- {{ memo.title }} -->
              <v-card class="thumb-up mx-auto" color="#e7c2e7" hover>{{ memo.title }}</v-card>
            </router-link>
          </v-list-item>
        </v-list>
        <p class="mt-12" v-else>メモはないよ！<router-link to="/new">メモを作成</router-link>からメモを作ってね♪</p>
        <v-btn class="mt-12" justify="center" color="pink-accent-2" @click="newtext">メモを作成</v-btn>
      </v-col>
    </v-row>
  </v-container>


</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    newtext(){
      this.$router.push('/new')
    }
  },
  computed: {
    hasMemos() {
      return this.$store.getters.getCount
    },
    memos () {
      return this.$store.getters.getAll
    }
  }
}
</script>
<style>
.thumb-up::before{
  background-color: #F8BBD0;
}

</style>

