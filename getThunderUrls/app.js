(function() {

	$(function() {

		setTimeout(function() {

			var thunderhrefs = '';

			$('a[thunderhref]').each(function() {
				var href = $(this).attr('thunderhref');
				var title = $(this).text();

				thunderhrefs += "#" + title;
				thunderhrefs += "\r\n" + "" + href;
				thunderhrefs += "\r\n\r\n";

			});

			if (thunderhrefs !== '') {
				var dialog = $('<div class="weui_dialog_confirm" style="display: none;" id="dialogHrefs"  ><div class="weui_mask"></div><div class="weui_dialog"><div class="weui_dialog_hd"><strong class="weui_dialog_title">已获取到迅雷下载地址</strong></div><div class="weui_dialog_bd"><textarea class="weui_textarea" rows="10" id="_thunderurls_text" >' + thunderhrefs + '</textarea></div><div class="weui_dialog_ft"><a href="javascript:;" class="weui_btn_dialog primary">关闭</a></div></div></div>');
				dialog.appendTo(document.body);

				$('#_thunderurls_text').click(function() {
					$(this).get(0).select();
				});

				$('#dialogHrefs').show().on('click', '.weui_btn_dialog', function() {
					$('#dialogHrefs').off('click').hide();
				});
			}

		}, 1 * 1000);

	});

})();