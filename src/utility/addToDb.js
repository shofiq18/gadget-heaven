// cart list

const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.stringify(storedListStr);
        return storedList;
    }else{
        return [];
    }

}


const addToStoredCartList = (product_id) => {
    const storedList = getStoredCartList();
    if(storedList.includes(product_id)){
        console.log(product_id, 'already exists in the list')
    }else{
        storedList.push(product_id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list',  storedListStr);
    }

}

export {addToStoredCartList, getStoredCartList}




