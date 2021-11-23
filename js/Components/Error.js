export default class Error{
    constructor(){
        this.container=document.querySelector('.container');
        this.container.innerHTML='';
        this.insertContainer();
    }

    insertContainer=()=>{
        this.container.innerHTML='ERROR';
    }
}