/*function searchFunction(){
    var input, filter, ul, li, a, i;
    input =document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("restaurantTable");
    li = ul.getElementById("spain");
    
    
    for(i=0; i< li.length; i++){
       a = li[i].getElementByTagName("a")[0];
       

      
        if(a.innerHTML.toUpperCase().indexof(filter)>-1){
            li[i].style.display = "";
        }
        else{
           li[i].style.display = 'none';
        }
    }

}

 $(document).ready(function(){
     $('#myinput').keyup(function(){
         search_table($(this).val());

     });
     function search_table(value){
         $('#restaurantTable *').each(function(){
             var found ='false';
             $(this).each(function(){
                 if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0){
                     found ='true';
                 }

             });
             if(found == 'true')
             {
                 $(this).show();
             }
             else
             {
                 $(this).hide();
             }

         });
     }

 });*/
 
 $(document).ready(function(){
    $("#myinput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#restaurantTable ul").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  
  
 
