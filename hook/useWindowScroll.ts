const scrollY = ref(0)
const direction = ref('down')
let lastScrollY = 0;
const onScroll = () => {
    const currentScrollY = window.scrollY;
    scrollY.value = currentScrollY
    if (currentScrollY > lastScrollY) {
        direction.value = 'down'
    } else if (currentScrollY < lastScrollY) {
        direction.value = 'up'
    }
    lastScrollY = window.scrollY
}

export default function useWindowScroll() {
    onMounted(() => {
        onScroll()
        window.addEventListener('scroll', onScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })

    return {
        scrollY,
        direction
    }
}
