import faker from "faker";

//True startup location of the products project
const mount = (el) => {
    let products = '';

    for(let i=0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}

/**
 * REFACTOR:
 * 1st Context - Running in dev in isolation
 * Using local index.html file with an element with an id
 * of 'dev-products'
 * We want to render our app into that element
 * 
*/

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // Assuming container does not have an element with with id dev-products
    if(el) {
        // Running in isolation
        mount(el)
    }
}

/** 
 * 2nd Context - Running this file in dev or prod
 * through the Container app
 * No guarantee that an element with our id ('dev-products') exists
 * Don't want to try and immediately render the app
 * 
 * 
 * Container decides when, how, and where it decides to display a sub-application
*/

export { mount };