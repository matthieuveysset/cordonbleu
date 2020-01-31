// VERSION 2
function startApp() {
  var loader = document.getElementById('loading');
  loader.style.display = 'none';
  
  var app = document.getElementById('app');
  app.style.display = 'block';

  var pageList = document.getElementById('showdata');
  var btnShowData = document.getElementById('show-data');
  btnShowData.addEventListener('click', () => {
    // TODO afficher un loader 
    $.get( "http://localhost:3000/getdata", function(data) {
      console.log( "request success", data );
      pageList.style.display = 'block';
    })
    .fail(function(e) {
      console.error(e);
      alert( "error" );
    });
  });

  var btnPostData = document.getElementById('send-data');
  btnPostData.addEventListener('click', () => {
    $.post( "http://localhost:3000/postdata", { date: "16/06/1992" })
    .done( data => {
      console.log( "request success", data );
      pageList.style.display = 'block';
    })
    .fail(function(e) {
      console.error(e);
      alert( "error" );
    });
  });
  
}
//document.addEventListener('deviceready', startApp, false);

setTimeout(startApp, 1000);