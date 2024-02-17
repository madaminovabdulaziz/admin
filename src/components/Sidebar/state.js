export const CONTENT_TOP = 35;

export const contentTop =
    `${CONTENT_TOP}px`;

import {
    ref,
    computed
} from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 200
export const SIDEBAR_WIDTH_COLLAPSED = 68
export const sidebarWidth = computed(
    () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)


window.addEventListener("keypress", function (button) {
    if (button.key == "=" || button.key == "+") {
        collapsed.value = !collapsed.value
    }
})

function myFunction(x) {
    if (x.matches) {
        collapsed.value = true;
        // sidebarPadding = 0
        // close_sidebar = () => (collapsed.value = !collapsed.value)
    } else {
        collapsed.value = false;
    }
}

var x = window.matchMedia("(max-width: 800px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changesА