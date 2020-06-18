// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=82a783a6

// batman
// superman
// iron man

document.getElementById('x').style.display = 'none'; //початкова невидимість "очистки" input

document.getElementById('get').addEventListener('click', function () { //клік по кнопці search
    if (document.getElementById('input_text').value) { //якщо введено текст для пошуку
        document.getElementById('x').style.display = 'none';
        document.querySelector('main').innerHTML = '';
        let htt = 'http://www.omdbapi.com/?s=' + document.getElementById('input_text').value + '&apikey=82a783a6';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', htt);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const a = JSON.parse(xhr.responseText);
                for (let i=0; i<a.Search.length; i++){
                    let elem = `<div class="element">
                                    <img class="poster" src=${a.Search[i].Poster}>
                                    <div class="title"><p>${a.Search[i].Title}</p></div>
                                    <div class="type">${a.Search[i].Type}</div>
                                    <div class="year">${a.Search[i].Year}</div>
                                    <div class="details" onclick="detailsClick(event)" data-id="${a.Search[i].imdbID}">More details</div>
                                </div>`;
                    document.querySelector('main').insertAdjacentHTML("beforeend", elem);    
                };           
            };
        };
        xhr.send();
    };
});


function detailsClick(event){
    let htt = 'http://www.omdbapi.com/?i=' + event.target.dataset.id + '&apikey=82a783a6';
    const xhr = new XMLHttpRequest();
        xhr.open('GET', htt);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const a = JSON.parse(xhr.responseText);
                    let elem = `<div class="background_container" onclick="backgroundClick(event)">
                                    <div class="div_container">
                                        <div class="div_container2">
                                            <div class="div_left">
                                                <img class="poster_element" src=${a.Poster ? a.Poster : ''}>
                                            </div>

                                            <div class="div_right">
                                                <div class="title_element"><h1>${a.Title ? a.Title : ''}</h1></div>
                                                <div>${a.Rated ? a.Rated : ''} ${a.Year ? a.Year : ''} ${a.Genre ? a.Genre : ''}</div>
                                                <div>${a.Plot ? a.Plot : ''}</div>
                                                <div><span>Written by: </span>${a.Writer ? a.Writer : ''}</div>
                                                <div><span>Directed by: </span>${a.Director ? a.Director : ''}</div>
                                                <div><span>Starring: </span>${a.Actors ? a.Actors : ''}</div>
                                                <div><span>BoxOffice: </span>${a.BoxOffice ? a.BoxOffice : ''}</div>
                                                <div><span>Awards: </span>${a.Awards ? a.Awards : ''}</div>
                                                <div><span>Ratings: </span>
                                                    <p>${a.Ratings[0] ? a.Ratings[0].Source : ''} ${a.Ratings[0] ? a.Ratings[0].Value : ''}</p>
                                                    <p>${a.Ratings[1] ? a.Ratings[1].Source : ''} ${a.Ratings[1] ? a.Ratings[1].Value : ''}</p>
                                                    <p>${a.Ratings[2] ? a.Ratings[2].Source : ''} ${a.Ratings[2] ? a.Ratings[2].Value : ''}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                    document.querySelector('body').insertAdjacentHTML("afterbegin", elem);
            };
        };
        xhr.send();
};

function backgroundClick(event){
    if (event.target.classList.contains('background_container')) document.querySelector('.background_container').remove();
};



document.querySelector('input').addEventListener('input', function () {
    document.getElementById("x").style.removeProperty('display');
});
document.querySelector('input').addEventListener('focus', function () {
    if (document.querySelector("input").value) document.getElementById("x").style.removeProperty('display');
});


function xClick() { //клік по  Х
    document.getElementById("input_text").value = '';
    document.getElementById('x').style.display = 'none';
};