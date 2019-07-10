<template>

  <section
    :class="['FeaturedImage', alignmentClass]">

    <div class="Wrap">

      <h2 v-html="title"/>

      <div class="Grid with-12">

        <div class="is-6 is-12--small FeaturedImage-image">

          <img
            :src="image.path"
            :alt="image.alt">

        </div>

        <div class="is-6 is-12--small">

          <div class="FeaturedImage-text">

            <p
              v-for="(line, index) in asdf__formattedText(text)"
              :key="index"
              v-html="line"/>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<style></style>

<script>

  import FormattedText from "../mixins/FormatText"

  export default {

    name: 'FeaturedImage',

    mixins: [
      FormattedText,
    ],

    computed: {

      alignmentClass: function() {

        if ('right' === this.align) {
          return 'is-AlignRight'
        } else {
          return 'is-AlignLeft'
        }

      },

    },

    props: {

      title: {
        default: '',
        type: String,
      },

      align: {
        default: '',
        type: String,
      },

      image: {
        default: () => {},
        type: Object,
      },

      text: {
        default: '',
        type: String,
      },

    },

  }

</script>
