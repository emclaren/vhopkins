function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'visible')
  e.style.visibility = 'hidden';
  else
  e.style.visibility = 'visible';
}
function rotate_icon(id) {
  var e = document.getElementById(id);
  e.classList.toggle("fa-rotate-45");
}
