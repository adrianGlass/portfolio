<template class="mouse-cursor-gradient-tracking">
  
  <div class="bg-gray-900">
    <div class="relative isolate overflow-hidden bg-gradient-to-b max-w-7xl mx-auto overflow-visible">
      <div class="mx-auto pt-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 md:min-h-500p">
        <div class="px-6 lg:px-0 lg:pt-4 flex items-center">
          <div class="mx-auto max-w-6xl mb-4 lg:mb-16 mr-auto ml-0 mt-8">
            <div class="max-w-2xl">
              <h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl code-font">Hi, I'm John Macelheron, <br> a web developer <br></h1>
              <div class="mt-10 flex items-center greeting">
                <span aria-hidden="true" class="text-gray-400 mr-6">→</span>
                <div class="text-sm font-semibold leading-6 typed-greeting code-font text-gray-400" id="typed-greeting"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- <img class="inline w-24 h-48" src="~/assets/images/bracket-curly-light.svg"/>
        <img class="inline w-24 h-48" src="~/assets/images/bracket-curly-right-light.svg"/> -->
        <!-- <div class="smsbox flex items-center w-full justify-center">
          <div class="sk-three-bounce">
              <div class="sk-bounce-1 sk-child"></div>
              <div class="sk-bounce-2 sk-child"></div>
              <div class="sk-bounce-3 sk-child"></div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <div id="faveProjects" class="bg-gray-900 py-24 md:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
      <div class="max-w-2xl xl:col-span-2">
        <div class="sticky lg:top-20 lg:pt-8">
          <h2 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mb-2 code-font">Favourite Projects</h2>
          <div class="text-yellow-500 flex mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L172.1 320.7 121.1 480.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4 417.3 506.9c8.3 6.5 19.8 6.8 28.5 .7s12.3-16.9 9.1-27L403.9 320.7 534.7 218.9c8.1-6.3 11.3-17 8-26.7s-12.4-16.2-22.7-16.2H361.5L310.9 16.7z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L172.1 320.7 121.1 480.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4 417.3 506.9c8.3 6.5 19.8 6.8 28.5 .7s12.3-16.9 9.1-27L403.9 320.7 534.7 218.9c8.1-6.3 11.3-17 8-26.7s-12.4-16.2-22.7-16.2H361.5L310.9 16.7z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L172.1 320.7 121.1 480.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4 417.3 506.9c8.3 6.5 19.8 6.8 28.5 .7s12.3-16.9 9.1-27L403.9 320.7 534.7 218.9c8.1-6.3 11.3-17 8-26.7s-12.4-16.2-22.7-16.2H361.5L310.9 16.7z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L172.1 320.7 121.1 480.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4 417.3 506.9c8.3 6.5 19.8 6.8 28.5 .7s12.3-16.9 9.1-27L403.9 320.7 534.7 218.9c8.1-6.3 11.3-17 8-26.7s-12.4-16.2-22.7-16.2H361.5L310.9 16.7z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L172.1 320.7 121.1 480.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4 417.3 506.9c8.3 6.5 19.8 6.8 28.5 .7s12.3-16.9 9.1-27L403.9 320.7 534.7 218.9c8.1-6.3 11.3-17 8-26.7s-12.4-16.2-22.7-16.2H361.5L310.9 16.7z"/></svg>
          </div>
          <p class="text-2xl leading-12 text-gray-100 inline typed-style" id="typed"></p>
        </div>
      </div>
      <ul v-if="projects" role="list" class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3 project-list">
        <li v-for="(project, index) in projects" :key="index.toString() + project.uid" :data-blurb="prismicH.asHTML(project.data.content)" class="group bg-gray-900 flex flex-col gap-10 pt-12 sm:flex-row project opacity-50 transition-opacity duration-100">
          <NuxtLink :to="determineLink(project, project.uid)" class="group-hover:opacity-100">
            <img :class="`aspect-[5/4] w-72 flex-none rounded-2xl object-contain p-8`" :src="project.data.collection_image.url" alt="">
          </NuxtLink>
          
          <div class="max-w-xl flex-auto mt-4">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-white">{{ project.data.heading }}</h3>
            <ul role="list" class="my-6 items-center flex gap-x-4 gap-y-2 flex-wrap w-60">
              <li v-for="(wrapper, index) in project.data.tags" :key="`tag${index.toString()}`">
                <div class="text-gray-100">
                  <LogoTagger :logoString="wrapper.tag" />
                  <span class="sr-only">{{ wrapper.tag }}</span>
                </div>
              </li>
            </ul>
            <NuxtLink :to="determineLink(project, project.uid)">
              <div :id="`project${index}`"  class="mt-6 text-base leading-7 text-gray-200 hover:text-white hover:border-white border-b border-gray-100 inline cursor-pointer code-font" id="project1">Read More</div>
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div id="aboutMe">
    <div class="mt-20 sm:mt-24 md:mx-auto lg:mx-0 lg:mt-0 lg:w-screen">
      <div class="">
        <div class="bg-gray-900">
          <div class="px-6 lg:px-8 text-white w-full max-w-7xl mx-auto pt-8 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mb-8 code-font">About Me</div>
          <div class="absolute -inset-y-px -z-10 ml-10 w-40 skew-x-[-30deg] bg-emerald-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true"></div>
          <div class="relative px-6 md:pl-16 md:pr-0">
            <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none min-h-275p">
              <div class="w-full overflow-hidden rounded-xl md:rounded-tr-none md:rounded-bl-none md:rounded-br-none bg-gray-950">
                <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                    <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">readMe.txt</div>
                    <div class="border-r border-gray-600/10 px-4 py-2 cursor-not-allowed">App.vue</div>
                  </div>
                </div>
                <div class="px-6 pb-14 pt-6 min-h-200p md:min-h-500p text-white code-font">
                  <div class="divider"></div>
                  <div class="mb-4"><span class="text-blue-500">class</span> <span class="text-emerald-500">John_MacElheron</span> {</div>
                  <div class="about-me flex flex-col">
                    <div class="mb-4">
                        <div><span class="text-blue-600">def</span> <span class="text-emerald-500">__init__</span>(<span class="text-blue-600">self</span>, <span class="text-gray-500">name</span>):</div>
                        <div>
                          <div><span class="text-blue-600">self</span>.<span class="text-gray-500">name</span> = <span class="text-yellow-600">'John MacElheron'</span></div>
                          <div><span class="text-blue-600">self</span>.<span class="text-gray-500">email</span> = <span class="text-yellow-600 border-b border-yellow-600 hover:opacity-80"><a href="mailto:jmacelheron@gmail.com">'jmacelheron@gmail.com'</a></span></div>
                        </div>
                    </div>
                    <div class="mb-4">
                      <div><span class="text-blue-600">def</span> <span class="text-emerald-500">workExperience()</span>:</div>
                        <div>
                          <div><span class="text-emerald-600">return</span> [</div>
                            <div>
                              <div>{ <span class="text-yellow-600">'2023 - Now'</span>  : <span class="text-yellow-600">'QA Engineer @ Theory Digital'</span>},</div>
                              <div>{ <span class="text-yellow-600">'2020 - 2023'</span> : <span class="text-yellow-600">'Web Developer @ Theory Digital'</span>},</div>
                              <div>{ <span class="text-yellow-600">'2018 - 2019'</span> : <span class="text-yellow-600">'.NET Developer @ Northfork Oilfield Services'</span>}</div>
                            </div>
                          <div>]</div>
                        </div>
                    </div>
                    <div class="mb-4">
                      <div><span class="text-blue-600">def</span> <span class="text-emerald-500">education()</span>:</div>
                      <div>
                        <div><span class="text-emerald-600">return</span> [</div>
                          <div>
                            <div>{ <span class="text-yellow-600">'Bachelors of Applied Informatio and Technology (Honors)'</span>  : <span class="text-yellow-600">'Northern Alberta Instititue of Technology'</span>},</div>
                            <div>{ <span class="text-yellow-600">'Diploma of Digital Media and IT, Software (Honors)'</span>  : <span class="text-yellow-600">'Northern Alberta Instititue of Technology'</span>}</div>
                          </div>
                        <div>]</div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <div><span class="text-blue-600">def</span> <span class="text-emerald-500">skills()</span>:</div>
                      <div>
                        <div><span class="text-emerald-600">return</span> [</div>
                          <div>
                            <div><span class="text-yellow-600">'JavaScript'</span>, <span class="text-yellow-600">'Vue'</span>, <span class="text-yellow-600">'Nuxt'</span>, <span class="text-yellow-600">'C#'</span>, <span class="text-yellow-600">'.NET'</span>, <span class="text-yellow-600">'PHP'</span>, <span class="text-yellow-600">'Python'</span>, <span class="text-yellow-600">'MSSQL'</span>, <span class="text-yellow-600">'MYSQL'</span>, <span class="text-yellow-600">'LINQ'</span>, <span class="text-yellow-600">'Tailwind'</span></div>
                            <div><span class="text-yellow-600">'Bootstrap'</span>, <span class="text-yellow-600">'HTML/CSS'</span>, <span class="text-yellow-600">'Liquid'</span>, <span class="text-yellow-600">'Shopify'</span>, <span class="text-yellow-600">'Wordpress'</span>, <span class="text-yellow-600">'Razor'</span>, <span class="text-yellow-600">'GIT'</span>, <span class="text-yellow-600">'Figma'</span>, <span class="text-yellow-600">'Photoshop'</span>,</div>
                            <div><span class="text-yellow-600">'Sketch'</span>, <span class="text-yellow-600">'Slack'</span></div>
                          </div>
                        <div>]</div>
                      </div>
                    </div>
                  </div>
                  <div>}</div>
                </div>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="my-8 max-w-7xl mx-auto px-4 md:px-8">
    <a href="https://github.com/jmacelheron" target=”_blank” class="text-gray-400 hover:text-white transition-color duration-200 inline-flex">
      <div class="text-sm font-semibold leading-6 typed-greeting code-font">View me on GitHub</div>
      <span aria-hidden="true" class="mx-6">→</span>
    </a>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted, computed, watch } from 'vue' ;
  import Typed from 'typed.js';
  import * as prismic from '@prismicio/client';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import * as prismicH from '@prismicio/helpers';
  const { $richTextSerializer } = useNuxtApp()

  let isTyping = false
  //pull data
  const { client } = usePrismic();
  const { data: doc } = await useAsyncData("index", () =>
    client.getSingle("index")
  );
  const { data: projects} = await useAsyncData("project-pull", () => {
    return client.getAllByType('project_collection')
  })
  let activeProject = ref(null)

  watch(activeProject, (newProjectVal, oldProjectVal) => {
    if(newProjectVal) {
      let content = newProjectVal.dataset.blurb
      let projects = document.querySelectorAll('.project-list li')
      newProjectVal.classList.remove('opacity-50')
      projects.forEach((project) => {
        if(project != newProjectVal) {
          project.classList.add('opacity-50')
        }
      })
      runTyped(content)
    }
  })

  function setActiveProject(e) {
    activeProject.value = e.target.closest('li')
  }

  function runTyped(content) {
    let init_state = activeProject.value
    if(!isTyping) {
      new Typed("#typed", {
        strings: [`<span class="">${content}</span>`],
        typeSpeed: 10,
        fadeOut: true,
        onBegin: ()=> {
          isTyping = true
          document.querySelector('.smsdots')?.classList.remove('opacity-0')          
        },
        onComplete: ()=> {
          document.querySelector('.smsdots')?.classList.add('opacity-0')
          isTyping = false
          if(init_state != activeProject.value) {
            //get content of current
            let content = activeProject.value.dataset.blurb
            runTyped(content)
          }
        },
        startDelay: 200,
      });
    }
  }
  
  function determineLink(project, parentUID) {
    return project.data.projects.length == 1 ? `projects/${parentUID}/${project.data.projects[0].project_detail.uid}` : `projects/${parentUID}`
  }

  function setUpTypedObserver(selector) {
    const viewportObserver = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        activeProject.value = document.querySelector(selector).closest('li')
      }
    }, ioConfiguration)
    try {
      viewportObserver.observe(document.querySelector(selector))
    } catch(e) {
      console.log(e)
    }
    
  }

  const ioConfiguration = {
    rootMargin: '-50% 0% -50% 0%',
  };

  const contentText = prismicH.asHTML(doc.value.data.index_content, null, $richTextSerializer);
  //on mounted
  onMounted(() => {
      setUpTypedObserver('#project0')
      setUpTypedObserver('#project1')
      setUpTypedObserver('#project2')
      setUpTypedObserver('#project3')
      new Typed("#typed-greeting", {
        strings: [`<span class="">${contentText}</span>`],
        typeSpeed: 20,
        fadeOut: true,
        onBegin: ()=> {
          document.querySelector('.smsdots')?.classList.remove('opacity-0')          
        },
        onComplete: ()=> {
          document.querySelector('.smsdots')?.classList.add('opacity-0')
        },
      })

      document.querySelectorAll('.project-list > li').forEach((project) => {
        project.querySelector('a').addEventListener("mouseenter", setActiveProject)
      })
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

  .greeting .typed-cursor {
    bottom: 0px;
    font-size: 1rem;
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

.typed-style, .typed-style * {
  display: inline;
}
</style>