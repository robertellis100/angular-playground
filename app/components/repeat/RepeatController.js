var app = angular.module('angularPlayground');

app.controller('RepeatController', RepeatController);


function RepeatController(){
  this.repeatStatus = 'Working';
  //The cart is an array of items that we are adding from our view
  this.cart = [];
  //The store is what we are using to populate our page with
  this.store = {
    items: StoreData
  };
  //*** No Need to edit anything above this line ****
  
  this.name = "My BɼokƏn Cart!";
  
  this.getCartCount = function(){
    //return the length of our cart
    return this.cart.length;
  };
  
  /*
  * Write a calculateCartTotal function
  * make it assesible to our view
  * this function should return the total cost
  * of each item that is in our cart
  */ 
  this.calculateCartTotal = function(item, quantity){
    var totalCost;
    // for (var i =0;i<this.cart.length;i++){
    //   totalCost += (this.cart[i].item.price)*(this.cart[i].item.quantity);
    // }
    this.cart.forEach(function(item){
      totalCost += (item.price)*(item.quantity);
    })
    return totalCost;
  }// ---> does this new function work?
  
  
  this.removeItemFromCart = function(item){
    //Item gets passed in from our view when the user clicks the x button
    /*
    * This function should be able to remove the passed in item
    * from our cart. You will have to first identify where the passed
    * in item is in the array. Then you will need to use the correct
    * Array.method to remove 1 item hint method(i, 1);
    */
    
      this.cart.splice(this.cart.indexOf(item),1);
      //^^^^<---Does this new command work in the function?
  };
  
  this.addItemToCart = function(item){
      //item gets passed in to this function from the view
      
      /*
      Our cart demands that items being added to it must have the following properties
      var newItem = {
        name:'',
        color:'',
        size: '',
        quantity: 1,
        price:'',
      }
      console.log the item being passed in from the view 
      to figure out which properties from item need to be 
      remapped to the newItem object. <-- yes I corrected "remaped" to "remapped"
      After building the newItem add it to the cart 
      */
      //console.log(item);
      
      //  <?? How do I get color and size to show up?
      //back on the html
      
      var newItem = {
        name:item.name,
        color:item.selectedColor,
        size: item.selectedSize,
        quantity: 1,
        price:item.price,
        totalCost: function(){
          return this.quanity*this.price;
        }
      }
      ///that doesnt work
      //console.log(item);
      this.cart.push(newItem);
  }
  
}