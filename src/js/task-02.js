const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


  const ulEl = document.querySelector("#ingredients")
  
  const listEl = ingredients.map(item => {
    const liEl = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
    
  cosnole.log(liEl);  
    
    return ingredients;
  });

ulEl.append(...listEl);
