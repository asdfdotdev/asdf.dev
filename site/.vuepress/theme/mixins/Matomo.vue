<template>

  <div>
    <noscript v-html="asdf__matomo_noscript()"/>
  </div>

</template>

<style></style>

<script>

  import Tracker from '@flickerbox/tracker'
  import MatomoChannel from '@flickerbox/tracker/src/channels/matomo'

  export default {

    name: 'Matomo',

    data() {

      return {
        tracker: new Tracker({
          trackerChannel: MatomoChannel
        })
      }

    },

    methods: {

      asdf__matomo_noscript() {
        return `
          <img src="${this.$themeConfig.matomo.noscript}" style="border:0;">
        `
      },

      asdf__matomo_addLinkListeners() {
        document.querySelectorAll('a').forEach((element) => {
          element.addEventListener('click', (event) => {
            const clicked = element
            const link = clicked.getAttribute('href')
            const completeEvent = 'asdf_track_complete'

            if (clicked.getAttribute('target') !== '_blank' &&
              typeof link != 'undefined' &&
              link.indexOf('javascript:') !== 0 &&
              link.indexOf('#') !== 0
            ) {
              event.preventDefault()

              document.addEventListener(completeEvent, (event) => {
                window.location.href = link
              }, {
                once: true,
              })
            }

            this.tracker.event(
              {
                type: 'link_click',
                identifier: {
                  domData: clicked.getAttribute('data-event'),
                  domId: clicked.getAttribute('id'),
                  domName: link,
                },
                value: 'value',
              },
              completeEvent
            )
          })
        })
      },

      asdf__matomo_addImgListeners() {
        document.querySelectorAll('img').forEach((element) => {
          element.addEventListener('click', (event) => {
            this.tracker.event({
              type: 'image_click',
              identifier: {
                domData: event.currentTarget.getAttribute('src'),
                domId: event.currentTarget.getAttribute('alt'),
              },
            })
          })
        })
      },

      asdf__matomo_addCopyListeners() {
        document.querySelectorAll('.copyable').forEach((element) => {
          element.addEventListener('click', (event) => {
            this.tracker.event({
              type: 'contact_click',
              identifier: 'footer | email',
            })
          })
        })
      },

      asdf__matomo_addTileListeners() {
        document.querySelectorAll('.TiledGrid-logo').forEach((element) => {
          element.addEventListener('click', (event) => {
            this.tracker.event({
              type: 'tile_click',
              identifier: {
                domData: element.getAttribute('data-event'),
              },
            })
          })
        })
      },
    },

    mounted() {
      setTimeout(() => {
        this.asdf__matomo_addLinkListeners()
        this.asdf__matomo_addImgListeners()
        this.asdf__matomo_addCopyListeners()
        this.asdf__matomo_addTileListeners()
      }, 500);
    }

  }

</script>
