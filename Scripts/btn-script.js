
         
         var modal = document.getElementById("myModal");
         
        
         var btn = document.getElementById("myBtn");

         var hirebtn = document.getElementById("hire-btn");
         
       
         var span = document.getElementsByClassName("close")[0];
         
         hirebtn.onclick = function() {
           modal.style.display = "block";
         }
        
         btn.onclick = function() {
           modal.style.display = "block";
         }
         
        
         
         
         span.onclick = function() {
           modal.style.display = "none";
         }
         
         
         window.onclick = function(event) {
           if (event.target == modal) {
             modal.style.display = "none";
           }
         }

         function my_funcHMS()
         {
           location.href = "./Projects/HMS/hms.doc";
         }

         function my_funcSal()
         {
           location.href =" ./Projects/Salary/salary.doc"
         }

   function my_functionFMP()
         {
           location.href = "./Projects/FindMePal/findmepal.doc";
         }

         