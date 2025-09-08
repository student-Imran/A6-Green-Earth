

const categoryTrees = (ctgName) =>{
  
   const url = `https://openapi.programming-hero.com/api/category/${ctgName}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayCategoryTrees(data.plants)
   )
   
}
const displayCategoryTrees = (ctgDetails) =>{
    const removeIt = document.getElementById("all-categories").classList.remove("active");
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    ctgDetails.forEach(ctgDetail => {
         const card = document.createElement("div");
          card.innerHTML = `
          <div class="card bg-white h-[450px] shadow-md">
                        <figure><img src="${ctgDetail.image}" alt=""></figure>
                        <div class="p-4 space-y-3">
                        <h2 onclick = "my_modal_5.showModal()" class="font-bold text-xl cursor-pointer">${ctgDetail.name}</h2>
                        <p>${ctgDetail.description}</p>
                        <div class="flex justify-between">
                            <div class="border-2 border-green-400 rounded-md">
                              <p class="text-green-400 px-2">${ctgDetail.category}</p>
                            </div>
                            <p class=" text-green-700">ট <span class="text-green-700 font-bold text-xl">${ctgDetail.price}</span></p>
                        </div>
                        <button onclick="addPrice('${ctgDetail.name}','${ctgDetail.price}')" class="add-cart bg-green-400 text-black w-full text-center p-3 rounded-3xl cursor-pointer">Add to Cart</button>
                        </div>
                      </div>
          `
          cardContainer.appendChild(card)
        
    })
    
}



const loadCategories = () => {
    const url = `https://openapi.programming-hero.com/api/categories`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displayCategory(data.categories));
}

const displayCategory = (cateGories) =>{
    const cateGory = document.getElementById("category");
    cateGory.innerHTML = "";
    
      cateGories.forEach(ctg => {
        const btn = document.createElement("div");
        btn.innerHTML = `
        <button onclick="categoryTrees('${ctg.id}')" class="w-full mt-3 text-left rounded-md  cursor-pointer hover:bg-green-700 p-4 font-bold">${ctg.category_name}<br></button>
        `
         cateGory.appendChild(btn);
      });
}

loadCategories();
const loadTrees = () => {
    const url = `https://openapi.programming-hero.com/api/plants`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTrees(data.plants)
    )
}
const displayTrees = (trees) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    // console.log(trees);
    
     trees.forEach(tree => {
        // console.log(tree.name);
    
        
          const card = document.createElement("div");
          card.innerHTML = `
          <div class="card bg-white h-[450px] shadow-md">
                        <figure><img src="${tree.image}" alt=""></figure>
                        <div class="p-4 space-y-3">
                        <h2 onclick = "cardDetail('${tree.id}')" class="font-bold text-xl cursor-pointer">${tree.name}</h2>
                        <p>${tree.description}</p>
                        <div class="flex justify-between">
                            <div class="border-2 border-green-400 rounded-md">
                              <p class="text-green-400 px-2">${tree.category}</p>
                            </div>
                            <p class=" text-green-700">ট <span class="text-green-700 font-bold text-xl">${tree.price}</span></p>
                        </div>
                        <button onclick="addPrice('${tree.name}','${tree.price}')"  class="add-cart bg-green-400 text-black w-full text-center p-3 rounded-3xl cursor-pointer">Add to Cart</button>
                        </div>
                      </div>
          `
          cardContainer.appendChild(card)
          
    });
}
loadTrees();

const cardDetail = async (id) =>{
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/plant/${id}`
  const res = await fetch(url)
  const details = await res.json()
  displayCardDetail(details.plants)


  
}
const displayCardDetail  = (response) =>{
    console.log(response);
    const detailsCard = document.getElementById("details-container");
    detailsCard.innerHTML =`
    <div class="model-card text-left p-4 bg-white h-[490px] rounded-lg shadow-md overflow-hidden flex flex-col">
    <h1 class="font-bold text-2xl mb-3">${response.name}</h1>
    
    <figure class="h-[60%] mb-3 overflow-hidden flex items-center justify-center bg-gray-100">
        <img class="object-cover w-full h-full" src="${response.image}" alt="${response.name}">
    </figure>
    
    <div class="flex-1 space-y-3">
        <p class="text-gray-800 text-xl"><span class="font-bold">Category :</span> ${response.category}</p>
        <p class="text-gray-800 text-xl"><span class="font-bold">Price :</span> $${response.price}</p>
        <p class="text-gray-800 text-xl"><span class="font-bold">Description :</span> ${response.description}</p>
    </div>
</div>
    `
    document.getElementById("my_modal_5").showModal();
    
}






const addPrice = (name , price) =>{

   const addHere = document.getElementById("cart-history");
   const card = document.createElement("div");
  //  card.className = "cardOfCart";
    const removeTotal = document.getElementById("total");
   
  //  console.log(addHere.childElementCount);
    let preTotal;
    let amount = price;
    if(removeTotal && addHere.childElementCount>1){
     preTotal = parseInt(document.getElementById("amount").innerText);
      // const Total =  parseInt(document.getElementById("amount").innerText);
      console.log(preTotal);
      console.log(typeof(preTotal));
      removeTotal.remove();
    }
   
   card.innerHTML = `
                 <div class="cardOfCart flex justify-between items-center rounded-xl bg-[#cff0dc] mt-3">
                        <div class="card-left p-3">
                            <h2 class="font-bold">${name}</h2>
                            <p class="text-gray-400 ">ট <span>${price}</span> x 1</p>
                         </div>
                         <div class="card-right pr-3">
                          <button onclick="deleteItem('${price}','${name}')" class=" text-red-800 font-bold">X</button>
                         </div>
                    </div>
              
   `
  addHere.appendChild(card);
  
  
  if(preTotal>0){
   amount = preTotal + parseInt(price);
  }
  
  if (!document.getElementById("total")) {
    const totalDiv = document.createElement("div");
    // totalDiv.id = "total";
    // totalDiv.className = "";
    totalDiv.innerHTML = `
       <div id="total" class="flex justify-between items-center"> 
        <h1 class =" mt-4 font-bold text-xl">Total : </h1>
        <p id="amount" class =" mt-4 font-bold text-xl">${amount}</p>
       </div>
    `
    addHere.appendChild(totalDiv);

  }
 

  
  
}
const deleteItem = (taka , fruitName)=>{
  
  console.log(taka);
  document.querySelectorAll(".cardOfCart").forEach((card)=>{
    const fruitPrice = (parseInt(card.children[0].children[1].children[0].innerText));
    const reqFruitName = card.children[0].children[0].innerHTML;
    
    
    if(fruitPrice===parseInt(taka) && fruitName===reqFruitName){
        card.remove();
       const amountTotal = (document.getElementById("amount"));
       const preTotal = parseInt(amountTotal.innerText)
       const nowTotal = preTotal-fruitPrice;
       console.log(nowTotal);
       if(parseInt(nowTotal)===0){
        console.log("no taka");
         const removeTotal = document.getElementById("total");
         removeTotal.remove();
        
       }
       
       amountTotal.innerText = nowTotal
       
        return;  
    }
    
  })
     
     
  }

