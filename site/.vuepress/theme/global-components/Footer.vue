<template>

  <footer>

    <div>
      greetings from portland
    </div>

    <div
      class="copyable"
      @click="asdf__copyContents"
      v-html="emailAddress"/>

  </footer>

</template>

<style></style>

<script>

  import CopyContents from '../mixins/CopyContents'

  export default {

    name: 'Footer',

    mixins: [
      CopyContents,
    ],

    data() {

      return {
        emailAddress: 'hello@asdf.dev',
      }

    },

  }

</script>
