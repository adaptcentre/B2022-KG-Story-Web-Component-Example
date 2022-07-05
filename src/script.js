import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'b2022-kg-story'
import Stats from 'stats.js'

const stats = new Stats()

document.body.appendChild(stats.dom)

function animate() {

  stats.begin()

  // monitored code goes here

  stats.end()

  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)