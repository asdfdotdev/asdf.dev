<template>

  <div></div>

</template>

<style></style>

<script>

  export default {

    name: 'FormattedText',

    methods: {

      asdf__formattedText: function(text) {
        return text.match(/[^\r\n]+/g)
      },

    },

  }

</script>
