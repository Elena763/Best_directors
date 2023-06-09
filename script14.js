const directors =
[
  {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
  },
  {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
  },
  {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссёр, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
  },
  {
    name: 'Алексей Балабанов',
    career: 'Режиссёр, Сценарист, Актёр, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
  },
  {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссёр, Сценарист, Актёр',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зелёная книга'
  },
  {
    name: 'Юрий Быков',
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
  },
  {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
  },
];

let i = 0;


directors.forEach(function (item) {
  i = i + 1;
  let newLi = document.createElement('li');
  newLi.innerHTML =
    `<li class="list__point" id="point">
      <div class="list__title" id="title">
        <div style="border-bottom: dotted 2px #080808;">
        </div>
        <span class="list__director" id="director`+`${i}`+`"></span>
      </div>
      <div class="list__content" id="content">
          <p class="list__proffession" id="proffession`+`${i}`+`"></p>
          <a  class="list__link" id="link`+`${i}`+`">Фильмография</a>
      </div>
    </li>`;
  list.appendChild(newLi);

  let director = document.getElementById("director" + `${i}`);
  let proffession = document.getElementById("proffession" + `${i}`);
  let link = document.getElementById("link" + `${i}`);

  director.textContent = item.name;
  proffession.textContent = item.career;
  link.setAttribute('href',`${item.films}`);
});

const topFilmsList = directors.map(function(item) {
  elem = ' ' + item.top_rated_film;
  return elem;
});

let film = document.getElementById("film");
film.textContent = topFilmsList;