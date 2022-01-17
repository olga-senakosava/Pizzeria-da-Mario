


  document.getElementById("burger").onclick = function() {openMenu()};

  function openMenu() {
    document.getElementById("menu-id").classList.toggle("show");
  }


  window.onclick = function(event) {
  if (!event.target.matches('.burger')) {
    let dropdowns = document.getElementsByClassName("menu-div");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
