function getItems() {
	let items = [];
	db.collection('cart').onSnapshot((snapshot) => {
		snapshot.docs.forEach((doc) =>
			items.push({
				id:doc.id,
				...doc.data()
			})
		);
		displayItems(items);
	});
}
function displayItems(items) {
	let itemsHMTL = '';
    //let subTotal=0;
	let totalprice=0;
    let totalItems=0;
     
	 
	 
	items.forEach((item) => {
        //subTotal=Number(item.price)*Number(item.quantity);
        totalprice+=Number(item.price)*Number(item.quantity);
        totalItems = totalItems+1;
        

		itemsHMTL += `
        <table>
        <tr>
        <td>
            <div class="cart-info">
                <img src ="${item.image}" class="cart-img">
                <div>
                    <p>${item.name}</p>
                    <small>$${item.price}</small>
                    <br>
                    <br>
                    <button type="button" class=" cart-remove" onclick = removeItemFromCart("${item.id}") > REMOVE </button>
                </div>
            </div>
        </td>
        <td>${item.quantity}</td>
        <td>
        <div class="subTotal">${item.price} </div>
        </td>
    </tr>
    <table>
        `;
	});
     //document.querySelector('.subTotal').innerHTML=subTotal;
	document.querySelector('.total-price').innerHTML=totalprice;
	document.querySelector('.cart').innerHTML = itemsHMTL;
	
	
}

getItems();




function removeItemFromCart(id){
    db.collection('cart').doc(`${id}`).delete().then(() => {
        
        getItems();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    
    }
        