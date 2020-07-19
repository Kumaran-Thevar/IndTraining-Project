    $(document).ready(function(){

        function memDisplay() {
          $("#memberData").hide();
        }

        $("#memberSubmit").on("click",function(){

            console.log("Member Data Submitted");
            
            $("#memberData").show();
            $("#enterMember").hide();
            $("#adName").text($("#enName").val());
            $("#adCredit").text($("#enCredit").val());
            $("#adAdd").text($("#enAdd").val());
            $("#Uid").name = "5";
            $("#Mid").name = "4";
            $("#Gid").name = "2";

        });

        window.onload = memDisplay;  
        
    });
