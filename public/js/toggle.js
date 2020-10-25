/**
 *	This js file help you toggle class.
 *	Use data-toggle to set the target elements. The value should be a query string.
 *	Use data-class to set which class to be toggled, default 'is:on'
 */

;(() => {
	var buttons = [...document.querySelectorAll('[data-toggle]')];
	buttons.forEach(i => i.addEventListener('click', function(e){
		var selector = this['dataset']['toggle'];
		var targetClass = this['dataset']['class'] || 'is:on';


		[...document.querySelectorAll(selector)].forEach(i => i.classList.toggle(targetClass));
	}));
})();
