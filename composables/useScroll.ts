import { ref, toRefs } from 'vue';
import { useScroll, watchDebounced } from '@vueuse/core';
// { directions } from @vueuse not working

export default function (el) {
    const X = ref(0);
    const Y = ref(0);
    let currentPos = ref(0);
    let top = ref(false);

    const { $useScroll } = useNuxtApp();
    if (typeof $useScroll === "function") {
        const { x, y } = $useScroll();
        watch(x, (value) => {
            X.value = value;
        });
        watch(y, (value) => {
            Y.value = value;
        });
        watchDebounced(y, (value) => {
            // calculate direction
            (currentPos.value > value) ? top.value = true : top.value = false
            // update
            currentPos.value = value;
            },{ debounce: 500, maxWait: 1000 }
        )

        return { scrollX: X, scrollY: Y, goingUp: top };
    }
    // this return when plugin is not ready yet (ssr mode)
    return { scrollX: 0, scrollY: 0, goingUp: false };
}