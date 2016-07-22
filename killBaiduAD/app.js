(function() {

	$(function() {

		setInterval(function() {

			// $('[data-tuiguang]').each(function() {
			// 	$(this).parent().parent().remove();
			// });

			$('div[id]').each(function() {
				// if ($(this).attr('id').indexOf('30') !== -1) {
				// 	$(this).remove();
				// }
			});

			$('.rrecom-btn').each(function(){
				$(this).click();
			});

			$('[data-tuiguang]').parent().parent().remove();

		}, 100);

	});

})();