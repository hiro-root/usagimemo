<template>
<v-container>
  <v-row class="text-center">
    <v-col cols="12" class="mb-4">
      <MemoForm v-if="memo" :memo="memo" />
      <p class="mt-12" v-else>指定されたメモはないよ！</p> 
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import MemoForm from '@/components/MemoForm.vue'
export default {
    name: 'EditView',
    components: {
        MemoForm
    },
    computed: {
        memo() {
            const id = parseInt(this.$route.params.id)
            return this.$store.getters.getMemoById(id)
        }
    }
}
</script>