define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.btnAddVehicle.onClick = () => {
          voltmx.store.setItem("callFromRegistration", false);
          new voltmx.mvc.Navigation("frmAddVehicle").navigate();
        };
        
        this.view.lblClickableText.onTouchEnd = () => {
          voltmx.store.setItem("callFromRegistration", false);
          new voltmx.mvc.Navigation("frmFindAccount").navigate();
        };
        
        this.view.segVehicles.onRowClick = (eventOject, section, row) => {
          voltmx.store.setItem("vehicleSelected", row);
          new voltmx.mvc.Navigation("frmChangeVehicle").navigate();
        };
        
      };
      
      
      this.view.preShow = () => {
        var vehicleList = [];
        var vehicles = voltmx.store.getItem("vehicles");
        
        for(var vehicle in vehicles) {
          var vehicleCount = parseInt(vehicle) + 1;
          vehicleList.push({
            "lblVehicleNum": {
              "text": "Vehicle " + JSON.stringify(vehicleCount)
            },
            "lblLicensePlateTitle" : {
              "text": "License Plate: "
            },
            "lblLicensePlateValue": {
              "text": vehicles[vehicle].LicensePlate
            },
            "lblAddress": {
              "text": vehicles[vehicle].year + " " + vehicles[vehicle].make + " " + vehicles[vehicle].model
            },
            "btnEdit": {
              "text": "Edit Vehicle"
            },
            "lblEditVehicle": {
              "text": "Edit Vehicle"
            }
          });
        }
        var userAccount = voltmx.store.getItem("UserAccount");
        this.view.lblAddVehicleText.text = "The vehicles shown here are actively connected to your PGE account #" + userAccount.accountId + ". If this is incorrect, "
        this.view.segVehicles.setData(vehicleList);
      };
    },

 });