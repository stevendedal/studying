

// counters

// const counters = document.querySelectorAll('.counter');

// counters.forEach((el) => {

//   const valueElement = el.querySelector('.count');

//   const min = Number(el.getAttribute('data-min'));
//   const max = Number(el.getAttribute('data-max'));

//   const minusButtonEl = el.querySelector('button.minus');
//   const plusButtonEl = el.querySelector('button.plus');

//   minusButtonEl.addEventListener('click', () => {
//     const value = Number(valueElement.innerHTML) - 1;

//     if (value >= min) {
//       valueElement.innerHTML = value;
//     }
//   })

//   plusButtonEl.addEventListener('click', () => {
//     const value = Number(valueElement.innerHTML) + 1;

//     if (value <= max) {
//       valueElement.innerHTML = value;
//     }
//   })

// })



const baseTotalPrice = () => {
    const base = document.querySelectorAll('.item');
    let totalCost = 0;
    base.forEach((cartItem) => {
        totalCost += Number(cartItem.querySelector('.cart_price').innerText) * Number(cartItem.querySelector('.count_cart_curent').innerText);
    });
    document.getElementById('total_price').textContent = totalCost;
};
   baseTotalPrice();

const subTotalprice = () =>{
    const Sub = document.querySelectorAll('.item');
    console.log(document.querySelectorAll('.item'));
    let subTotalCost = 0;
    Sub.forEach((element) => {
        subTotalCost += Number(element.querySelector('.cart_price').innerText) * Number(element.querySelector('.count_cart_curent').innerText);
        console.log(Number(element.querySelector('.cart_price').innerText));
        console.log(Number(element.querySelector('.count_cart_curent').innerText));
        document.querySelector('.subtotal').innerText = subTotalCost;
       
}) ;

console.log('subtotal', document.getElementsByClassName('.subtotal').innerText = subTotalCost);

};

const counters = document.querySelectorAll('.cart_count');

counters.forEach((el) => {

    const currentValueElement = el.querySelector('.count_cart_curent');
    const currentValue = Number(currentValueElement.innerHTML);
    const min = Number(el.getAttribute('data-min'));
    const max = Number(el.getAttribute('data-max'));

    const minusButtonEl = el.querySelector('.cart_count_minus');
    const plusButtonEl = el.querySelector('.cart_count_plus');

    minusButtonEl.addEventListener('click', () => {
    const value = Number(currentValueElement.innerHTML) - 1;

    if (value >= min) {
        currentValueElement.innerHTML = value;
        console.log(currentValueElement.innerHTML);
        subTotalprice();
        baseTotalPrice();
        
        
     
    }
    })
    

  plusButtonEl.addEventListener('click', () => {
    const value = Number(currentValueElement.innerHTML) + 1;

    if (value <= max) {
        currentValueElement.innerHTML = value;
        subTotalprice();
        baseTotalPrice();
        
       

    }
  })

})





        



