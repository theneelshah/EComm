var c = 1   
function changeImg(img){
        if(c == 1){
            var s = "images/" + img + ".jpg"
            $("#mainImg").attr("src", s)
        } else{
            im = parseInt(img)
            im = im + 3
            var s = "images/" + im + ".jpg"
            $("#mainImg").attr("src", s)
        }
}
function toggleSize(size){
    if(size == 0)
        $(".sizeSpan").text("S")
    if(size == 1)
        $(".sizeSpan").text("M")
    if(size == 2)
        $(".sizeSpan").text("L")
    if(size == 3)
        $(".sizeSpan").text("XL")
}
function toggleQty(qty){
    if(qty == 1)
        $(".qtySpan").text("1")
    if(qty == 2)
        $(".qtySpan").text("2")
    if(qty == 3)
        $(".qtySpan").text("3")
    if(qty == 4)
        $(".qtySpan").text("4")
    if(qty == 5)
        $(".qtySpan").text("5")
}
  function toggleColor(color){
      var img = $('.image-container img').attr("src")
      if(img.match('1') || img.match('2') || img.match('3')){
        var imgs = $('.smallImg')
        var tot = 3
        imgs.each(function(){
                tot = tot + 1
                $(this).attr("src", "images/" + tot + ".jpg")
        })
        $('#mainImg').attr("src", "images/4.jpg")
        $(".colorSpan").text("Grey")
        c = 2
      } else if(img.match('4') || img.match('5') || img.match('6')){
        var imgs = $('.smallImg')      
        var tot = 1
        imgs.each(function(){
            $(this).attr("src", "images/" + tot + ".jpg")
            tot ++
        })
        $('#mainImg').attr("src", "images/1.jpg")
        $(".colorSpan").text("Black")
        c = 1
      }
  }

$(document).ready(function () {
    $("#cartButton").click(cart)
    $("#addCart").click(cart)
});

var cart = function(){
    // title
    $('#cartTitle').text($('#prodTitle').text())
    // image
    $('.cartItem img').attr('src', $('#mainImg').attr('src'))
    // color
    $('#cartColor').text($(".colorSpan").text())
    // size
    $('#cartSize').text($(".sizeSpan").text())
    // Qty
    $('#cartQty').text($(".qtySpan").text())
    // Price
     $('#cartPrice').text( $('#money span').text() * $(".qtySpan").text() )
     $('#myModal').modal('show');
}

  $("#money span").text('350')