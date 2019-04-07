<template>

  <section class="FiftyFifty">

    <div class="Wrap">

      <h2 class="Grid with-12">

        <div
          class="is-6 is-12--small"
          v-html="left.title"/>

        <div
          class="is-6 is-12--small"
          v-html="right.title"/>

      </h2>

      <div class="Grid with-12">

        <div
          class="is-6 is-12--small"
          v-html="left.contents"/>

        <div
          class="is-6 is-12--small"
          v-html="right.contents"/>

      </div>

    </div>

  </section>

</template>

<style></style>

<script>

  export default {

    name: 'FiftyFifty',

    props: {

      left: {
        default: () => {},
        type: Object,
      },

      right: {
        default: () => {},
        type: Object,
      },

    },

  }

</script>
