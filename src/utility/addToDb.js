// cart list

import { toast } from "react-toastify";





const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if(storedList.includes(id)){
        console.log(id, 'already exists in the list')
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list',  storedListStr);
        toast.success (' This cart is successfully added')
    }

}

export {addToStoredCartList}




export const clearCart = () => {
    localStorage.removeItem("cart-list");
    window.dispatchEvent(new Event("cartListUpdated")); 
};




export const getStoredCartList = () => {
    const storedListStr = localStorage.getItem("cart-list");
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
};


export const removeFromCartList = (productId) => {
    
    const storedCartList = JSON.parse(localStorage.getItem("cart-list")) || [];
    
    
    const updatedCartList = storedCartList.filter(item => item.product_id !== productId);
    
    
    localStorage.setItem("cart-list", JSON.stringify(updatedCartList));
    
    
    window.dispatchEvent(new Event("cartListUpdated"));
};


export const addToCartList = (item) => {
    const storedCartList = getStoredCartList();
    storedCartList.push(item);
    localStorage.setItem("cart-list", JSON.stringify(storedCartList));
    
    
    window.dispatchEvent(new Event("cartListUpdated"));
    
};





