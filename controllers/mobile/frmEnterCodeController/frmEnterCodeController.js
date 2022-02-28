define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxBack.onClick = () => {
          new voltmx.mvc.Navigation("frmConfirmAccount").navigate();
        };
        
        this.view.btnConfirmCode.onClick = () => {
          if(this.view.txtAuthorisationNumber.text.length !== 6) {
            return callAlert("Please enter your 6-Digit authorization code")
          }
          
          new voltmx.mvc.Navigation("frmAddVehicle").navigate();
        };
        
      };
      
      
      this.view.preShow = () => {
        this.view.txtAuthorisationNumber.text = "";
      };
    },

 });