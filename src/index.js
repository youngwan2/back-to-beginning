import './index.css'

import add from './add.js'

function app() {

    const el = document.createElement('div')

    el.textContent = `5와 3을 더하면? ${add(5, 3)}`

    return el

}

const root = document.getElementById('root')

root.appendChild(app())