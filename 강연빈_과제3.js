const navNames = document.querySelectorAll(".nav_item");

const nav_lst=[];

for (let i=0; i< navNames.length ; i++){
  nav_lst.push(navNames[i].textContent);
}

alert(nav_lst);