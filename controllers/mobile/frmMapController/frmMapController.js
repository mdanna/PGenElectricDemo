define({ 
  onViewCreated(){
    this.view.init = () => {
      this.view.cmpSimpleHeader.onClickLeft = () => this.openMenu();

      this.view.flxCloseMenu.onClick = () => this.closeMenu();

      this.view.flxGrey.onClick = () => {
        if(this.view.flxPopup.isVisible){
          this.view.flxGrey.isVisible = false;
          this.view.flxPopup.isVisible = false;
        } else {
          this.closeMenu();
        }
      };

      for(let i = 1; i <= 9; i++){
        this.view['img' + i].onTouchEnd = () => {
          new voltmx.mvc.Navigation('frmChargingStation').navigate();
        };
      }

      this.view.lblFind.onTouchEnd = () => this.closeMenu();

      this.view.lblClose.onTouchEnd = () => {
          this.view.flxGrey.isVisible = false;
          this.view.flxPopup.isVisible = false;
      };

      this.view.lblCharge.onTouchEnd = () => {
        if(globals.reservedTime && globals.reservedPort){
          this.view.flxMenu.left = '-90%';
          this.view.flxGrey.isVisible = false;
          new voltmx.mvc.Navigation('frmCharge').navigate();
        } else {
          this.view.flxMenu.left = '-90%';
          this.view.flxPopup.isVisible = true;
          this.view.forceLayout();
        }
      };

      
      this.view.lblManage.onTouchEnd = () => new voltmx.mvc.Navigation('frmManageVehicles').navigate();
      
      this.view.lblLogout.onTouchEnd = () => {
        this.view.flxMenu.left = '-90%';
        this.view.flxGrey.isVisible = false;
        new voltmx.mvc.Navigation('frmLogin').navigate();
      };
    };
  },

  openMenu(){
    const flxGrey = this.view.flxGrey;
    var animationArgs = {        
      duration: 0.5,
      fillMode: kony.anim.FILL_MODE_FORWARDS,
      iterationCount: 1
    };

    this.view.flxMenu.animate(kony.ui.createAnimation({
      100: {
        left: 0
      }
    }), animationArgs, {
      animationStart(){
        flxGrey.isVisible = true;
      },
      animationEnd(){
      }
    });
  },

  closeMenu(){
    const flxGrey = this.view.flxGrey;
    var animationArgs = {        
      duration: 0.5,
      fillMode: kony.anim.FILL_MODE_FORWARDS,
      iterationCount: 1
    };

    this.view.flxMenu.animate(kony.ui.createAnimation({
      100: {
        left: "-90%"
      }
    }), animationArgs, {
      animationStart(){
        flxGrey.isVisible = false;
      },
      animationEnd(){
      }
    });
  }
});