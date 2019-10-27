var tabLinks = document.querySelectorAll(".tabs-content a");
var tabPanels = document.querySelectorAll(".tabs-panel");

for (let i = 0; i < tabLinks.length; i++) {

	let el = tabLinks[i];

	el.addEventListener("click", function(e){
		e.preventDefault();

		document.querySelector(".tabs-content li.active").classList.remove("active");
		document.querySelector(".tabs-panel.active").classList.remove("active");

		var parentListItemIndex = el.parentElement.getAttribute('data-tab'),
			panelContentIndex = '[data-tab-index="' + parentListItemIndex + '"]';

			el.parentElement.classList.add("active");

			for (let j = 0; j < tabPanels.length; j++) {
				if (tabPanels[j].matches(panelContentIndex)){
					tabPanels[j].classList.add("active");
				}
			}

	});
}

var acc = document.getElementsByClassName("tabs-content active");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


$(document).ready(function() {

    // menu

    $('.menu-btn').on('click', function(e){
        $('.header-nav').toggleClass('open');
    });
});