<template>
  <v-app>
    <v-main>
      <header>
        <v-app-bar color="pink-lighten-4" app>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="title">うさぎめも</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          fixed
          temporary
        >
          <v-list
            nav
            color="pink-lighten-3"
            @click:select="clickItem"
          >
            <v-list-item-group>
              <v-list-item value="/">
                <v-list-item-title>メモ一覧</v-list-item-title>
              </v-list-item>
              <v-list-item value="/new">
                <v-list-item-title>メモを作成</v-list-item-title>
              </v-list-item>
              <v-list-item value="/setting">
                <v-list-item-title>設定</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
            <h1>{{ message }}</h1>
          </v-list>
        </v-navigation-drawer>
      </header>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


 export default {
   data () {
     return {
      //  drawer: false,
       drawer: null,

     }
   },
   methods: {
    clickItem(arg)
    {
      this.$router.push(arg.id);
    }
  }
 }
</script>
<style>

/* Google fonts */
@import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap');

.title {
  font-family: 'Cherry Bomb One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #db1683;
}
</style>

