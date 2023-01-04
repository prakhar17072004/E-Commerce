function getItems(){
    db.collection("Ecommerce").onSnapshot((snapshot)=>{
           let items =[];
           console.log(snapshot.docs[0].data());
           snapshot.docs.forEach((doc)=>(
            items.push({
                id:doc.id,
                ...doc.data()
            })
           ))
           displayItems(items);
    })
}
function displayItems(items){
    let itemsHTML="";
    items.forEach((item,index)=>{

        itemsHTML+=` 
        
        <div class="card1">
            <div class="Item-img">
              <img src = ${item.image}>
            </div>
            <div class="Item-text">
                <h1 class= "name" id="${index}" >${item.name}</h1>
                <p class="price"> Price:$ ${item.price} </p>
               
                <p class="description">${item.description}</p>
            </div>
            <div  ><input id="${index}input" type="number" min="1" value="1"></div>
            <div class="add-cart">
              <button  type="button" onclick = addCart("${item.id}","${index}input") >ADD CART</button>
            </div>
         </div>
        
        
        `
    });
    document.querySelector(".products").innerHTML= itemsHTML;
}
getItems();