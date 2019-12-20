<template>

  <div>
    <noscript v-html="asdf__matomo_noscript()"/>
  </div>

</template>

<style></style>

<script>

  export default {

    name: 'Matomo',

    methods: {

      asdf__matomo_noscript() {
        return `
          <img src="${this.$themeConfig.matomo.noscript}" style="border:0;">
        `
      }
    },

  }

</script>
