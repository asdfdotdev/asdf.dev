<template>

  <div></div>

</template>

<style></style>

<script>

  export default {

    name: 'CopyContents',

    methods: {

      asdf__copyContents(event) {

        let copyTarget = event.target
        let copyInput = document.createElement("input")
        copyInput.type = 'text'
        copyInput.value = copyTarget.innerHTML
        document.body.appendChild(copyInput)
        copyInput.select()
        document.execCommand("Copy")
        document.body.removeChild(copyInput)
        copyTarget.classList.add('copied')
        setTimeout(() => {
             copyTarget.classList.remove('copied')
        }, 2000);

      }

    },

  }

</script>
