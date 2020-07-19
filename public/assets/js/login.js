 $(document).ready(function(){
        
        $("#memId").hide();


        function loginSettings() {

          var id = $("#logedInId").val();
          var email = $("#logedInEmail");
          $("#user").text(email);

          console.log("Login Data : " + email);

          if ( id != null){
            $("#logIn").hide();
            $("#memId").show();
          } else {
            $("#memId").hide();
            $("#LogIn").show();
          }

        }
          window.onload = loginSettings;          
  });