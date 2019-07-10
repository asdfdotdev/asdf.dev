<template>

  <section class="OverUnder">

    <div class="Wrap">

      <h2
        v-html="title"/>

      <div
        v-if="over"
        class="Over Grid with-12">

        <div class="is-6 is-12--small">

          <div
            class="OverUnder-text"
            v-if="over.text">

            <p
              v-for="(line, index) in asdf__formattedText(over.text)"
              :key="index"
              v-html="line"/>

          </div>

        </div>

        <div class="is-6 is-12--small">

          <img
            v-if="over.image"
            :src="over.image.path"
            :alt="over.image.alt">

        </div>

      </div>

    </div>

    <div class="OverUnder-divide">
      <div></div>
      <div></div>
    </div>

    <div class="Wrap">

      <div
        v-if="under"
        class="Under Grid with-12">

        <div class="is-6 is-12--small">

          <img
            v-if="under.image"
            :src="under.image.path"
            :alt="under.image.alt">

        </div>

        <div class="is-6 is-12--small">

          <div
            class="OverUnder-text"
            v-if="under.text">

            <p
              v-for="(line, index) in asdf__formattedText(under.text)"
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

    name: 'OverUnder',

    mixins: [
      FormattedText,
    ],

    props: {

      title: {
        default: '',
        type: String,
      },

      over: {
        default: () => {},
        type: Object,
      },

      under: {
        default: () => {},
        type: Object,
      },

    },

  }

</script>
