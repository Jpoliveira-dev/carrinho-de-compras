const productList =
[
    {
        id:1,
        image:"./assets/7c1376abff084025a582cf853c44621a.jpg",
        name: "PS4 Pro",
        description:"Console Ps4 Pro",
        price: "R$1.873,79",
        createdAt:"07/05/2025",
        updatedAt:"07/05/2025"

    }
]

function listProducts() {
        productList.forEach((product)=>{
            console.log(product.name);
            
        });
}
