define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.lblRegisterNow.onTouchEnd = () => {
          new voltmx.mvc.Navigation("frmSaveTimeAndMoney").navigate();
        };
        
        this.view.flxCheckbox.onClick = () => {
          this.view.lblCheck.isVisible = !this.view.lblCheck.isVisible;
        };
        
        this.view.flxBtnLogin.onClick = () => {
          new voltmx.mvc.Navigation("frmMap").navigate();
        };
      };
    }

});