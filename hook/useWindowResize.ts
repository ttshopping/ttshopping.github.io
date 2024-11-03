export default function useWindowResize(callback: () => void) {
    onMounted(() => {
        window.addEventListener('resize', callback)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', callback)
    })
}
