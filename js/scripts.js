/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// // Productos del carrito
// var cartItems = [];

// // Función para validar si ya existe un elemento en una lista
// function isElementInList(list, elementId) {
//     for (var i = 0; i < list.length; i++) {
//       if (list[i].id === elementId) {
//         return true; // El elemento existe en la lista
//       }
//     }
//     return false; // El elemento no existe en la lista
//   }
  

// // Función para agregar un producto al carrito
// function addToCart(itemId, itemName, itemPrice, imgUrl) {
//   var item = {
//     id: itemId,
//     name: itemName,
//     price: itemPrice,
//     imgUrl: imgUrl
//   };
  
//   response = isElementInList(cartItems, itemId)
//   if (!response) {
//     cartItems.push(item);
//     cartAlert(1)
//   }else{
//     cartAlert(2)
//   }
//   updateCart(); // Actualizar la vista del carrito
//   console.log(cartItems)
// }

// // Función para actualizar el carrito
// function updateCart() {
//     var cartElement = document.getElementById('cartList');
//     cartElement.innerHTML = ''; // Limpiar el contenido del carrito
  
//     var total = 0;
  
//     for (var i = 0; i < cartItems.length; i++) {
//       var item = cartItems[i];
  
//       // Crear un elemento de lista para mostrar el producto
//       var listItem = document.createElement('div');
//       listItem.innerHTML = `<div class="mc-sin-pro fix">
//       <p class="text-center">
//       <img class="text-center" style="width: 120px; height: 120px;" src="assets/img/products/`+item.imgUrl+`" alt=""></a>
//       <div class="mc-pro-details fix text-center">
//         `+item.name+' - $'+parseFloat(item.price)+`</p>
//       </div>
//     </div>
//     <div class="dropdown-divider"></div>`;
//       cartElement.appendChild(listItem);
  
//       total += item.price;
//     }
  
//     // Mostrar el total del carrito
//     var totalElement = document.createElement('div');
//     totalElement.innerHTML = `<p class="text-center"><br>`+'Total: $' + total+`</p>`;
//     cartElement.appendChild(totalElement);
//   }
  
// // Función para eliminar un producto del carrito
// function removeFromCart(itemID) {
//     var index = cartItems.findIndex(function(item) {
//       return item.id === itemID;
//     });
  
//     if (index !== -1) {
//       cartItems.splice(index, 1);
//       cartAlert(3)
//       updateCart(); // Actualizar la vista del carrito
//     }
//   }
  
function cartAlert(path){
    if (path == 1) {
        // Obtener la referencia al elemento de la alerta
        var alertElement = document.getElementById('cartAlertSuccess');
        alertElement.style.display = 'block';
        // Ocultar la alerta después de 3 segundos
        setTimeout(function() {
        alertElement.style.display = 'none';
        }, 3000);
    }else {
      // Obtener la referencia al elemento de la alerta
      var alertElement = document.getElementById('cartAlertDanger');
      alertElement.style.display = 'block';
      // Ocultar la alerta después de 3 segundos
      setTimeout(function() {
      alertElement.style.display = 'none';
      }, 3000);
    }
}
