$(document).ready(function () {
console.log("ciao");
$.ajax({
  url: 'get.php',
  method: 'GET',
  success: function (data) {
    console.log(data);
    var source = $("#paganti-template").html();
    var template = Handlebars.compile(source);
    for (var pagante of data) {
      var context = {
        name: pagante.name,
        lastname: pagante.lastname,
        address: pagante.address,
        id: pagante.id
       };
      var html = template(context);
      $('.fisso').append(html);


    }
  },
  error: function (error) {
    console.log(error);
  }
})
$('.fisso').on('click', '.cestino',deleteData);





function deleteData() {
  var id = $(this).parent().data('id');
  $(this).parent().remove();
  $.ajax({
    url: 'remove.php',
    method: 'POST',
    data:{
      id:id
    },
    success: function () {

    },
    error: function (error) {
      console.log(error);
    }
  })



}


})
