'use client'

export default function LocaleSwitcher(){
    function switchLocale(locale: string) {
        // e.g. '/en/about' or '/fr/contact'
        const newPath = `/${locale}`
        window.history.replaceState(null, '', newPath)
    }

    return (
        <div>
            <button onClick={() => switchLocale('list')}>List</button>
        </div>
    )
}
