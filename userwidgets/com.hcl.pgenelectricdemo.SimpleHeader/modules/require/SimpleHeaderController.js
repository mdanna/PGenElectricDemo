define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {},

    initGettersSetters: function() {
      defineGetter(this, 'backForm', () => {
        return this._backForm;
      });
      defineSetter(this, 'backForm', value => {
        this._backForm = value;
      });
    },

    onClickLeft() {
      const backForm = this.backForm || (voltmx.application.getCurrentForm().id === "frmManageVehicles" ? "frmMap" : voltmx.application.getPreviousForm().id);
      new voltmx.mvc.Navigation(backForm).navigate();
    }
  };
});