import "./index.css"

import { createRoot } from "react-dom/client"


function init() {
    const container = document.createElement('div')
    container.id = 'extension-button'
    document.body.appendChild(container)
    alert("helerlj")

    const root = createRoot(container)
    root.render(<>
        Hello
    </>)
}

// Ensure the DOM is loaded before injecting
if (document.readyState === 'loading') {
    console.log("DOM not loaded yet")
    document.addEventListener('DOMContentLoaded', init)
} else {
    console.log("DOM already loaded")
    init()
}
