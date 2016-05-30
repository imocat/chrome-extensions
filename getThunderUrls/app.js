(function(){

	$(function(){
		
		// $('<script src="app.css"></script>').appendTo(document.body);
		// $('<script src="bootstrap/css/bootstrap.min.css"></script>').appendTo(document.body);

		setTimeout(function(){
			var urls = [];

			$('a[thunderhref]').each(function(){
				urls.push( $(this).attr('thunderhref') );
			});

			var thunderhrefs = urls.join("\r\n\r\n");
			localStorage['thunderhrefs'] = thunderhrefs;

			console.log( thunderhrefs );

			if (urls.length > 0){
				var dialog = $('<div class="weui_dialog_confirm" style="display: none;" id="dialog1"  ><div class="weui_mask"></div><div class="weui_dialog"><div class="weui_dialog_hd"><strong class="weui_dialog_title">已获取到迅雷下载地址</strong></div><div class="weui_dialog_bd"><textarea class="weui_textarea" rows="5" id="_thunderurls_text" >'+thunderhrefs+'</textarea></div><div class="weui_dialog_ft"><a href="javascript:;" class="weui_btn_dialog primary">关闭</a></div></div></div>');
				dialog.appendTo(document.body);

				$('#_thunderurls_text').click(function(){
					$(this).get(0).select();
				});

				$('#dialog1').show().on('click', '.weui_btn_dialog', function () {
	                $('#dialog1').off('click').hide();
	            });
            }

		}, 1 * 1000);



	});

})();