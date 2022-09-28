


function newElement() {

    var valuinp = document.getElementById("input").value
    var mylist = document.getElementById("myUl")
    var h1 = document.createElement("h1")
    var icon = document.createElement("i")

    var div = document.createElement('div')
    div.className = 'second'
    icon.className = "close"
    h1.innerHTML=valuinp
    icon.className = "fa-solid fa-trash-can delete_btn"
    div.append(h1,icon)



    mylist.appendChild(div)


    if(valuinp === "" )
    {

        
        alert('nese yaz')

    }

    var delete_btns = document.querySelectorAll('.delete_btn');

  for(var delete_btn of delete_btns) {
    delete_btn.onclick = function(e) {
      e.target.parentElement.remove();
    }
  }

    
}
