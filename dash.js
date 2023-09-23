// let menu_icon_box=document.querySelector(".menu_icon_box");
//       let menu=document.querySelector(".menu");

//         menu_icon_box.onclick=function()
//         {
//              menu_icon_box.classList.toggle("active");
//              menu.classList.toggle("active");
//         }

//         document.onclick=function(e){
//           if(!menu_icon_box.side-bar(e.target) && !menu.side-bar(e.target))
//           {
//                 menu_icon_box.classList.remove("active");
//                 menu.classList.remove("active");
//           }
//         }
let menu_icon_box = document.querySelector(".menu_icon_box");
let menu = document.querySelector(".menu");

function toggleMenu() {
    menu_icon_box.classList.toggle("active");
    menu.classList.toggle("active-menu");
}

document.onclick = function (e) {
    if (!menu_icon_box.contains(e.target) && !menu.contains(e.target)) {
        menu_icon_box.classList.remove("active");
        menu.classList.remove("active-menu");
    }
};
