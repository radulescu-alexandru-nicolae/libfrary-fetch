export default class Data{


    api(path ,method='GET',body=null){
        const url=path;
        const options={
            method,
             headers:{

                'Content-Type': 'application/json; charset=utf-8' ,
             },
        };

        if(body!==null){

            options.body=JSON.stringify(body);

        }


        return fetch(url,options);
    }


    
    async getBooks(){

        try{
         const response= await this.api('http://localhost:8080/api/books',"GET");   
         if(response.status===200){
            return response.json();
         }else{
             return null;
         }
         
        }catch(e){
            return new Error(e);
        }
    
    }


    async create(book){
   
        
        try{

         const response= await this.api('http://localhost:8080/api/books',"POST",book);
         
         
         if(response.status===200){

            return book;

         }else{

             return null;
         }
       

        }catch(e){

            console.log(e);
            throw new Error(e);
        }




    }

    async delete(book){
        try{
            const response= await this.api('http://localhost:8080/api/books',"DELETE",book);
            if(response.status===200){
                return "deleted";
            }else{
                return null;
            }
        }catch(e){
            console.log(e);
            throw new Error(e);
        }
    }
    async update(oldBook,newBook){
        let object={
            oldBook:oldBook,
            newBook:newBook
        }
        try{
          
            const response= await this.api('http://localhost:8080/api/books',"PUT",object);
            if(response.status===200){
                return "updated";
            }else{
                return null;
            }
        }catch(e){
            console.log(e);
            throw new Error(e);
        }
    }


}