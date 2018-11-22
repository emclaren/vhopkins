
window.onload = function () {
  var e = document.getElementById('nav-projects')
  e.classList.add('selected-nav')
}

function toggle_visibility (id) {
  var e = document.getElementById(id)
  if (e.style.visibility == 'visible') {
    e.style.visibility = 'hidden'
    e.style.opacity = '0'
    e.style.transitionDelay = '.0s'
  } else {
    e.style.visibility = 'visible'
    e.style.opacity = '1'
    e.style.transitionDelay = '.15s'
  }
}

function rotate_icon (id) {
  var e = document.getElementById(id)
  e.classList.toggle('fa-rotate-45')
}

function grow (id) {
  var e = document.getElementById(id)
  if (e.style.transitionDelay == '0s') {
    e.classList.remove('expanded')
    e.style.transitionDelay = '.15s'
  } else {
    e.classList.add('expanded')
    e.style.transitionDelay = '.0s'
  }
}
