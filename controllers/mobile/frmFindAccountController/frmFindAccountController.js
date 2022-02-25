define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxBack.onClick = () => {
          new voltmx.mvc.Navigation("frmSaveTimeAndMoney").navigate();
        };
        
        this.view.btnFindAccount.onClick = () => {
          var userObject = {};
          if(this.view.txtAccountNumber.text === "" && (
                      this.view.txtAddress.text === "" || this.view.txtApartmentNumber.text === "" || 
                      this.view.txtCity.text === "" || this.view.txtState.text === "" || this.view.txtZip.text === "")) {
            return callAlert("Please enter in all required fields");
          }
          
          this.generateUserObject();
          new voltmx.mvc.Navigation("frmCreateUser").navigate();
        };
        
      };
    },
  
    generateUserObject: function () {
      var accountId  = "";
      var address = "";
      var aptNum = "";
      var city = "";
      var state = "";
      var zipCode = "";
      
      if(this.view.txtAccountNumber.text){
        accountId = this.view.txtAccountNumber.text;
        address = "49th Street";
        aptNum = "408";
        city = "Portland";
        state = "Oregon";
        zipCode = "97037";
      } else {
        accountId = "9594990892";
        address = this.view.txtAddress.text;
        aptNum = this.view.txtApartmentNumber.text;
        city = this.view.txtCity.text;
        state = this.view.txtState.text;
        zipCode =this.view.txtZip.text;
      }
      
      var userAccount = {
        "email": "",
        "password": "",
        "accountId": accountId,
        "address": address,
        "aptNum": aptNum,
        "city": city,
        "state": state,
        "zipCode": zipCode
      };
      
      voltmx.store.setItem("UserAccount", userAccount);
    }

 });