import Book from "../Book.js";
import Data from "../Data.js";
import Home from "./Home.js";

export default class Create{
    constructor(){
        this.container=document.querySelector('.container');
        this.container.innerHTML='';
        this.create();
        this.data=new Data();
        this.title="";
        this.author="";
        this.year="";
       
        this.form=document.querySelector('.first');
        this.form.addEventListener('change',this.handleChange);
        this.form.addEventListener('submit',this.handleSubmit);
        this.book={};

    }
//   createEvent=()=>{
//       let create=document.querySelector('.create');
//     create.addEventListener('click',(e)=>{
//         this.getInformation();
//     })
//     }
    create=()=>{
    
        this.container.innerHTML+=`
        <form class="first">
        <span  class="span_erori">
            <ul class="error">
              <li  class="title">Title is required</li>
              <li class="author">Author is required</li>
              <li  class="year">Year is required</li>
            </ul>
          </span>
    <div class="container-label verifed">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" class="titleInput" >
    
        <label for="author">Author</label>
        <input type="text" id="author" name="author" class="authorInput">
    
        <label for="year">Year</label>
        <input type="number" id="year" name="year" class="yearInput">
    </div>
    
    <section class="buttons">
    <button type="submit" class="create">Create</button> 

    <button>Cancel</button>
    </section>
    
    </form>
  
    
        `
    }
     handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            let data=await this.data.create(this.book);
            if(data!==null){
             let home=new Home();
            }else{
                console.log('eee')
;            }
      
        }catch(error){

           console.log(error);
        }
    }
    handleChange=(e)=>{
        let obj=e.target;
        if(obj.className==='titleInput'){
            this.title=obj.value;
        }else if(obj.className==='authorInput') {
            this.author=obj.value;
        }else if(obj.className==='yearInput'){
            this.year=obj.value;
         
        }
     this.book={

        title:this.title,
        author:this.author,
        year:this.year
     }


    }


  
    }