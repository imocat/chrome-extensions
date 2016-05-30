(function() {

	$(function() {

		for (var o in localStorage) {
			console.log(o);
		}

		setInterval(function() {

			$('[data-tuiguang]').each(function() {
				$(this).parent().parent().remove();
			});

			$('div[id]').each(function() {
				if ($(this).attr('id').indexOf('30') !== -1) {
					$(this).remove();
				}
			});

		}, 200);

	});

})();