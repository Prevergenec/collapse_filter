'use strict';

window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.filter-field-char-multi .values-container > .multi-showmore').forEach(function(i){
		i.addEventListener('click', function(){
		   i.closest('.values-container').classList.toggle('opened'); 
		});
	});

});