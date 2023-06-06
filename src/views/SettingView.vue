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
    
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
// import SvgIcon from '@jamescoyle/vue-icon';
// import { mdiRabbitVariantOutline } from '@mdi/js';


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
}

</script>