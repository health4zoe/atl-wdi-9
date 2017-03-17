console.log('hey');

$(function() {
  console.log('Everything is ready!');

  $('#addHome').removeClass('btn-danger').addClass('btn-success');
  var $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow</a>');

var $header = $('#header');
  $newLink.insertAfter ($header);

var $body = $('body');

  $newLink.appendTo('body')

  $('#addHome').on('click', function($event) {
    alert($event);
    console.log(this);

    $('#addHome').click(function($event) {
      alert($event);
      console.log(this);

      $('#homes tbody').on('click', 'tr' function ($event) {
        alert('You are about to delete this row.');
        $(this).remove()
      }
      var newHomes = [
          {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
          {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
          {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
          {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
      ];

      newHomes.forEach(function (home) {
        var homeInforRowHtml = "<tr><td>";
        var $homeInfoRowObject = $(homeInforRowHtml);


        alert(homeInforRowHtml);

});





























  // $newLink.appendTo('body');
  //  document.getElementById('addHome').addEventListener("click", function (event) ()

//   $('#addHome').removeClass('btn-danger').addClass('btn-success');
//   $('.jumbotron').addClass('text-center');
//
//
  // $newLink.appendTo('body')
//
//   $('#zillowLink').attr('target', '_blank');
//
  // $('#addHome').click(function($event) {
  //   console.log($event);
  //   console.log(this)
//   })
//
//   var removeHome = function($event) {
//     console.log($event.target)
//     console.log(this)
//     if($($event.target).is('button')) {
//       $(this).fadeOut(1000, function() {
//         $(this).remove()
//       })
//     }
//   }
//
//   $('#homes tbody').on('click', 'tr', removeHome)
//
//   $('#addHome').click(function($event) {
//     var home = newHomes.pop();
//
//     var $homeTr = $(
//       `
//       <tr>
        // <td>$()</td>
//         <td>${home.sf}</td>
//         <td>${home.bedrooms}</td>
//         <td>${home.baths}</td>
//         <td>${home.price}</td>
//         <td><button class="btn btn-xs btn-danger">Remove</button></td>
//       </tr>
//       `
//     );
//
//     $homeTr.appendTo('tbody');
//   })
//
  // var newHomes = [
  //     {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
  //     {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
  //     {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
  //     {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  // ];
// })
