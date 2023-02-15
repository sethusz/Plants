
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);


hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}


const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

const buttons = document.querySelector('.service__buttons');
const btn = document.querySelectorAll(".button--service");
const item = document.querySelectorAll(".service__item");
let arrBtn = [];



buttons.addEventListener("click", (e) => {
	btn.forEach(el => {
		if (el === e.target)
			if (arrBtn.length < 2) el.classList.toggle("button-active") 
			else (el.classList.contains("button-active")) ? el.classList.remove("button-active") : alert("Вы не можете нажать больше 2х кнопок!");
	})
	arrBtn = [];
	btn.forEach(el => {
		if (el.classList.contains("button-active")) arrBtn.push(el.id);
	})
	if (arrBtn.length) {
		item.forEach(i => i.classList.add("blur"));
		arrBtn.forEach(i => {
				document.querySelectorAll("." + i).forEach(j => j.classList.remove("blur"));
			});
	} else {
		item.forEach(i => i.classList.remove("blur"));
	}
})


// Accodrdeon 
const accordionTitles = document.querySelectorAll(".label");
const accordionCards = Array.from(document.querySelectorAll('.prices-option'));


accordionTitles.forEach(accordionTitle => {
  accordionTitle.addEventListener("click", () => {
    if(accordionCards.some(e=>e.classList.contains('active')) && !(accordionTitle.parentElement.classList.contains("active"))) {
      accordionCards.forEach(e => e.classList.remove('active'));
      accordionTitle.parentElement.classList.toggle("active");
    } else {
      accordionTitle.parentElement.classList.toggle("active");
    }
  })
})

// select with a choice of cities
const cities = [
  {
    city: 'Canandaigua, NY',
    phone: '+1	585	393 0001',
    adress: '151 Charlotte Street',
  },
  {
    city: 'New York City',
    phone: '+1	212	456 0002',
    adress: '9 East 91st Street',
  },
  {
    city: 'Yonkers, NY',
    phone: '+1	914	678 0003',
    adress: '511 Warburton Ave',
  },
  {
    city: 'Sherrill, NY',
    phone: '+1	315	908 0004',
    adress: '14 WEST Noyes BLVD',
  },
];

const contactsCity = document.querySelector('.contacts__city');
const cityName = document.querySelector('.city__name');
const cityCreateInfo = document.querySelector('.city__info');
contactsCity.addEventListener('click', (e) => {
  contactsCity.classList.toggle('contacts__city-active');

  if (e.target.matches('.city-name')) cityName.innerHTML = e.target.innerHTML;

  if (contactsCity.classList.contains('contacts__city-active')) {
    cityCreateInfo.innerHTML = '';
  } else {
    for (let city of cities) {
      if (city.city == cityName.innerHTML) {
        renderCityInfo(city);
      }
    }
  }

  if (contacts.maxWidth < 550) { 
    
  }
});

function renderCityInfo(city) {
  let createTable = `
  <div class="city__create-info">
    <table class="city__table">
      <tr>
        <th scope="row">City:</th>
        <td>${city.city}</td>
      </tr>
      <tr>
        <th scope="row">Phone:</th>
        <td>${city.phone}</td>
      </tr>
      <tr>
        <th scope="row">Office adress:</th>
        <td>${city.adress}</td>
      </tr>
    </table>
    <a class="city__call" href="tel:${city.phone.replace(
      /\s/g,
      ''
    )}">Call us</a>
  </div>`;
  cityCreateInfo.innerHTML = createTable;
}

// Modal Window

const modalTrigger = document.querySelectorAll('[data-modal');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close');

function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  // clearInterval(modalTimerId);
}

modalTrigger.forEach(btn => {
  btn.addEventListener('click', openModal);
});


function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});

// const modalTimerId = setTimeout(openModal,5000);

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
}

window.addEventListener('scroll', showModalByScroll);

// Learn more 

const buttonWelcome = document.querySelector('.button--welcome');
const subtitleWelcomeTwo = document.querySelector('.subtitle__welcomeTwo');

buttonWelcome.addEventListener('click', () => {
  buttonWelcome.classList.add('hidden-box');
  subtitleWelcomeTwo.classList.remove('hidden-box');
})





