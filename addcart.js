function addCart(id,Q ){
    db.collection('Ecommerce')
   
           .doc(id)
           .get()
           .then((snapshot) => {
                
                   console.log({...snapshot.data(),quantity:Q});
                   var quantity = document.getElementById(Q).value;
                   console.log(quantity);
                   db.collection('cart')
                   .add({...snapshot.data(),quantity:quantity});
              
                   
           }
           
           )
 
   
   }