const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    preloader.style = 'display: none;';
});
// !  ============================== CARDS ==============================
const arr = [
    {
        "id": "card1",
        "img": "https://zazzybabes.com/girls/asa-akira/asa-akira-big-tits-93391.jpg",
        "name": "Asa Akira"
    },
    {
        "id": "card2",
        "img": "https://nypost.com/wp-content/uploads/sites/2/2021/09/model-no-friends-05.jpg?quality=90&strip=all",
        "name": "Moriah Mills"
    },
    {
        "id": "card3",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Madison_Ivy%2C_2017_%28cropped%29.jpg/800px-Madison_Ivy%2C_2017_%28cropped%29.jpg",
        "name": "Madison Ivy"
    },
    {
        "id": "card4",
        "img": "https://m.media-amazon.com/images/M/MV5BNjYyOWMxNGItOTNmMC00ZDc4LWE4NDItY2JmOWFjYTAyZjc0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
        "name": "Dillion Harper"
    },
    {
        "id": "card5",
        "img": "https://upload.wikimedia.org/wikipedia/commons/a/a1/August_Ames_2014.jpg",
        "name": "August Ames"
    },
    {
        "id": "card6",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kiara_Mia_AEE_2013_2.jpg/800px-Kiara_Mia_AEE_2013_2.jpg",
        "name": "Kiara Mia"
    },
    {
        "id": "card7",
        "img": "https://st2.depositphotos.com/1814084/10630/i/950/depositphotos_106307348-stock-photo-alexis-texas-pornographic-actress.jpg",
        "name": "Alexis Texas"
    },
    {
        "id": "card8",
        "img": "https://i.ebayimg.com/images/g/T3kAAOSwYGlhioIz/s-l1600.jpg",
        "name": "Lisa Ann"
    },
    {
        "id": "card9",
        "img": "https://m.media-amazon.com/images/M/MV5BYTdhYWU3OGEtZWZlMS00ZWM2LTliNTEtMDcyNzg0MWU0NDhkXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR100,0,630,1200_AL_.jpg",
        "name": "Abella Danger"
    },
    {
        "id": "card10",
        "img": "https://i.ebayimg.com/images/g/lP8AAOSw2k9cx8rp/s-l1600.jpg",
        "name": "Nicole Aniston"
    },
    {
        "id": "card11",
        "img": "https://i.ebayimg.com/images/g/-4EAAOSwtZphC9cp/s-l1600.jpg",
        "name": "Lena Paul"
    },
    {
        "id": "card12",
        "img": "https://m.media-amazon.com/images/I/71FbKvx-2lL._AC_SL1500_.jpg",
        "name": "Adriana Chechik"
    },
    {
        "id": "card13",
        "img": "https://preview.redd.it/rqbhsto3v2p71.jpg?auto=webp&s=97eb19be8ba19685ca8988e8fcc9c1b06c9c4171",
        "name": "Angela White"
    },
    {
        "id": "card14",
        "img": "https://www.the-sun.com/wp-content/uploads/sites/6/2021/07/NINTCHDBPICT000668323573.jpg",
        "name": "Brandi Love"
    },
    {
        "id": "card15",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjUc6R53pECDJdrLA0OWxayE_6E3-jv8K2Q&usqp=CAU",
        "name": "Mia Malkova"
    },
    {
        "id": "card16",
        "img": "https://i.ebayimg.com/images/g/J6kAAOSwkW5iVvqS/s-l1600.jpg",
        "name": "Riley Reid"
    },
    {
        "id": "card17",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUxntKdQP1NWMTH-_6X8dUmUZRG1YZSi-4g&usqp=CAU",
        "name": "Mia Khalifa"
    },
    {
        "id": "card18",
        "img": "https://i2.wp.com/www.denverpost.com/wp-content/uploads/2018/01/ap18019818704058.jpg?w=620&crop=0%2C0px%2C100%2C9999px&ssl=1",
        "name": "Stormy Daniels"
    },
    {
        "id": "card19",
        "img": "https://i.pinimg.com/originals/25/81/4b/25814b1522f94239ffad73cfc228a06d.jpg",
        "name": "Kimmy Granger"
    },
    {
        "id": "card20",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lana_Rhoades_cropped.jpg/820px-Lana_Rhoades_cropped.jpg",
        "name": "Lana Rhoades"
    }
];

const parent = document.querySelector(".parent");
const newStar = arr.map(({ id, img, name }) => {
    return (`<div class="child ${id}">
   <img class="img" src="${img}" alt="" />
   <p class="name">${name}</p>
 </div>`)
}).join('');

parent.innerHTML = newStar;

// !  ============================== Searcher ==============================

const childs = document.querySelectorAll('.child')


const searcher = document.querySelector('#searcher');
searcher.addEventListener('input', () => {
    childs.forEach(el => {
        if (el.innerText.toLowerCase().includes(searcher.value.trim().toLowerCase())) {
            el.classList.remove('none');
        } else {
            el.classList.add('none');
        }
    });
});

// !  ============================== CIRCLE ==============================

const circle = document.querySelector('.circle');

window.addEventListener('scroll', (e) => {
    if (window.scrollY <= 300) {
        circle.style = 'pointer-events: none; opacity: 0;'
    }
    if (window.scrollY >= 300) {
        circle.style = 'pointer-events: all; opacity: 1;'
    }
});

