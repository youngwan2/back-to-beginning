import './index.css'

import add from './add.js'

function app() {

    const el = document.createElement('div')
    el.textContent = `5와 3을 더하면? ${add(5, 3)}`

    return el

}

(function (app) {
    const root = document.createElement('div')
    root.setAttribute('id', 'root')
    root.appendChild(app())
    document.body.appendChild(root)
})(app)