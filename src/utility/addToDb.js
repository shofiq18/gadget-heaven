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
        toast.success('successfully added')
    }

}

export {addToStoredCartList}



export const getStoredCartList = () => {
    const storedListStr = localStorage.getItem("cart-list");
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
};

// Function to remove an item from the cart list in local storage
export const removeFromCartList = (productId) => {
    // Retrieve the current cart list from local storage
    const storedCartList = JSON.parse(localStorage.getItem("cart-list")) || [];
    
    // Filter out the item with the specified product ID
    const updatedCartList = storedCartList.filter(item => item.product_id !== productId);
    
    // Update local storage with the new cart list
    localStorage.setItem("cart-list", JSON.stringify(updatedCartList));
    
    // Dispatch custom event to notify of update
    window.dispatchEvent(new Event("cartListUpdated"));
};

// Optional function to add items to the cart list in local storage
export const addToCartList = (item) => {
    const storedCartList = getStoredCartList();
    storedCartList.push(item);
    localStorage.setItem("cart-list", JSON.stringify(storedCartList));
    
    // Dispatch custom event to notify of update
    window.dispatchEvent(new Event("cartListUpdated"));
    // window.dispatchEvent(new Event("cartListUpdated"));
};





