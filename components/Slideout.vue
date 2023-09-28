<template>
<div class="relative lg:z-10" role="dialog" aria-modal="true">
  <div class="lg:fixed inset-0"></div>
  <div class="lg:fixed inset-0 overflow-hidden">
    <div class="lg:absolute inset-0 overflow-hidden">
      <div class="pointer-events-none lg:fixed inset-y-0 right-0 flex max-w-full">
        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-gray-900 shadow-xl lg:pt-16">
            <!-- Main -->
            <div>
              <div class="pb-1 sm:pb-6">
                <div>
                  <div class="relative h-40 sm:h-56">
                    <img class="lg:absolute h-full w-full object-contain p-8" :src="bannerImage" alt="">
                  </div>
                  <div class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                    <div class="sm:flex-1">
                      <div>
                        <div class="flex items-center">
                          <h3 class="text-xl font-bold text-white sm:text-2xl code-font">{{ heading }}</h3>
                          <span :class="`ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full ${isActive ? 'bg-green-400' : 'bg-red-400'}`">
                            <span class="sr-only">Online</span>
                          </span>
                        </div>
                        <prismic-rich-text :field='tags' class="text-sm text-gray-500" />
                      </div>
                      <div v-if="link" class="mt-5 inline-flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                        <a :href="link" :class="`inline-flex w-full flex-shrink-0 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 py-3 px-8 inline ${ isActive ? 'bg-emerald-600 hover:bg-emerald-500 cursor-pointer' : 'bg-red-600 cursor-disabled opacity-50'}`">{{ isActive ? 'Visit Site' : 'No Longer Active' }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
                <dl class="space-y-8 px-4 sm:space-y-6 sm:px-6">
                  <div>
                    <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">About {{ heading }}</dt>
                    <dd class="mt-1 text-sm text-white sm:col-span-2 code-font">
                      <prismic-rich-text :field='content' />
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Stack</dt>
                    <prismic-rich-text :field='stack' class="mt-1 text-sm text-white sm:col-span-2 code-font" />
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Website</dt>
                    <a v-if="link" :href="link" class="code-font mt-1 text-sm text-white sm:col-span-2 border-b border-white">{{ link }}</a>
                    <div v-else>No longer active :(</div>
                  </div>
                </dl>
              </div>
            </div>
            <div class="hidden lg:flex px-4 py-6 sm:px-6">
              <div class="flex items-start justify-between">
                <div @click="$router.go(-1)" class="text-white flex h-7">
                    <SVGBackArrow class="cursor-pointer hover:opacity-50" /><span class="ml-4 cursor-pointer">Back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<script setup>
import { defineProps, reactive } from "vue";

const props = defineProps({
  bannerImage: String | null,
  heading: String | null,
  content: String | null,
  tags: String | null,
  link: String | null,
  stack: String | null,
  isActive: Boolean | false
});

const { bannerImage } = toRefs(props);
</script>