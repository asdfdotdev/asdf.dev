<template>

  <article
    :class="[pathToClass]">

    <Header/>

    <Hero
      v-if="$page.frontmatter.hero"
      :color="$page.frontmatter.hero.color"
      :orientation="$page.frontmatter.hero.orientation"
      :title="$page.frontmatter.hero.title"/>

    <OverUnder
      v-if="$page.frontmatter.over_under"
      :color="$page.frontmatter.over_under.color"
      :title="$page.frontmatter.over_under.title"
      :over="$page.frontmatter.over_under.over"
      :under="$page.frontmatter.over_under.under"/>

    <FiftyFifty
      v-if="$page.frontmatter.fifty_fifty"
      :left="$page.frontmatter.fifty_fifty.left"
      :right="$page.frontmatter.fifty_fifty.right"/>

    <TiledGrid
      v-if="$page.frontmatter.tiled_grid"
      :title="$page.frontmatter.tiled_grid.title"
      :tiles="$page.frontmatter.tiled_grid.tiles"/>

    <Footer/>

  </article>

</template>

<style lang="scss">
  @import '../styles/master';
</style>

<script>

  import Hero from "../components/hero";
  import OverUnder from "../components/OverUnder";
  import FiftyFifty from "../components/FiftyFifty";
  import TiledGrid from "../components/TiledGrid";

  export default {

    name: 'Layout',

    components: {
      TiledGrid,
      FiftyFifty,
      Hero,
      OverUnder,
    },

    computed: {

      pathToClass: function() {
        return this.$page.path.replace(/\//g, '')
      },

    },

  }

</script>
