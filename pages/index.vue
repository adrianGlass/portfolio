<template class="mouse-cursor-gradient-tracking">
  <div class="bg-white">
    <div class="relative isolate overflow-hidden bg-gradient-to-b max-w-7xl mx-auto overflow-visible">
      <div class="mx-auto pt-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 md:min-h-500p">
        <div class="px-6 lg:px-0 lg:pt-4 flex items-center">
          <div class="mx-auto max-w-2xl mb-4 lg:mb-16 mr-auto ml-0 mt-8">
            <div class="max-w-lg">
              <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Supercharge your web applications</h1>
              <div class="mt-10 flex items-center gap-x-6">
                <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Documentation</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">View on GitHub <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="smsbox flex items-center w-full justify-center">
          <!-- <img class="inline w-24 h-48" src="~/assets/images/bracket-curly-light.svg"/> -->
          <div class="sk-three-bounce">
              <div class="sk-bounce-1 sk-child"></div>
              <div class="sk-bounce-2 sk-child"></div>
              <div class="sk-bounce-3 sk-child"></div>
          </div>
          <!-- <img class="inline w-24 h-48" src="~/assets/images/bracket-curly-right-light.svg"/> -->
        </div>
      </div>
    </div>
  </div>
  {{ projects }}
  <div class="bg-white py-24 md:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
      <div class="max-w-2xl xl:col-span-2">
        <div class="sticky lg:top-20 lg:pt-8">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Projects</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600 inline" id="typed"></p>
        </div>
      </div>
      <ul v-if="projects" role="list" class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
        <li v-for="project in projects" class="flex flex-col gap-10 pt-12 sm:flex-row project">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" :src="project.data.collection_image.url" alt="">
          <div class="max-w-xl flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ project.data.heading }}</h3>
            <p class="text-base leading-7 text-gray-600">Co-Founder / CEO</p>
            <p class="mt-6 text-base leading-7 text-gray-600" id="project1">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
            <ul role="list" class="mt-6 flex gap-x-6">
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <div class="mt-20 sm:mt-24 md:mx-auto lg:mx-0 lg:mt-0 lg:w-screen">
          <div class="">
            <div class="bg-white">
              <div class="absolute -inset-y-px -z-10 ml-10 w-40 skew-x-[-30deg] bg-emerald-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true"></div>
              <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none min-h-275p">
                  <div class="w-full overflow-hidden rounded-xl md:rounded-tr-none md:rounded-bl-none md:rounded-br-none bg-gray-900">
                    <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">readMe.txt</div>
                        <div class="border-r border-gray-600/10 px-4 py-2 cursor-not-allowed">App.vue</div>
                      </div>
                    </div>
                    <div class="px-6 pb-14 pt-6 min-h-200p md:min-h-500p">
                      <div>
                        <p class="text-xl text-white inline" id="typed"></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted, computed, watch } from 'vue' ;
  import Typed from 'typed.js';
  import * as prismic from '@prismicio/client';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import * as prismicH from '@prismicio/helpers';
  const { $richTextSerializer } = useNuxtApp()

  //pull data
  const { client } = usePrismic();
  const { data: doc } = await useAsyncData("index", () =>
    client.getSingle("index")
  );
  const { data: projects} = await useAsyncData("project-pull", () => {
    return client.getAllByType('project_collection')
  })
  
  console.log(projects.value)

  //serialize in memory
  const contentText = prismicH.asHTML(doc.value.data.index_content, null, $richTextSerializer);

  //
  const ioConfiguration = {
    /**
     * This rootMargin creates a horizontal line vertically centered
     * that will help trigger an intersection at that the very point.
     */
    rootMargin: '-50% 0% -50% 0%',

    /**
     * This is the default so you could remove it.
     * I just wanted to leave it here to make it more explicit
     * as this threshold is the only one that works with the above
     * rootMargin
     */
    threshold: 0
  };

  function setUpTypedObserver(selector, content) {
    const viewportObserver = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
          // Run the typed code
          var typed = new Typed("#typed", {
            strings: [`<span class="">${content}</span>`],
            typeSpeed: 30,
            backSpeed: 0,
          });
          // Instruct the IntersectionObserver to stop watching for changes to #typed3, otherwise your typed code will be called more than once
        }
      }, ioConfiguration)
      viewportObserver.observe(document.querySelector(selector))
  }

  //on mounted
  onMounted(() => {
      setUpTypedObserver('#project1', contentText)
      setUpTypedObserver('#project2', "text2")
      setUpTypedObserver('#project3', "text3")
      setUpTypedObserver('#project4', "text4")
  })

</script>
<style lang="css">
  .typed-cursor--blink {
    animation: typedjsBlink 1s infinite !important; 
  }

  .typed-cursor:not(:first-of-type) {
    display: none;
  }

  .typing {
    white-space: pre;
    display: inline;
  }

  .typed-cursor {
    display: inline;
    color:cadetblue;
    position: relative;
    bottom: -2px;
    font-size: 2rem;
  }

  .mouse-cursor-gradient-tracking {
  position: relative;
  background: #7983ff;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  overflow: hidden;
}

.mouse-cursor-gradient-tracking span {
  position: relative;
}

.mouse-cursor-gradient-tracking::before {
  --size: 0;
  content: '';
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, pink, transparent);
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease;
}

.mouse-cursor-gradient-tracking:hover::before {
  --size: 200px;
}
</style>