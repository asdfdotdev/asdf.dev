<template>

  <section class="['TiledGrid']">

    <div class="Wrap">

      <h2
        v-html="title"/>

      <div class="Grid with-12 has-largeGaps">

        <div
          v-for="(tile, index) in tiles"
          class="TiledGrid-tile is-4 is-12--small">

          <div class="TiledGrid-logo">
            <img :src="tile.image">
          </div>

          <h6
            v-html="tile.name"/>

          <p
            v-html="tile.description"/>

        </div>

      </div>

    </div>

  </section>

</template>

<style></style>

<script>

  export default {

    name: 'TiledGrid',

    props: {

      title: {
        default: '',
        type: String,
      },

      tiles: {
        default: () => [],
        type: Array,
      }

    },

  }

</script>
