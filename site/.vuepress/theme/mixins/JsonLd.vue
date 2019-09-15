<template>

  <div>
    <script type="application/ld+json" v-html="asdf__json_ld_schema()" />
  </div>

</template>

<style></style>

<script>

  export default {

    name: 'JsonLd',

    methods: {

      asdf__json_ld_schema() {
        return JSON.stringify({
          "@context":"http://schema.org",
          "@type":"Person",
          "name":`${this.$themeConfig.schema.name}`,
          "url": "",
          "telephone":`${this.$themeConfig.schema.telephone}`,
          "address": {
            "@type":"PostalAddress",
            "addressLocality":`${this.$themeConfig.schema.addressLocality}`,
            "addressRegion":`${this.$themeConfig.schema.addressRegion}`,
            "postalCode":`${this.$themeConfig.schema.postalCode}`,
            "addressCountry":`${this.$themeConfig.schema.addressCountry}`
          } ,
          "jobTitle":`${this.$themeConfig.schema.jobTitle}`,
          "affiliation":`${this.$themeConfig.schema.affiliation}`,
          "sameAs": [
            this.$themeConfig.schema.sameAs
          ]
        })
      }

    },

  }

</script>
