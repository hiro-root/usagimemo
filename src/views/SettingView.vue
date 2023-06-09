<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" v-if="mainImage">
        <v-img
          :src="require('../assets/bear.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="12" v-else>
        <v-img
          :src="require('../assets/usagi.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col>
        <v-switch
          class="d-flex justify-center"
          v-model="darkTheme"
          @update:model-value="changeTheme"
          :prepend-icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'"
          label="ChangeTheme"
          hide-details
          inset
        ></v-switch>
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col>
        <v-switch
          class="d-flex justify-center"
          v-model="mainImage"
          @update:model-value="changeImage"
          :prepend-icon="mainImage ? 'mdi-paw' : 'mdi-rabbit'"
          label="ChangeImage"
          hide-details
          inset
        ></v-switch>
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col>
        <div style="gap: 1rem; display: flex; justify-content: center;">
          <v-btn v-if="mainImage" color="grey-darken-3" @click="erase">Forced erasure of all memos</v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row justify="space-around">    
    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="pink-lighten-4"
            v-bind="props"
          >About this App</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="pink-lighten-4"
              title="About this App"
            ></v-toolbar>
            <v-card-text>
              <div class="text-h5 pa-12">Tap "Settings" to toggle dark mode and images. You can also forcibly delete data stored in local storage.</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                variant="text"
                @click="isActive.value = false"
              >Close</v-btn>
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

const darkTheme = ref(false)
const theme = useTheme()

const changeTheme = () => {
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
  console.log(theme.global.name.value)
}

const mainImage = ref(false)

// const image = useImage()
// const imageCheck =""
const changeImage = () => {
  // console.log("OK")
  // console.log(mainImage.value)
  // if (mainImage.value == true) {
  //   console.log("mainImage true")
  //   console.log("くまの画像表示")

  // } else {
  //   console.log("mainImage false")
  //   console.log("うさぎの画像表示")


  // }
};
const erase = () => {
  // this.$router.push('/')

  // prompt('表示したいメッセージをここに書く');

  const result = confirm("削除して本当にいい？");
  if (result) {
  // OKの場合の処理

  var arr = [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9" ] ;
  var K1 = arr[ Math.floor( Math.random() * arr.length ) ] ;
  var K2 = arr[ Math.floor( Math.random() * arr.length ) ] ;
  var K3 = arr[ Math.floor( Math.random() * arr.length ) ] ;
  var K4 = arr[ Math.floor( Math.random() * arr.length ) ] ;
  var K5 = arr[ Math.floor( Math.random() * arr.length ) ] ;
  var K6 = arr[ Math.floor( Math.random() * arr.length ) ] ;
  var NUM = K1+K2+K3+K4+K5+K6;
  alert(NUM);

  // const chcknum = Math.floor(Math.random() * 65535) + 1
  // const admincheck = chcknum;
  // alert(chcknum);
  const result = prompt('確認コードを入力してね');
    if (NUM == result){
      localStorage.clear();
      console.log("localStorageを消去")
    return
    }
  // localStorage.clear();
  // console.log("localStorageを消去")

  return

  } else {
  // キャンセルの場合の処理

  return
  }

};


</script>
