(function(){

	$(function(){
		
		for(var o in localStorage){
			console.log(o);
		}

		setInterval(function(){

			// if (localStorage['right_ad'] === '1'){
				$('#content_right').html(' 😄 么有广告很舒服吧~ ');
				$('.rrecom-container,.rrecom-btn-moving').remove();
			// }

			// if (localStorage['price_ad'] === '1'){

				$('.leftBlock').remove();
				
				$('[data-tuiguang]').each(function(){
					$(this).parent().parent().remove();
				});

				$('.aside-inner.bottom-promotion').remove();
				

				$('div[id]').each(function(){ 
					if($(this).attr('id').indexOf('30') !== -1) { 
						$(this).remove() 
					}
				});
			// }

		}, 200);

	});

})();