let search = document.getElementById('enter');
// let searchBar = document.getElementById('searchBar');

let recipe = document.getElementById('results');



function caffeine() {
// let brain = searchBar.value;
// let head = "http://www.recipepuppy.com/api/?q=";
// let hooch = head + brain;

var input = document.getElementById('searchBar').value
  fetch(
    "http://www.recipepuppy.com/api/?q=" + `${input}`
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);

        return;
      }
      response.json().then(function(data) {
        console.log("test", response.url);
        console.log(data)
        displayInfo(data)
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });

    function displayInfo (data){
      let info = ''
      data.results.map(function(item){
        info +=`
        <div>
        <a href="${item.href}"><img src="${item.thumbnail}"/></a>
        <p>${item.title}</p>
        </div>
        `
        recipe.innerHTML = info
      })
    }

} //End function caffeine

search.addEventListener("click", caffeine)
