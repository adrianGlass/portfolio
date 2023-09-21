<script setup></script>

<template>
    <header class="bg-emerald-950 border-bottom border-b-2 sticky top-0 z-10">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
            <div class="flex items-center gap-x-12">
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
            <div class="hidden lg:flex lg:gap-x-12">
                <a href="#" class="text-sm font-semibold leading-6 text-white">Product</a>
            </div>
            </div>
            <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
                <span class="sr-only">Open main menu</span>
                <WrapperLink>
                    <img
                        src="~/assets/images/selfportrait.png"
                        width="24"
                        height="24"
                        class=""
                    />
                </WrapperLink>
            </button>
            </div>
            <div class="hidden lg:flex">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="inset-0 z-10"></div>
            <div class="bg-gray-900 fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-white">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:opacity-9">Product</a>
                    </div>
                    <div class="py-6">
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:opacity-9">Log in</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>