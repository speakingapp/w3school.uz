var submenu={
   frontend:[
      {
       title:"HTML",
       badge:"New",
       link:""
      },
      {
       title:"CSS",
       badge:""
      },
      {
       title:"Bootstrap 5",
       badge:""
      },
      {
       title:"Tailwind",
       badge:"Hot"
      },
      {
       title:"Semantic UI",
       badge:"new"
      },
      {
       title:"Onsen UI",
       badge:""
      },
      {
       title:"Materalize CSS",
       badge:""
      },
      {
       title:"UI kit",
       badge:""
      }
   ],
   javascript:[
      {
         title:"Javascript",
         badge:"Hot"
      },
      {
         title:"Jquery",
         badge:""
      },
      {
         title:"React",
         badge:"new"
      },
      {
         title:"JSON",
         badge:""
      },
      {
         title:"Astro Js",
         badge:"Hot"
      }
 
     ],
     backend:[
      {
         title:"PHP",
         badge:"New"
      },
      {
         title:"Python",
         badge:"Hot"
      },
      {
         title:"Node Js",
         badge:"New"
      },
      {
         title:"SQL",
         badge:""
      },
      {
         title:"Django",
         badge:""
      },
      {
         title:"CodeIgniter",
         badge:"Hot"
      },
      {
         title:"Laravel",
         badge:"New"
      }
 
     ]
}
    
    
    

 
function sortSubMenuAlphabetically(submenu) {
   const sortedSubMenu = {};
 
   for (const category in submenu) {
     if (submenu.hasOwnProperty(category)) {
       sortedSubMenu[category] = submenu[category].sort((a, b) =>
         a.title.localeCompare(b.title)
       );
     }
   }
 
   return sortedSubMenu;
 }




 //Frontend menu

 submenu.frontend.forEach(el=>{
  var li = document.createElement("li")
  li.classList.add("text-gray-50", "cursor-pointer", "my-2")

  var spanWrapper=document.createElement("span")
  var spanName=document.createElement("span")
  var spanBadge=document.createElement("span")

  spanName.textContent=el.title
  spanBadge.textContent=el.badge

  spanWrapper.classList.add("hover:bg-gray-200", "rounded-lg", "py-2", "px-5", "text-gray-50", "hover:text-gray-800")

  spanName.classList.add("text-lg")

  spanBadge.classList.add("text-xs", "mx-1", "absolute", "text-white", "rounded", "px-2")

  if(el.badge==="Hot"){
     spanBadge.classList.add("bg-rose-600")
  }
  else{
     spanBadge.classList.add("bg-emerald-500")
  }

  li.appendChild(spanWrapper)
  spanWrapper.appendChild(spanName)
  spanWrapper.appendChild(spanBadge)

  document.getElementById("front-parent").appendChild(li)
 })


//Javascript menu   


submenu.javascript.forEach(el=>{
  var li = document.createElement("li")
  li.classList.add("text-gray-50", "cursor-pointer", "my-2")

  var spanWrapper=document.createElement("span")
  var spanName=document.createElement("span")
  var spanBadge=document.createElement("span")

  spanName.textContent=el.title
  spanBadge.textContent=el.badge

  spanWrapper.classList.add("hover:bg-gray-200", "rounded-lg", "py-2", "px-5", "text-gray-50", "hover:text-gray-800")

  spanName.classList.add("text-lg")

  spanBadge.classList.add("text-xs", "mx-1", "absolute", "text-white", "rounded", "px-2")

  if(el.badge==="Hot"){
     spanBadge.classList.add("bg-rose-600")
  }
  else{
     spanBadge.classList.add("bg-emerald-500")
  }

  li.appendChild(spanWrapper)
  spanWrapper.appendChild(spanName)
  spanWrapper.appendChild(spanBadge)

  document.getElementById("js-parent").appendChild(li)
 })


 //Backend menu


 submenu.backend.forEach(el=>{
  var li = document.createElement("li")
  li.classList.add("text-gray-50", "cursor-pointer", "my-2")

  var spanWrapper=document.createElement("span")
  var spanName=document.createElement("span")
  var spanBadge=document.createElement("span")

  spanName.textContent=el.title
  spanBadge.textContent=el.badge

  spanWrapper.classList.add("hover:bg-gray-200", "rounded-lg", "py-2", "px-5", "text-gray-50", "hover:text-gray-800")

  spanName.classList.add("text-lg")

  spanBadge.classList.add("text-xs", "mx-1", "absolute", "text-white", "rounded", "px-2")

  if(el.badge==="Hot"){
     spanBadge.classList.add("bg-rose-600")
  }
  else{
     spanBadge.classList.add("bg-emerald-500")
  }

  li.appendChild(spanWrapper)
  spanWrapper.appendChild(spanName)
  spanWrapper.appendChild(spanBadge)

  document.getElementById("back-parent").appendChild(li)
 })
