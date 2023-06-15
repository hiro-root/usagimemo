<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" v-if="mainImage">
        <v-img :src="require('../assets/bear.jpg')" class="my-3" contain height="200" />
      </v-col>
      <v-col cols="12" v-else>
        <v-img :src="require('../assets/usagi.jpg')" class="my-3" contain height="200" />
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col>
        <v-switch class="d-flex justify-center" v-model="darkTheme" @update:model-value="changeTheme"
          :prepend-icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'" label="ChangeTheme" hide-details
          inset></v-switch>
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col>
        <v-switch class="d-flex justify-center" v-model="mainImage" @update:model-value="changeImage"
          :prepend-icon="mainImage ? 'mdi-paw' : 'mdi-rabbit'" label="ChangeImage" hide-details inset></v-switch>
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col>
        <p class="d-flex justify-center" v-if="!mainImage"><v-icon color="#db1683" v-if="!mainImage">mdi-heart</v-icon>{{ $store.state.heart }}</p>
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col>
        <div style="gap: 1rem; display: flex; justify-content: center;">
          <v-icon class="d-flex justify-center" v-if="mainImage" color="#db1683">mdi-heart</v-icon><p class="text-subtitle-1" v-if="mainImage" >{{ $store.state.bearheart }}</p>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col>
        <div style="gap: 1rem; display: flex; justify-content: center;">
          <v-btn v-if="mainImage" color="grey-darken-3" @click="erase">Forced erasure of all memos and data</v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog transition="dialog-top-transition" width="auto">
          <template v-slot:activator="{ props }">
            <v-btn color="pink-lighten-4" v-bind="props">About this App</v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar color="pink-lighten-4" title="About this App"></v-toolbar>
              <v-card-text>
                <div class="text-h5 pa-12">Tap "Settings" to toggle dark mode and images. You can also forcibly delete
                  data stored in local storage.</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>

  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const darkTheme = ref()
const theme = useTheme()


const changeTheme = () => {
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
  console.log(theme.global.name.value)
}



const mainImage = ref('')

// const image = useImage()
// const imageCheck =""
const changeImage = () => {

  console.log(mainImage.value)
  if (mainImage.value == true) {
    console.log("mainImage.value:true")
    console.log("くまの画像表示")
    mainImage.value = true
    return

  } else {
    console.log("mainImage.value:false")
    console.log("うさぎの画像表示")

    mainImage.value = false
    return
  }
};
const erase = () => {
  // this.$router.push('/')

  // prompt('表示したいメッセージをここに書く');

  const result = confirm("削除して本当にいい？");
  if (result) {
    // OKの場合の処理

    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var K1 = arr[Math.floor(Math.random() * arr.length)];
    var K2 = arr[Math.floor(Math.random() * arr.length)];
    var K3 = arr[Math.floor(Math.random() * arr.length)];
    var K4 = arr[Math.floor(Math.random() * arr.length)];
    var K5 = arr[Math.floor(Math.random() * arr.length)];
    var K6 = arr[Math.floor(Math.random() * arr.length)];
    var NUM = K1 + K2 + K3 + K4 + K5 + K6;
    alert(NUM);

    const result = prompt('確認コードを入力してね');
    if (NUM == result) {
      localStorage.clear();
      console.log("localStorageを消去")
      location.reload()
      return
    }
    return

  } else {
    // キャンセルの場合の処理

    return
  }

};


</script>

