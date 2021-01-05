console.log('welcome to the magic notes');
showNotes();
let addBtn=document.getElementById('addbtn')
addBtn.addEventListener('click',function(e){
   
    let notes=localStorage.getItem('notes');
    let addTitle=document.getElementById('addTitle');
    let addText=document.getElementById('addnotes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
     let obj={
         title:addTitle.value,
         description:addText.value
    }
    notesObj.push(obj);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    console.log(localStorage)
    addTitle.value='';
    addText.value=''; 
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html='';
    notesObj.forEach(function(element,index){
        html+=`<div class="noteCard card m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${element.title}</h5>
          <p class="card-text">${element.description}</p>
          <button id="${index}"onclick="deleteNotes(${index})" class="btn btn-primary">Delete Notes</button>
        </div>
      </div>`
    });
    let myCard=document.getElementById('myCard');
    if(notesObj.length!=0)
    {
     myCard.innerHTML=html;
    }
    // else{
    //     myCard.innerHTML=`<h6 style="color:red">Nothing to display, use above section to add</h6>`;
    // }
}

function deleteNotes(index){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    // console.log(index);
    // alert(index);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById('searchTxt');
search.addEventListener('input',function(e){
let txt=search.value;
let noteCardEle=document.getElementsByClassName('noteCard');
Array.from(noteCardEle).forEach(function(element){
    let pTxt=element.getElementsByTagName('p')[0].innerText;
    if(pTxt.includes(txt)){
        element.style.display='block';
    }
    else{
        element.style.display='none'; 
    }
})
console.log(noteCardEle)
})

