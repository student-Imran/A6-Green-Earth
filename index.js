const categoryTrees = (ctgName) =>{
   const url = `https://openapi.programming-hero.com/api/category/${ctgName}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayCatagoryTrees(data.plants)
   )
   
}
const displayCatagoryTrees = (ctgDetails) =>{
    const removeIt = document.getElementById("all-categories").classList.remove("active");
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    ctgDetails.forEach(ctgDetail => {
         const card = document.createElement("div");
          card.innerHTML = `
          <div class="card bg-white h-[470px]">
                        <figure><img src="${ctgDetail.image}" alt=""></figure>
                        <div class="p-4 space-y-3">
                        <h2 class="font-bold text-xl">${ctgDetail.name}</h2>
                        <p>${ctgDetail.description}</p>
                        <div class="flex justify-between">
                            <div class="border-2 border-green-400 rounded-md">
                              <p class="text-green-400 px-2">${ctgDetail.category}</p>
                            </div>
                            <p class=" text-green-700">ট <span class="text-green-700 font-bold text-xl">${ctgDetail.price}</span></p>
                        </div>
                        <button class="bg-green-400 text-black w-full text-center p-3 rounded-3xl cursor-pointer">Add to Cart</button>
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
          <div class="card bg-white h-[470px]">
                        <figure><img src="${tree.image}" alt=""></figure>
                        <div class="p-4 space-y-3">
                        <h2 class="font-bold text-xl">${tree.name}</h2>
                        <p>${tree.description}</p>
                        <div class="flex justify-between">
                            <div class="border-2 border-green-400 rounded-md">
                              <p class="text-green-400 px-2">${tree.category}</p>
                            </div>
                            <p class=" text-green-700">ট <span class="text-green-700 font-bold text-xl">${tree.price}</span></p>
                        </div>
                        <button class="bg-green-400 text-black w-full text-center p-3 rounded-3xl cursor-pointer">Add to Cart</button>
                        </div>
                      </div>
          `
          cardContainer.appendChild(card)
          
    });
}
loadTrees();
