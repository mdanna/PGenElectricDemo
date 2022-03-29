define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.btnGetStarted.onClick = () => {
          voltmx.store.setItem("callFromRegistration", true);
          new voltmx.mvc.Navigation("frmFindAccount").navigate();
        };
        
        this.view.flxCancelSaveTimeAndMoney.onClick = () => {
          new voltmx.mvc.Navigation("frmLogin").navigate();
        };
        
      };
    }

 });