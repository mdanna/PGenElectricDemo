define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxBack.onClick = () => {
          new voltmx.mvc.Navigation("frmAddVehicle").navigate();
        };
        
        this.view.btnDiveIntoApp.onClick = () => {
          voltmx.store.removeItem("newVehicles");
          new voltmx.mvc.Navigation("frmMap").navigate();
        };
        
      };
      
      this.view.onPreShow = () => {
        var newVehicle = voltmx.store.getItem("newVehicles");
        this.view.lblVehicleAdded.text = "We have added your " + newVehicle.year + " " + newVehicle.make + " " + newVehicle.model + " to your account. Now you can charge your vehicle anywhere and never have to worry about various bills. We will consolidate all of your charging bills into your monthly PGE energy bill.";
      };
    },

 });