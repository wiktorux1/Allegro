function pokazWyniki(){
    let fraza = document.getElementById('searchInput').value
    let kategoria = document.getElementById('categorySelected').options[document.getElementById('categorySelected').selectedIndex].text
    let main = document.querySelector('main')
    main.innerHTML = `<h2>Oto wyniki dla: <em>${fraza}</em> w kategorii <em>${kategoria}</em></h2>`


}


// Poczekaj, aż cała strona się załaduje
document.addEventListener('DOMContentLoaded', function() {
  // Znajdź pierwszy formularz na stronie
  let form = document.querySelector('form');
  if (form) {
    // Dodaj obsługę wysyłania formularza
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Zablokuj domyślne wysłanie (przeładowanie strony)
      pokazWyniki(); // Wywołaj funkcję pokazującą wyniki
    });
  }
});


let mainOriginalContent = '';
document.addEventListener('DOMContentLoaded', function() {
  let main = document.querySelector('main');
  if (main) {
    mainOriginalContent = main.innerHTML;
  }
  let form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      pokazWyniki();
    });
  }
  // Obsługa kliknięcia w logo
  let homeLink = document.getElementById('homeLink');
  if (homeLink) {
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      if (main) {
        main.innerHTML = mainOriginalContent;
      }
    });
  }
});