const getStoredCartFromLocalStorage = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
            return JSON.parse(storedCart);
      }
      return [];
}

const saveCartToLocalStorage = (storedCart) => {
      localStorage.setItem('cart', JSON.stringify(storedCart))
}

const addCartToLocalStorage = (id) => {
      const storedCart = getStoredCartFromLocalStorage();
      storedCart.push(id);

      saveCartToLocalStorage(storedCart)
}

const removeCartFromLocalStorage = (id) => {
      const cartId = getStoredCartFromLocalStorage();

      // remove all matched id
      const filter = cartId?.filter(cartId => cartId !== id);
      saveCartToLocalStorage(filter);
}

export { addCartToLocalStorage, getStoredCartFromLocalStorage, removeCartFromLocalStorage };