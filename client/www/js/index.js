// VERSION 2
function startApp() {
  var loader = document.getElementById('loading');
  loader.style.display = 'none';
  
  var app = document.getElementById('app');
  app.style.display = 'block';

  var pageList = document.getElementById('showdata');

  
  var btnPostHebergement = document.getElementById('send-hebergement');
  btnPostHebergement.addEventListener('click', () => {
    $.post( "http://localhost:3000/postHebergement", { name: "Pullman Hotel", gps: "43.608459, 1.453535", description: "Lorem ipsoume" })
    .done( hebergement => {
      console.log( "request success", hebergement );
      pageList.style.display = 'block';
    })
    .fail(function(e) {
      console.error(e);
      alert( "error" );
    });
  });
  
}


var pageList = document.getElementById('showdata');

  var btnPostInteret = document.getElementById('send-interet');
  btnPostInteret.addEventListener('click', () => {
    $.post( "http://localhost:3000/postInteret", { name: "Mairie de Toulouse", gps: "43.604310, 1.443827", description: "Lorem ipsoume" })
    .done( interet => {
      console.log( "request success", interet );
      pageList.style.display = 'block';
    })
    .fail(function(e) {
      console.error(e);
      alert( "error" );
    });
  });
  

  var btnShowHebergement = document.getElementById('see-hebergement');
  btnShowHebergement.addEventListener('click', () => {
    // TODO afficher un loader 
    $.get( "http://localhost:3000/hebergement", function(data) {
      console.log( "request success", data );
      pageList.style.display = 'block';
    })
    .fail(function(e) {
      console.error(e);
      alert( "error" );
    });
  });
  
  var btnShowInteret = document.getElementById('see-interet');
  btnShowInteret.addEventListener('click', () => {
    // TODO afficher un loader 
    $.get( "http://localhost:3000/interet", function(data) {
      console.log( "request success", data );
      pageList.style.display = 'block';
    })
    .fail(function(e) {
      console.error(e);
      alert( "error" );
    });
  });


  

//document.addEventListener('deviceready', startApp, false);

setTimeout(startApp, 1000);