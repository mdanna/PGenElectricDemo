define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {},
    
    initGettersSetters: function() {},

    onClickLeft() {
		new voltmx.mvc.Navigation(voltmx.application.getPreviousForm().id).navigate();
    }
  };
});