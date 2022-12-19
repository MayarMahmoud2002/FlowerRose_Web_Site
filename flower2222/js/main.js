let aboutOffset = $('#About').offset().top; //10
console.log(aboutOffset);

$(window).scroll(function(){
   let wScroll= $(window).scrollTop();
   if( wScroll >= aboutOffset ) {    //>=10
    $('#main-nav').css('backgroundColor','#bd0c0c85')
   }
   else{
    $('#main-nav').css('backgroundColor','#1c030385')

   }
   console.log(wScroll);
})















// var removeItem = document.getElementsByClassName('btn-danger')
// for (var i = 0; i < removeItem.length; i++) {
//     var button = removeItem[i]
//     button.addEventListener('click', function (event) {
//         var buttonClicked = event.target
//         buttonClicked.parentElement.parentElement.remove()
//         update()
//     })
// }
















// var addtocartButtons = document.getElementsByClassName('addtocart')
// for (var i = 0; i < addtocartButtons.length; i++) {
//     var button = addtocartButtons[i]
//     button.addEventListener('click', addTocartClicked)

// }

// function addTocartClicked(event) {
//     var button = event.target
//     var shopitem = button.parentElement.parentElement.parentElement
//     var price = shopitem.getElementsByClassName('pri').innerText
//     var imgscr = shopitem.getElementsByClassName('w-100').innerText
//     console.log(imgscr);
// }













// function update() {
//     var productItemContainer = document.getElementsByClassName('product-item')
//     var cartRow = document.getElementsByClassName('cart-row')
//     for (var i = 0; i < cartRow.length; i++) {

//     }
// }