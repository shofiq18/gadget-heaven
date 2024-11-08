




export const addToStoredWishList = (product) => {
    const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
    const isAlreadyAdded = wishList.some(item => item.product_id === product.product_id);
    
    if (!isAlreadyAdded) {
        wishList.push(product);
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }
    return isAlreadyAdded;
};

export const isInWishList = (product) => {
    const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
    return wishList.some(item => item.product_id === product.product_id);
};
