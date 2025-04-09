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

        const isOpen = !infoBox.classList.contains('hidden');

        if (!isOpen) {
            // Openen
            infoBox.classList.remove('hidden');
            behandelingDiv.classList.add('active');
            afspraakBtn.classList.add('active');
            infoContainer.classList.add('active');
            infoBtn.textContent = 'Minder info';
            img.src = 'images/arrow-left.png';
        } else {
            // Sluiten
            infoBox.classList.add('hidden');
            behandelingDiv.classList.remove('active');
            afspraakBtn.classList.remove('active');
            infoContainer.classList.remove('active');
            infoBtn.textContent = 'Meer info';
            img.src = 'images/arrow-right.png';
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
    slider.style.transform = `translateX(-${currentIndex * 110}%)`;

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
    instaSlider.style.transform = `translateX(-${currentInstaIndex * 100}%)`;
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