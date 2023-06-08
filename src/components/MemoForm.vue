<template>
  <!-- <div><input type="text" v-model="title"></div> -->
  <div class="mt-4"><v-text-field label="タイトルを入力してね" variant="outlined" v-model="title"></v-text-field></div>
  <!-- <div><textarea v-model="content"></textarea></div> -->
  <div><v-textarea label="内容を入力してね" variant="outlined" v-model="content"></v-textarea></div>
  <!-- <div class="center">
    <button @click="save">保存</button>
    <button @click="remove" v-if="memo.id">削除</button>
  </div> -->
  <div style="gap: 1rem; display: flex; justify-content: center;">
    <v-btn color="pink-lighten-4" @click="back">戻る</v-btn>
    <v-btn color="pink-accent-2" @click="save">保存</v-btn>
    <v-btn color="grey-lighten-1" @click="remove" v-if="memo.id">削除</v-btn>
  </div>
</template>

<script>
export default {
    name: 'MemoForm',
    props: [
        'memo'
    ],
    data() {
        return {
            title: this.memo.title,
            content: this.memo.content
        }
    },
    methods: {
        save() {
            let memo = {
                title: this.title,
                content: this.content
            }

            if (this.memo.id) {
                memo.id = this.memo.id
            }

            this.$store.commit('save', memo)
            this.$router.push('/')
        },
        remove () {
            const result = confirm("削除して本当にいい？");
            if (result) {
            // OKの場合の処理
            this.$store.commit('delete', this.memo.id)
            
            this.$router.push('/')

            } else {
            // キャンセルの場合の処理
            return
            }

        },
        back() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
div {
    margin-bottom: 10px;
}
input[type=text] {
    width: 100%;
}
textarea {
    width: 100%;
    height: 30em;
}
button {
    width: 5em;
    margin: 3px;
}
.center {
    text-align: center;
}
</style>