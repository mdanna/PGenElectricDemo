define(function() {

  const SKN_FLX_SELECTED = 'sknFlxGreen';
  const SKN_FLX_UNSELECTED = 'sknFlxWhiteBorderGreen';
  const SKN_LBL_SELECTED = 'sknRegularWhite110';
  const SKN_LBL_UNSELECTED = 'sknRegularGreen110';

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {},
    
    initGettersSetters: function() {
      defineGetter(this, 'buttonWidth', () => {
        return this._buttonWidth;
      });
      defineSetter(this, 'buttonWidth', value => {
        this._buttonWidth = value;
      });
      defineGetter(this, 'buttons', () => {
        return this._buttons;
      });
      defineSetter(this, 'buttons', value => {
        this._buttons = value;
        this.view.removeAll();
        this.buttons.data.forEach((row, index) => {

          const flxButton = new voltmx.ui.FlexContainer({
            id: 'flxButton' + index,
            width: this.buttonWidth,
            height: '50dp',
            left: index > 0 ? '10dp' : '0dp',
            skin: index > 0 ? SKN_FLX_UNSELECTED : SKN_FLX_SELECTED,
          }, {}, {});

          const lblButton = new voltmx.ui.Label({
            id: 'lblButton' + index,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            skin: index > 0 ? SKN_LBL_UNSELECTED : SKN_LBL_SELECTED,
            contentAlignment: constants.CONTENT_ALIGN_CENTER,
            text: row.value
          }, {contentAlignment: constants.CONTENT_ALIGN_CENTER}, {});

          flxButton.onClick = (flx) => {
            for(let i = 0; i < this.buttons.data.length; i++){
              if('flxButton' + i === flx.id){
                this.view['flxButton' + i].skin = SKN_FLX_SELECTED;
                this.view['lblButton' + i].skin = SKN_LBL_SELECTED;
              } else {
                this.view['flxButton' + i].skin = SKN_FLX_UNSELECTED;
                this.view['lblButton' + i].skin = SKN_LBL_UNSELECTED;
              }
            }
          };

          flxButton.add(lblButton);
          this.view.add(flxButton);
        });

      });
    }
  };
});