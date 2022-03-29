define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxBack.onClick = () => {
          voltmx.store.removeItem("UserAccount");
          new voltmx.mvc.Navigation("frmFindAccount").navigate();
        };
        
        this.view.btnCreateUser.onClick = () => {
          if(this.view.txtUsername.text === "" || this.view.txtPassword.text === "" || this.view.txtConfirmPassword.text === "") {
            return callAlert("Please enter in all required fields");
          }
          
          if(this.view.txtPassword.text !== this.view.txtConfirmPassword.text) {
            return callAlert("Passwords do not match!");
          }
          
          this.updateUserObject(this.view.txtUsername.text, this.view.txtPassword.text);
          
          new voltmx.mvc.Navigation("frmConfirmAccount").navigate();
        };
        
      };
      
      this.view.preShow = () => {
        this.view.txtUsername.text = "";
        this.view.txtPassword.text = "";
        this.view.txtConfirmPassword.text = "";
      };
    },
  
    updateUserObject: function (username, password) {
      var userAccount = voltmx.store.getItem("UserAccount");
      userAccount.email = username;
      userAccount.password = password;
      voltmx.store.setItem("UserAccount", userAccount);
   }

 });