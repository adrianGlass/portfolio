
<template>
    <header class="bg-white border-bottom border-b-2 sticky top-0 z-10">
        <nav class="px-6 mx-auto flex max-w-6xl items-center justify-between py-3" aria-label="Global">
            <div class="flex items-center gap-x-12">
                <div class="-m-1.5 p-1.5 flex gap-x-4 items-center">
                    <span class="sr-only">Your Company</span>
                    <img
                        src="~/assets/images/selfportrait.png"
                        width="50"
                        height="50"
                        class="rounded-full border-2 border-black"
                    />
                    <div class="text-gray-500">@ Canada</div>
                </div>
                
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="#" class="text-sm font-semibold leading-6 text-emerald-950">Product</a>
                </div>
            </div>
            <div class="flex lg:hidden">
            <button @click="toggleMobileMenu" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-emerald-950">
                <span class="sr-only">Open main menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </button>
            </div>
            <div class="hidden lg:flex">
                <div class="relative pr-1 pt-1" @click="toggleModalTrigger">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    <div class="absolute top-1 right-1 bg-yellow-500 rounded-full w-2 h-2 flex"></div>
                    <div class="absolute top-1 right-1 bg-yellow-500 rounded-full w-2 h-2 flex animate-ping"></div>
                </div>
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="inset-0 z-10"></div>
            <div ref="mobileMenu" class="mobile-menu bg-gray-900 fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <WrapperLink>
                        <img
                            src="~/assets/images/selfportrait.png"
                            width="50"
                            height="50"
                            class="rounded-full border-2 border-black"
                        />
                    </WrapperLink>
                    </a>
                    <div ref="close" @click="toggleMobileMenu" class="-m-2.5 rounded-md p-2.5 text-emerald-950 cursor-pointer">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-emerald-950 hover:opacity-9">Product</a>
                    </div>
                    <div class="py-6">
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-emerald-950 hover:opacity-9">Log in</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <Modal ref="modal"/>
</template>
<script setup>
    import { ref, onMounted } from "vue";
    import { decodeCredential } from 'vue3-google-login'
    
    let modal = ref(null)

    function toggleModalTrigger() {
        modal.value.toggleModal();
    }

    const callback = (response) => {
        const userData = decodeCredential(response.credential)
        console.log("Handle the userData", userData)
    }

    const mobileMenu = ref(null)

    // Occurs after mounting so this is good.
    function toggleMobileMenu(event) {
        mobileMenu.value.classList.toggle('is-open')
        console.log(mobileMenu.value)
    }

    useHead({
        // ref syntax
        script: [
            { 
                src: '//js-na1.hs-scripts.com/43917904.js',
                defer: true,
                async: true,
                body: true,
                id: 'hs-script-loader'
            },
        ],
        })
</script>
<!-- Start of HubSpot Embed Code -->
<!-- End of HubSpot Embed Code -->

<style scoped>
    .mobile-menu {
        transition: all;
        transition-duration:0.5s;
        left:100%;
    }

    .is-open {
        left:0;    
    }

</style>