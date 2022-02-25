define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxBack.onClick = () => {
          new voltmx.mvc.Navigation("frmCreateUser").navigate();
        };
        
        this.view.btnSendTextCode.onClick = () => {
          new voltmx.mvc.Navigation("frmEnterCode").navigate();
        };
        
      };
      
      this.view.onPreShow = () => {
        var userAccount = voltmx.store.getItem("UserAccount");
        this.view.lblAccountNumberValue.text = userAccount.accountId;
        this.view.lblAddressValue.text = (userAccount.aptNum + " " + userAccount.address).trim();
        this.view.lblCityValue.text = userAccount.city;
        this.view.lblZipCodeValue.text = userAccount.zipCode;
      };
    },

 });