// ----------------------------------------------------------------
// Get the modal 1
var modal1 = document.getElementById("myModal1");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img1.onclick = function () {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal1.style.display = "none";
};
// ---------------------------------------------------------------
// Get the modal 2
var modal2 = document.getElementById("myModal2");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal2.style.display = "none";
};
// ---------------------------------------------------------------
// Get the modal 3
var modal3 = document.getElementById("myModal3");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText = document.getElementById("caption");
img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal3.style.display = "none";
};
// ---------------------------------------------------------------
// Get the modal 4
var modal4 = document.getElementById("myModal4");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText = document.getElementById("caption");
img4.onclick = function () {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal4.style.display = "none";
};
// ---------------------------------------------------------------
// Get the modal 5
var modal5 = document.getElementById("myModal5");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
var captionText = document.getElementById("caption");
img5.onclick = function () {
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close5")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal5.style.display = "none";
};
// ---------------------------------------------------------------
// Get the modal 6
var modal6 = document.getElementById("myModal6");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");
var captionText = document.getElementById("caption");
img6.onclick = function () {
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal6.style.display = "none";
};
// --------------------------------------------------------------------


//--------------------------------------------------------------------
//Добавляем в избранное
const heart = document.querySelector("#heart2");
console.log(heart);

document.getElementById('save').onclick = function() {
  document.getElementById('heart2').classList.toggle('heartRed');
}
document.getElementById('save1').onclick = function() {
  document.getElementById('heart2').classList.toggle('heartRed');
}
//-------------------------------------------------------------------

$('.header__menu_item').click( function() {
  $('.header__menu_item').removeClass("active");
  $(this).toggleClass("active");
});

$('.sale__menu_button').click( function() {
  $('.sale__menu_button').removeClass("sale__menu_buttonActive");
  $(this).toggleClass("sale__menu_buttonActive");
});

$('.buttonSize').click( function() {
  $('.buttonSize').removeClass("button__size_active");
  $(this).toggleClass("button__size_active");
});

// function app() {
//   const buttons = document.querySelectorAll(".button");
//   const cards = document.querySelectorAll(".chair__card");

//   function filter(category, items) {
//     items.forEach((item) => {
//       const isItemFiltered = !item.classList.contains(category);
//       const isShowAll = category.toLowerCase() === "all";
//       if (isItemFiltered && !isShowAll) {
//         item.classList.add("hide");
//       } else {
//         item.classList.remove("hide");
//       }
//     });
//   }

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const currentCategory = button.dataset.filter;
//       filter(currentCategory, cards);
//     });
//   });
// }

// app();

$(function() {
	$('.works-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
	    startPosition: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        1000:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
});


