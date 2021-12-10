function calculate(){
            var p = 0;
            var i = 0;
            var n = 0;
            var CI = 0;

            p = parseInt(document.getElementById("principal").value);
            i = parseInt(document.getElementById("annual-interest-rate").value);
            n = parseInt(document.getElementById("number-of-period").value);

            CI = ((p*(1+i)^n)-p);
            document.getElementById("res").innerHTML=CI;
          }

          function myFunction() {
         var copyText = document.getElementById("res");
          copyText.select();
          copyText.setSelectionRange(0, 99999)
          document.execCommand("copy");
           alert("Copied the text: " + copyText.value);
}
