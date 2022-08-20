console.log("hello world")
showNotes()

let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click",function(e){
    let addTxt = document.getElementById("AddTxt")
    let notes = localStorage.getItem("notes")
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    localStorage.setItem("notes",JSON.stringify(notesObj))
    addTxt.value = ""
    console.log(notesObj)
    showNotes()
})
function showNotes(){
    let notes = localStorage.getItem("notes")
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function(element,index) {
        html+=`
        <div class="my-2 mx-2 noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note </button>
        </div>
      </div> `;
      let elementNotes = document.getElementById("notes")
      if(notesObj.lenght != 0){
        elementNotes.innerHTML = html
      }
      else{
        elementNotes.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`
      }
    });
}

function deleteNotes(index){
    // console.log('I am deleting Notes',index)
    let notes = localStorage.getItem("notes")
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes",JSON.stringify(notesObj))
    showNotes()
}

let search = document.getElementById("searchtxt")
search.addEventListener("input",function(){
    let inputValue = search.value.toLowerCase()
    // console.log("sameer" , inputValue)
    let noteCard = document.getElementsByClassName("noteCard")
    Array.from(noteCard).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText
        if(cardText.includes(inputValue)){
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
        }
    })
})