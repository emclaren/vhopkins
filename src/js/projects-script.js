function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
  e.style.display = 'none';
  else
  e.style.display = 'block';
}
function rotate_icon(id) {
  var e = document.getElementById(id);
  e.classList.toggle("fa-rotate-45");
}
