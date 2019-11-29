import delay from './delay';
import Http from './Http';

const cart = [
  {
    id: "1",
    title: "bangles",
    description: "Diamond Bangles from London Diamond Bangles from London Diamond Bangles from London Diamond Bangles from London Diamond Bangles from London Diamond Bangles from London Diamond Bangles from London Diamond Bangles from London Diamond Bangles from London",
    price: "200",
    stock: "available",
    image: "bangles.jpg",
    category: "diamond",
    count: 1
  },
  {
    id: "3",
    title: "rings",
    description: "Gold Rings from Canada Gold Rings from Canada Gold Rings from Canada Gold Rings from Canada Gold Rings from Canada Gold Rings from Canada Gold Rings from Canada Gold Rings from Canada Gold Rings from Canada Gold Rings from Canada",
    price: "255",
    stock: "available",
    image: "ring.jpg",
    category: "gold",
    count: 1
  },
  {
    id: "6",
    title: "necklace",
    description: "Ruby Necklace from Africa Ruby Necklace from Africa Ruby Necklace from Africa Ruby Necklace from Africa Ruby Necklace from Africa Ruby Necklace from Africa Ruby Necklace from Africa Ruby Necklace from Africa Ruby Necklace from Africa Ruby Necklace from Africa",
    price: "455",
    stock: "available",
    image: "necklace.png",
    category: "ruby",
    count: 3
  }
];

class CartApi {
  static getCartDetails() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], cart));
      }, delay);
    });
  }

  static addToCart(item) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({},item,{count:1}));
        // const newCartItem = Object.assign({},item);
        // resolve(Object.assign(newCartItem,newCartItem.count = 9));
      }, delay);
    });
  }

  static deleteFromCart(item) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(item);
        // const newCartItem = Object.assign({},item);
        // resolve(Object.assign(newCartItem,newCartItem.count = 9));
      }, delay);
    });
  }

  static updateExistingItemInCart(addOrDelete, item) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let count;
        if(addOrDelete == "add") {
          count = item.count+1;
        }
        else {
          count = item.count-1;
        }
        resolve(Object.assign({},item,{count: count}));
        // const newCartItem = Object.assign({},item);
        // resolve(Object.assign(newCartItem,newCartItem.count = 9));
      }, delay);
    });
  }

  static confirmCart(cart) {
    return dispatch => (
      new Promise((resolve, reject) => {
        Http.post('http://localhost:4001/carts', cart)
          .then((res) => {
            console.log(res.data);
            return resolve();
          })
          .catch((err) => {
            console.log(err);
            const error = err.response.data;
            return reject(error);
          });
      })
    );
  }
}

export default CartApi;
