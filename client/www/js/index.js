// VERSION 2
function startApp() {
  var loader = document.getElementById('loading');
  loader.style.display = 'none';
  
  var app = document.getElementById('app');
  app.style.display = 'block';

  var pageList = document.getElementById('showdata');

  
  var btnPostHebergement = document.getElementById('send-hebergement');
  btnPostHebergement.addEventListener('click', () => {
    $.post( "http://localhost:3000/postHebergement", { name: "Pullman Hotel", lattitude: "43.608459", longitude: "1.453535", description: "Lorem ipsoume" })
    .done( dataH => {
      console.log( "request success", dataH );
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
    $.post( "http://localhost:3000/postInteret", { name: "Mairie de Toulouse", lattitude: "43.604310", longitude: "1.443827", description: "Lorem ipsoume" })
    .done( dataI => {
      console.log( "request success", dataI );
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