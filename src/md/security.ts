registerdData(id){
    this.slectedUser=this.arr.find(el=>{
      return el.id===id
    })
    
      let i,storedemail,storedpassword;
      let add=new Array();
      add=JSON.parse(localStorage.getItem('log'))
     console.log(add)
    //  for (i=0;i<add.length;i++){
    //    storedemail=add[i].email
    //    storedpassword=add[i].password
    //    console.log(add[i].email,add[i].password)
     
    //  }
     
     console.log(storedemail,storedpassword)
    
      let user_reg=JSON.stringify(this.arr)
      let user_records=new Array();
      console.log(user_reg)
      user_records=JSON.parse(user_reg)?JSON.parse(user_reg):[]
      console.log(user_records)
      let email='pooa@gmail.com';
      if( user_records.some((v)=>{return v.email==storedemail && v.password==storedpassword}))
    {
    
    console.log('done')
    }
    
    }