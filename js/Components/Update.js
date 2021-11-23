import Data from "../Data.js";
import Home from "./Home.js";

export default class Update{
constructor(element){
    this.container=document.querySelector('.container');

    this.container.innerHTML='';
    this.createUpdate();
    this.element=element;
    this.data=new Data();
this.title=document.querySelector('.titleInput');
this.author=document.querySelector('.authorInput');
this.year=document.querySelector('.yearInput');

this.title.value=this.element.title;
this.author.value=this.element.author;
this.year.value=this.element.year;
this.book={ 
    title:this.element.title,
    author:this.element.author,
    year:this.element.year
}
this.oldBook=this.book;
this.form=document.querySelector('.first');

this.form.addEventListener('change',this.handleChange);
this.form.addEventListener('click',this.handleSubmit);



}


createUpdate=()=>{

    this.container.innerHTML+=`
    <form class="first">
    <span  class="span_erori">
        <ul class="error">
          <li  class="title">Title is required</li>
          <li class="author">Author is required</li>
          <li  class="type">Type is required</li>
        </ul>
      </span>
<div class="container-label verifed">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" class="titleInput">

    <label for="author">Author</label>
    <input type="text" id="author" name="author" class="authorInput">

    <label for="year">Year</label>
    <input type="number" id="year" name="year" class="yearInput">
</div>

<section class="buttons">
<button class="delete">Delete Book</button>
<button class="ubdate" type="submit">Update Book</button>
<button class="cancel">Cancel</button>
</section>
</form>



    `
}

// cancelListener=()=>{
//     const first=document.querySelector('.first');
//     first.addEventListener('click',(e)=>{
//         if(e.target.className==='cancel'){
//             let home=new Home();
//         }
//     })
// }
handleSubmitDelete=async(e)=>{
    try{
         this.data.delete(this.book);
         window.location.reload();
    
         let home=new Home();
        
    }catch(error){
        console.log(error);
    }
}
handleSubmitUpdate=async(e)=>{
    e.preventDefault();
    try{
         this.data.update(this.oldBook,this.book);
         window.location.reload();
    let home=new Home();
        
    }catch(error){
        console.log(error);
    }
}
handleSubmit=async(e)=>{
    if(e.target.className==='delete'){
       this.form.addEventListener('submit',this.handleSubmitDelete);
}else if(e.target.className==='ubdate'){
    this.form.addEventListener('submit',this.handleSubmitUpdate);
}
}
handleChange=(e)=>{
    let obj=e.target;
    if(obj.className==='titleInput'){
        this.title.value=obj.value;
    }else if(obj.className==='authorInput') {
        this.author.value=obj.value;
    }else if(obj.className==='yearInput'){
        this.year.value=obj.value;
     
    }
    this.book={

    title:this.title.value,
    author:this.author.value,
    year:this.year.value
 }

}
}