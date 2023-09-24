<template>
    <div ref="modal" class="relative jm-modal -z-10 opacity-0" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div>
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M507.3 4.7c6.2 6.2 6.2 16.4 0 22.6L452.7 81.9c-9 9-21.2 14.1-33.9 14.1H304c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V168c0-8.8 7.2-16 16-16s16 7.2 16 16v24H448c35.3 0 64 28.7 64 64c0 24.5-13.7 45.7-33.9 56.5c1.2 5 1.9 10.2 1.9 15.5c0 29.9-20.5 55-48.3 62.1C428.7 422.6 401.3 448 368 448H237.3c-4.2 0-8.3 1.7-11.3 4.7l-54.6 54.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l54.6-54.6c9-9 21.2-14.1 33.9-14.1H368c17.7 0 32-14.3 32-32c0-1.8-.2-3.6-.4-5.4c-.8-4.7 .5-9.5 3.6-13.1s7.6-5.6 12.4-5.6l.4 0c17.7 0 32-14.3 32-32c0-6.1-1.7-11.7-4.6-16.6c-2.7-4.5-3.1-10-.9-14.8s6.5-8.2 11.6-9.2c14.8-2.8 25.9-15.8 25.9-31.4c0-17.7-14.3-32-32-32H336v32c0 35.3-28.7 64-64 64s-64-28.7-64-64V160c0-53 43-96 96-96H418.7c4.2 0 8.3-1.7 11.3-4.7L484.7 4.7c6.2-6.2 16.4-6.2 22.6 0zM125.6 190.3c9.2-24.5 27.6-43.5 50.4-53.8v37.1c-9.1 7.1-16.3 16.7-20.5 27.9l-26.1 69.6c-2.4 6.4-6.2 12.2-11 17.1L27.3 379.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l91.1-91.1c1.6-1.6 2.9-3.6 3.7-5.7l26.1-69.6zm509.8-57.6c6.2 6.2 6.2 16.4 0 22.6L543.6 247c-1.2-12.5-4.7-24.4-10.2-35l79.3-79.3c6.2-6.2 16.4-6.2 22.6 0z"/></svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Payment successful</h3>
                <div class="mt-2">
                <p class="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.</p>
                </div>
            </div>
            </div>
            <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <GoogleLogin :callback="callback" prompt auto-login/>
                <div @click="toggleModal" class="mt-3 inline-flex cursor-pointer w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0">Cancel</div>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
    .jm-modal {
        transition: all;
        transition-duration: 0.5s;
    }
</style>
<script setup>
    import { ref, onMounted } from "vue";
    
    const modal = ref(null)
    
    function toggleModal() {
        modal.value.classList.toggle('opacity-0')
        modal.value.classList.toggle('-z-10')
        modal.value.classList.toggle('z-20')
    }

    defineExpose({
        toggleModal
    })
</script>
