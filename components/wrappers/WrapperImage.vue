<template>
  <img
    v-if="!String(image.url).includes('.svg')"
    :src="`${image.url}&q=10&blur=900`"
    :data-srcset="getSrcSet"
    :class="imageClasses"
    class="lazyload"
    :alt="image.alt"
    data-sizes="auto"
    ref="image"
  >
  <img
    v-else
    :src="`${image.url}`"
    :class="imageClasses"
    class="lazyload"
    :alt="image.alt"
    ref="image"
  >
</template>
<script>
import { gsap, Expo } from 'gsap'
export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    sizes: {
      type: Array,
      default: () => { return [320, 640, 768, 960, 1024, 1280, 1600, 1920] }
    },
    imageClasses: {
      type: String,
      default: ''
    },
  },
  computed: {
    getSrcSet () {
      let srcSet = ''
      this.sizes.forEach((size) => {
        srcSet += this.image.url + '&w=' + size + ' ' + size + 'w,'
      })
      return srcSet.slice(0, -1)
    }
  }
}
</script>
