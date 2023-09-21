<template>
  <div>
    <nuxt-link
      v-if="isRootRelative() && !isToElement()"
      :to="linkUrl"
      :class="linkClasses"
    >
      <slot />
    </nuxt-link>
    <a
      v-else
      :href="linkUrl"
      :class="linkClasses"
      :prefetch="!isCorporateProfile"
    >
      <slot />
    </a>
  </div>
</template>
<script>
export default {
  props: {
    linkUrl: {
      type: String,
      default: '/',
    },
    linkClasses: {
      type: String,
      default: '',
    },
  },
  computed: {
    isCorporateProfile() {
      if (this.linkUrl.indexOf('corporate-profile') > -1) {
        return true
      }
      return false
    },
  },
  methods: {
    isRootRelative() {
      // if (this.linkUrl.includes('tel') || this.linkUrl.includes('mailto')) {
      //   return false
      // }
      
      return this.$router.resolve(this.linkUrl).resolved.matched.length > 0
    },
    isToElement() {
      // Added because router-link is not happy on the scroll to an element
      return /#/g.test(this.linkUrl)
    },
  },
}
</script>
