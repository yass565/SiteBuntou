(function($, Drupal) {
  Drupal.behaviors.cocoonEssentialsFrontend = {
    attach: function(context, settings) {
      $('.ccn-message').each(function() {
        $(this).find('button').click(function() {
          $(this).closest('.ccn-message-container').addClass('ccn-message-dismissed');
        });
      });
      if ($('#layout-builder').length) {
        $('.ccn--lb-tagged').each(function(){
					$(this).remove();
				});
        $('.block-help-block').remove();
        $('.ui-widget.ui-dialog.ui-dialog-off-canvas').css('z-index', '9999');
        $('.block-core.block-local-tasks-block, .layout-builder-form #edit-actions').css({
          'position': 'static',
          'float': 'none',
          'opacity': '1',
          'margin': '20px auto',
          'text-align': 'center',
          'line-height': '2.2',
        });
        $('.block-core.block-local-tasks-block ul.tabs>li a, .layout-builder-form #edit-actions input').css({
          'opacity': '1',
        });
      }
    }
  };
})(jQuery, Drupal);
