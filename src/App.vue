<template>
  <v-app>
    <v-main>
      <header>
        <v-app-bar max-height="4px" color="pink-lighten-4" dence>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="title">うさぎめも</v-toolbar-title>
          <template v-slot:append>

            <!-- <v-btn icon="mdi-heart"></v-btn> -->
            
            <div class="box"> 
            <v-btn @click="increment" class="bubbly-button" icon="mdi-rabbit"></v-btn>
            </div>
            
            <div class="box"> 
            <v-btn @click="incrementbear" class="bubbly-button" icon="mdi-paw"></v-btn>
            </div>

            <v-btn @click="goList" icon="mdi-card-text"></v-btn>
            <v-btn @click="goNew" icon="mdi-card-plus"></v-btn>
            <v-btn @click="goSetting" icon="mdi-cog"></v-btn>
          </template>

          <div class="text-center">
              <!-- <v-btn
                color="orange-darken-2"
                @click="snackbar = true"
              >
                a
              </v-btn> -->

              <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
                color="pink"
                variant="tonal"
              >
                {{ text }}

                <template activator="{ props }">
                  <v-btn
                  color="pink"
                  variant="tonal"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </div>

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
       snackbar: false,
       text: 'Thank you.',
       timeout: 1500,
     }
   },
   methods: {
    clickItem(arg)
    {
      this.$router.push(arg.id);
    },
    goList(){
      this.$router.push("/");
    },
    goNew(){
      this.$router.push("/new");
    },
    goSetting(){
      this.$router.push("/setting");
    },
    increment(){
      this.$store.commit('increment');
      this.text = messages();
      this.snackbar = true;
    },
    incrementbear(){
      this.$store.commit('incrementbear');
      this.text = messages();
      this.snackbar = true;
    }
  }
 }
const messages = () =>{
 
  var messages = ['Thank you.','Great.','Wonderful.','Twinkle twinkle little star. How I wonder what you are! Up above the world so high. Like a diamond in the sky.','Sweet dreams.','Thank you.','Yeah very holiday.'];

  const messageNo = Math.floor( Math.random() * messages.length);
  console.log(messages[messageNo]);
  return messages[messageNo];
} 


var animateButton = function(e) {

e.preventDefault;
//reset animation
e.target.classList.remove('animate');

e.target.classList.add('animate');
setTimeout(function(){
  e.target.classList.remove('animate');
},700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
bubblyButtons[i].addEventListener('click', animateButton, false);
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





.box {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.box .bubbly-button {
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    padding: 0.5em 0.5em;
    -webkit-appearance: none;
    appearance: none;
    color: #000000;
    background: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
}
.box .bubbly-button > i {
    position: relative;
    z-index: -1;
}
.box .bubbly-button:focus {
    outline: 0;
}
.box .bubbly-button:before, .box .bubbly-button:after {
    position: absolute;
    content: '';
    display: block;
    width: 150%;
    height: 70%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
}
.box .bubbly-button:before {
    display: none;
    top: -35%;
    background-image: radial-gradient(circle, #d53fff 10%, transparent 20%), radial-gradient(circle, transparent 10%, #d53fff 20%, transparent 30%), radial-gradient(circle, #d53fff 10%, transparent 20%), radial-gradient(circle, #d53fff 10%, transparent 20%), radial-gradient(circle, transparent 5%, #d53fff 15%, transparent 20%), radial-gradient(circle, #ffd635 10%, transparent 20%), radial-gradient(circle, #ffd635 10%, transparent 20%), radial-gradient(circle, #ffd635 10%, transparent 20%), radial-gradient(circle, #ffd635 10%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
}
.box .bubbly-button:after {
    display: none;
    bottom: -35%;
    background-image: radial-gradient(circle, #56adff 10%, transparent 20%), radial-gradient(circle, #56adff 10%, transparent 20%), radial-gradient(circle, transparent 5%, #56adff 15%, transparent 20%), radial-gradient(circle, #56adff 10%, transparent 20%), radial-gradient(circle, #79ff4c 10%, transparent 20%), radial-gradient(circle, #79ff4c 10%, transparent 20%), radial-gradient(circle, #79ff4c 10%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
}
.box .bubbly-button:active {
    transform: scale(0.9);
    color: #f13fb6;
}
.box .bubbly-button.animate:before {
    display: block;
    animation: topBubbles ease-in-out 0.75s forwards;
}
.box .bubbly-button.animate:after {
    display: block;
    animation: bottomBubbles ease-in-out 0.75s forwards;
}
@keyframes topBubbles {
    0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
    50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
    }
    100% {
        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
}
@keyframes bottomBubbles {
    0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
    }
    50% {
        background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
    }
    100% {
        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
}
@keyframes topBubbles {
    0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
    50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
    }
    100% {
        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
}
@keyframes bottomBubbles {
    0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
    }
    50% {
        background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
    }
    100% {
        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
}


</style>

