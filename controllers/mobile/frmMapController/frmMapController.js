define({ 
  onViewCreated(){
    this.view.init = () => {
      this.view.cmpSimpleHeader.onClickLeft = () => {
        this.openMenu();
      };

      this.view.flxCloseMenu.onClick = () => {
        this.closeMenu();
      };

      this.view.flxGrey.onClick = () => {
        this.closeMenu();
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