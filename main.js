const nav = document.querySelector('nav');
        window.addEventListener("scroll",function(){
          if(document.documentElement.scrollTop > 20){
            nav.classList.add("sticky");
          }
          else{
            nav.classList.remove("sticky");
          }
        })



 

//light mode



// document.addEventListener('DOMContentLoaded', () => {
//   const lightModeStorage = localStorage.getItem('light-mode')
//   const html = document.querySelector('html')
//   const inputLightMode = document.getElementById('input-light-mode')

//   if(lightModeStorage){
//     html.setAttribute("light", "true")
//     inputLightMode.checked = true
    
//     }

//   inputLightMode.addEventListener('change', () => {
//       if(inputLightMode.checked){
//           html.setAttribute("light", "true")
//           localStorage.setItem('light-mode', true)
//       }else{
//           html.removeAttribute("light")
//           localStorage.removeItem('light-mode')
//       }
//  })
// })





