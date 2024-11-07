// wishlist 


// const getStoredWishList = () => {
//     const storedListStr = localStorage.getItem('wish-list');
//     if(storedListStr){
//         const storedList = JSON.parse(storedListStr);
//         return storedList;
//     }else{
//         return [];
//     }

// }



// const addToStoredWishList = (id) => {
//     const storedList = getStoredWishList();
//     if(storedList.includes(id)){
//         console.log(id, 'already exists in the list')
//     }else{
//         storedList.push(id);
//         const storedListStr = JSON.stringify(storedList);
//         localStorage.setItem('wish-list',  storedListStr);
//     }

// }

// export {addToStoredWishList}

// cart list

import { toast } from "react-toastify";





const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        console.log(id, 'already exists in the list')
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list',  storedListStr);
        toast.success (' This cart is successfully added')
    }

}

export {addToStoredWishList}



// Function to clear the entire cart list in local storage
export const clearCart = () => {
    localStorage.removeItem("wish-list"); // Remove the cart list from localStorage
    window.dispatchEvent(new Event("wishListUpdated")); // Dispatch event to notify of update
};




export const getStoredWishList = () => {
    const storedListStr = localStorage.getItem("wish-list");
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
};

// Function to remove an item from the cart list in local storage
export const removeFromWishList = (productId) => {
    // Retrieve the current cart list from local storage
    const storedWishList = JSON.parse(localStorage.getItem("wish-list")) || [];
    
    // Filter out the item with the specified product ID
    const updatedWishList = storedWishList.filter(item => item.product_id !== productId);
    
    // Update local storage with the new cart list
    localStorage.setItem("wish-list", JSON.stringify(updatedWishList));
    
    // Dispatch custom event to notify of update
    window.dispatchEvent(new Event("wishListUpdated"));
};

// Optional function to add items to the cart list in local storage
export const addToWishList = (item) => {
    const storedWishList = getStoredWishList();
    storedWishList.push(item);
    localStorage.setItem("wish-list", JSON.stringify(storedWishList));
    
    // Dispatch custom event to notify of update
    window.dispatchEvent(new Event("wishListUpdated"));
    // window.dispatchEvent(new Event("cartListUpdated"));
};





