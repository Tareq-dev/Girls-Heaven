const data =[
     {
         id: 1,
         image: "./images/bg-b1.jpg",
          title: "Lorem, ipsum dolor sit amet",
          price: 780,
         description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
     },
     {
          id: 2,
          image: "./images/bg-b2.jpg",
           title: "Lorem, ipsum dolor sit amet",
          price: 780,
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },
      {
          id: 3,
          image: "./images/bg-b3.jpg",
           title: "Lorem, ipsum dolor sit amet",
          price: 780,
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },
      {
          id: 4,
          image: "./images/bg-b4.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },
      {
          id: 5,
          image: "./images/bg-b5.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 6,
          image: "./images/bg-b6.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 7,
          image: "./images/bg-b7.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 8,
          image: "./images/bg-b8.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 9,
          image: "./images/bg-b9.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 10,
          image: "./images/bg-b10.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 11,
          image: "./images/bg-b11.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 12,
          image: "./images/bg-b12.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 13,
          image: "./images/bg-b13.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 14,
          image: "./images/bg-b14.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 15,
          image: "./images/bg-b15.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 16,
          image: "./images/bg-b16.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 17,
          image: "./images/bg-b17.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      },{
          id: 18,
          image: "./images/bg-b18.jpg",
          price: 780,
          title: "Lorem, ipsum dolor sit amet",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non ."
      }
 ]

data.forEach(product => {
     const myJwelary = document.getElementById('myJwelary');
     const div = document.createElement('div');
     div.innerHTML=`
     <div class="col">
     <div class="card h-100 shadow">
     <img style="height:250px;" src="${product.image}" class="card-img-top rounded-top " alt="...">
     <div class="card-body">
          <h4 class="text-info">$${product.price}</h4>
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text content">${product.description}</p>
     </div>
     <div class="mx-2 d-flex justify-content-center">
          <div class="d-flex flex-row text-warning mb-2 fs-4">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
         
        </div>
        <div class="d-flex">
         <div class="col-6 mb-3 mx-2">
           <button class="border border-3 border-info buy-card custom-radius fw-bold py-1 px-2">Buy Now</button>
      </div>
      <div class="col-6 mb-3">
       <button class="border border-3 border-warning cart custom-radius fw-bold py-1 px-2 hover-bg-danger">Add to cart</button>
  </div>
        </div>
     </div>
     </div>
     `
     myJwelary.appendChild(div)
})

