document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".klik");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("open");
        hamburger.classList.toggle("open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("open"); // Verberg het menu
            hamburger.classList.remove("open"); // Verberg de hamburger
        });
    });
});

//alles voor diensten knop
function getTranslation(key) {
    const language = document.documentElement.lang;
    const translations = {
        "nl": {
            "more_info": "Meer info",
            "less_info": "Minder info"
        },
        "en": {
            "more_info": "More info",
            "less_info": "Less info"
        },
        "fr": {
            "more_info": "Plus d'infos",
            "less_info": "Moins d'infos"
        },
        "pt": {
            "more_info": "Mais informações",
            "less_info": "Menos informações"
        }
    };
    return translations[language][key];
}

// Verander de taalinstelling wanneer een gebruiker een taal kiest
document.querySelectorAll('.lang-options li').forEach(langOption => {
    langOption.addEventListener('click', function() {
        const lang = langOption.getAttribute('data-lang');
        document.documentElement.lang = lang;  
        updateTextForLanguage();  
    });
});

// Functie om de tekst van de knoppen bij te werken afhankelijk van de geselecteerde taal
function updateTextForLanguage() {
    document.querySelectorAll('.lymfe .info-button').forEach(infoBtn => {
        if (!infoBtn.closest('.lymfe').querySelector('.info-behandeling').classList.contains('hidden')) {
            infoBtn.textContent = getTranslation("less_info");
        } else {
            infoBtn.textContent = getTranslation("more_info");
        }
    });
}
document.querySelectorAll('.lymfe .meer__info').forEach(link  => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const behandelingDiv = link.closest('.lymfe');
        const infoBox = behandelingDiv.querySelector('.info-behandeling');
        const hoofdBehandeling = behandelingDiv.querySelector('.behandeling');
        const afspraakBtn = behandelingDiv.querySelector('.afspraak');
        const infoBtn = behandelingDiv.querySelector('.info-button');;
        const infoContainer = link;
        const img = link.querySelector('img');

        const isOpen = infoBox.classList.contains('hidden');

        if (isOpen) {
            // Openen
            infoBox.classList.remove('hidden');
            behandelingDiv.classList.add('active');
            afspraakBtn.classList.add('active');
            infoContainer.classList.add('active');
            infoBtn.textContent = getTranslation("less_info");
            img.src = 'images/arrow-left.png';

            const currentPosition = behandelingDiv.offsetTop;


            window.scrollTo({
                top: currentPosition, // Scroll naar de top van het blok
                behavior: 'smooth'     // Smooth scroll
            });
        } else {
            // Sluiten
            infoBox.classList.add('hidden');
            behandelingDiv.classList.remove('active');
            afspraakBtn.classList.remove('active');
            infoContainer.classList.remove('active');
            infoBtn.textContent = getTranslation("more_info");
            img.src = 'images/arrow-right.png';

            const currentPosition = behandelingDiv.offsetTop;

            
            window.scrollTo({
                top: currentPosition, // Scroll terug naar de top van het blok
                behavior: 'smooth'     // Smooth scroll
            });
        }
    });
});
//toggle bij diensten
document.querySelectorAll('.info__behandeling__extra__dienst').forEach((dienst, index) => {
    dienst.addEventListener('click', () => {
      const toggle = dienst.nextElementSibling;
      const img = dienst.querySelector('img');

      toggle.classList.toggle('open');

      if (toggle.classList.contains('open')) {
        img.src = 'images/arrow-down.png';
      } else {
        img.src = 'images/arrow-right-info.png';
      }
    });
  });

const tabs = document.querySelectorAll('.tab-btn');
const containers = document.querySelectorAll('.behandeling-container');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault(); 
        tabs.forEach(t => t.classList.remove('active'));
        
        tab.classList.add('active');
        
        const selectedCategory = tab.getAttribute('data-category');
        
        containers.forEach(container => {
            if (selectedCategory === 'alle') {
                container.style.display = 'block';
            } else {
                if (container.getAttribute('data-category') === selectedCategory) {
                    container.style.display = 'block';
                } else {
                    container.style.display = 'none';
                }
            }
        });
    });
});

containers.forEach(container => {
    if (container.getAttribute('data-category') === 'populair') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});
//reviews
let currentIndex = 0;
const reviews = document.querySelectorAll('.review');
const dots = document.querySelectorAll('.dot');
const totalReviews = reviews.length;

function updateSlider() {
    const slider = document.getElementById('slider');
    const moveAmount = window.innerWidth < 768 ? 100 : 110;
    slider.style.transform = `translateX(-${currentIndex * moveAmount}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextReview() {
    currentIndex = (currentIndex + 1) % totalReviews;
    updateSlider();
}

function previousReview() {
    currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
    updateSlider();
}

setInterval(nextReview, 3000);

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateSlider();
    });
});

updateSlider();

let currentInstaIndex = 0;
const posts = document.querySelectorAll('.post');
const totalInstaReviews = posts.length;

function updateInstaSlider() {
    const instaSlider = document.getElementById('insta-slider');
    const moveAmount = window.innerWidth < 768 ? 112 : 100;
    instaSlider.style.transform = `translateX(-${currentInstaIndex * moveAmount}%)`;
}

function nextInstaReview() {
    currentInstaIndex = (currentInstaIndex + 1) % totalInstaReviews;
    updateInstaSlider();
}

function previousReview() {
    currentInstaIndex = (currentInstaIndex - 1 + totalInstaReviews) % totalInstaReviews;
    updateInstaSlider();
}

setInterval(nextInstaReview, 3000);

updateInstaSlider();

      // Taalselectiefunctie toevoegen
  document.querySelectorAll('.lang-options li').forEach(item => {
    item.addEventListener('click', function () {
      const selectedLang = this.getAttribute('data-lang');  // Verkrijg de geselecteerde taal
      const img = this.querySelector('img').src;  // Verkrijg het pad van de geselecteerde vlag

      // Verander de taal met i18next
      i18next.changeLanguage(selectedLang, () => {
        // Zodra de taal veranderd is, vertaal de pagina
        $('body').localize();
      });

      // Update het vlag-icoon in de dropdown
      document.querySelector('#current-lang img').src = img;

      // Sluit de dropdown
      document.getElementById('lang-options').style.display = 'none';
    });
  });

  // Sluit de dropdown als je buiten de taalkeuze klikt
  document.addEventListener('click', function (e) {
    if (!document.querySelector('.language-switcher').contains(e.target)) {
      document.getElementById('lang-options').style.display = 'none';
    }
  });

  // Toggle de dropdown bij het klikken op de geselecteerde taal
  document.getElementById('current-lang').addEventListener('click', function() {
    const langOptions = document.getElementById('lang-options');
    langOptions.style.display = langOptions.style.display === 'block' ? 'none' : 'block';
  });