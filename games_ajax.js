var baseUrl = new URL("https://games-world.herokuapp.com/games"); 

    fetch(baseUrl.href, {method:"GET"})
    .then(
        function (response){
            return response.json();
        })
    .then(function(jsonResponse){
        console.log(jsonResponse);
        jsonResponse.forEach(function(element){
           displayGames(element);
        })
    })

    fetch(baseUrl.href + "/5f56540caa9f8d0020a5b401", {method:"GET"})
    .then(
        function (response){
            return response.json();
        }).then(function(jsonResponse){
            console.log(jsonResponse);
            displayGames(games);
        })
        


function displayGames(games){
    var gamesList = document.getElementById("games");
    var items = document.createElement("li");
    var img = document.createElement("IMG")
    img.src = games.imageUrl;
    items.style.padding = "15px"
    items.innerHTML = games.title + " : " + games.description;
    img.innerHTML = games.imageUrl;
    gamesList.appendChild(items);
    gamesList.appendChild(img);
}

