const search = () =>{
    const searchbox = document.getElementById("search_item").value.toUpperCase();
    const storeitems = document.getElementById("room_list")
    const product = document.querySelectorAll(".room_indu")
    const pname = storeitems.getElementsByTagName("span")

    for(var i=0; i < pname.length; i++)
    {
        let match = product[i].getElementsByTagName('span')[0];

        if(match){
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display ="";

           }
           else{
            product[i].style.display = "none";
           }
        }
    }
}