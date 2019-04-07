<template>

  <section
    :class="['Hero', directionClass]">

    <h1
      class="Hero-title"
      v-html="title"/>

  </section>

</template>

<style></style>

<script>

  export default {

    name: 'Hero',

    computed: {

      directionClass: function() {

        if ('right' === this.orientation) {
          return 'is-RightToLeft'
        } else {
          return 'is-LeftToRight'
        }

      },

    },

    props: {

      orientation: {
        default: '',
        type: String,
      },

      color: {
        default: '',
        type: String,
      },

      title: {
        default: '',
        type: String,
      },

    },

  }

</script>

vb
