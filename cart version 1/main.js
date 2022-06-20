const myData = [
    {
        name: 'Leica M2',
        price: 1000,
        image:'<a href="https://ibb.co/syLQfkV"><img src="https://i.ibb.co/syLQfkV/leica.jpg" alt="leica" border="0"></a>',
        quantity:1,
        totalPrice:1000
    },
    {
        name: 'Canon P',
        price: 400,
        image:'<a href="https://ibb.co/VtjsKXx"><img src="https://i.ibb.co/VtjsKXx/canon.jpg" alt="canon" border="0"></a>',
        quantity:1,
        totalPrice:400
    },
    {
        name: 'Yashica electro 35cc',
        price: 100,
        image:'<a href="https://ibb.co/8B6xLHJ"><img src="https://i.ibb.co/8B6xLHJ/yashica.jpg" alt="yashica" border="0"></a>',
        quantity:1,
        totalPrice:100
    },
    {
        name: 'Konica Hexar af',
        price: 1000,
        image:'<a href="https://ibb.co/z2QwGvW"><img src="https://i.ibb.co/z2QwGvW/konica.jpg" alt="konica" border="0"></a>',
        quantity:1,
        totalPrice:1000
    }


];

const tableEl = document.getElementById('table');


const generateTabledata = (myData) =>{
    myData.forEach(el => {
        const rowEl = document.createElement('tr');
        const col1El = document.createElement('td');
        const col2El = document.createElement('td');
        const col3El = document.createElement('td');
        const col4El = document.createElement('td');
        const col5El = document.createElement('td');
        col1El.innerHTML = el.image;
        col2El.innerHTML = el.name;
        col3El.innerHTML =el.price;
        col4El.innerHTML = el.quantity;
        col5El.innerHTML = el.totalPrice
        rowEl.appendChild(col1El);
        rowEl.appendChild(col2El);
        rowEl.appendChild(col3El);
        rowEl.appendChild(col4El);
        rowEl.appendChild(col5El);
        tableEl.appendChild(rowEl);
    })

}

generateTabledata(myData)
  // add class to element

console.log(myData);