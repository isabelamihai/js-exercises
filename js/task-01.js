console.log("Number of categories:", document.getElementsByTagName("h2").length);
const categories = document.querySelectorAll(".item");
categories.forEach((category) => {  
  console.log("Category:", category.querySelector("h2").textContent);
  console.log("Elements:", category.querySelectorAll("li").length);
});  