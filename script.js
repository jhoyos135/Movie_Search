document.querySelector("#find-movie").addEventListener("click", (e) => {

    e.preventDefault();

let getMovie =  () => {

    let movie = document.querySelector("#movie-input");
    let queryURL = `https://www.omdbapi.com/?t=${movie.value}&apikey=trilogy`;
    let movie_view = document.querySelector('#movie-view');

      fetch(queryURL) 

          .then( async (res, err) => {

            let data = await res.json()
            console.log(data)

            if(data.Response == "False") {
                movie_view.innerHTML = `
               <h4 class="center"> Movie Not Found </h4>
               <h4 class="center">  :( </h4>
                `;
            } else {

        let html = `
        <div class="card horizontal large">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${data.Poster}">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${data.Title}<i class="material-icons right">more_vert</i></span>
          <h4 class="card-title grey-text text-darken-4">Plot</h4>
          <p> ${data.Plot} </p>
          <h4 class="card-title grey-text text-darken-4">Imdb Rating</h4>
          <h4> ${data.imdbRating} </h4>
          
        </div>
        <div class="card-reveal">
          <h4 class="card-title grey-text text-darken-4">${data.Title} Info<i class="material-icons right">close</i></h4>
          <ul>
          <li> <span>Actors: </span> ${data.Actors} </li>
          <li> <span>Director: </span> ${data.Director} </li>
          <li> <span>Genre: </span> ${data.Genre} </li>
          <li> <span>Rated: </span> ${data.Rated} </li>
          <li> <span>Runtime: </span> ${data.Runtime} </li>
          <li> <span>Year: </span> ${data.Year} </li>
          </ul>
        </div>
      </div>
          `;

          movie_view.innerHTML = html;
          
        }

          });

          movie.value = ''

          };
          
        getMovie();
      
      });