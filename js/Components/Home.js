import Data from "../Data.js";
import Create from "./Create.js";
import Error from "./Error.js";
import Update from "./Update.js";
export default class Home{
constructor(){
   
    this.container=document.querySelector('.container');
    this.data=new Data();
    this.container.innerHTML='';
    this.generateBooks();
    this.createBookEvent();
}
async generateBooks(){
    try{
      
         let d=await this.data.getBooks();
         
         if(d!=null){
            this.insertBooks(d);
            this.titleEvent();
        }
       else{
        this.error=new Error();
       }
      
       
    }catch(e){
        //view erroare 
        console.log(e);
    }
    
}
insertBooks(d){
    let main=document.createElement('main');
    let table=document.createElement('section');
    table.className='table';


    let headerTable=document.createElement('section');
    headerTable.className='header-table-first';
    headerTable.innerHTML=`
    <p>Title</p>
    <p>Author</p>
    <p>Year</p>
    `;
    table.appendChild(headerTable);


    let books=document.createElement('section');
    books.className='books';

    for(let book of d){
        books.innerHTML+=this.createBook(book);
    }
    let button=document.createElement('button');

    button.textContent='Create Book';
    button.className='add';
    main.appendChild(button);
  table.appendChild(books);

 
  main.appendChild(table);
  main.appendChild(button);


  this.container.appendChild(main);
    
}
createBook(element){
    let text=`
    <section class="book">
    <article class="header-table">
    <p>Title</p>
    <p>Author</p>
    <p>Year</p>
    </article>
    <article class="book-information">
    <p class="title">${element.title}</p>
    <p>${element.author}</p>
    <p>${element.year}</p>
</article>
</section>
    `
    return text;
}
createBookEvent=()=>{
   this.container.addEventListener('click',(e)=>{
       if(e.target.className==='add'){
           let create=new Create();
       }
   })
   
}
titleEvent=()=>{
    let table=document.querySelector('.table');

    table.addEventListener('click',(e)=>{
  
        if(e.target.className==='title'){
            let book={
                title:e.target.parentNode.querySelectorAll('p')[0].textContent,
                author:e.target.parentNode.querySelectorAll('p')[1].textContent,
                year:e.target.parentNode.querySelectorAll('p')[2].textContent
            }
            let update=new Update(book);
            


        }
    })

}
}

