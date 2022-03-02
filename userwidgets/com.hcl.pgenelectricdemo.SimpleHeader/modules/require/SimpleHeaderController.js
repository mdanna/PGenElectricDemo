define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {},
    
    initGettersSetters: function() {},

    onClickLeft() {
        if(voltmx.application.getCurrentForm().id === "frmManageVehicles") {
          return new voltmx.mvc.Navigation("frmMap").navigate();
        }
		new voltmx.mvc.Navigation(voltmx.application.getPreviousForm().id).navigate();
    }
  };
});