window.addEventListener('DOMContentLoaded', event => {
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerIcon = document.querySelector('.burger-icon');
  const closeIcon = document.querySelector('.close-icon');
  const menuItems = document.querySelectorAll('.menu-item');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }

  burgerBtn.addEventListener('click', toggleMenu);

  menuItems.forEach(item => item.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('hidden')) {
      toggleMenu();
    }
  }));

  const staff = [
    {
      image: "assets/img/team/natalia.svg",
      name: 'Natalia Schultz',
      role: 'CEO - Founder',
    },
    {
      image: "assets/img/team/luis.svg",
      name: 'Luis Gómez',
      role: 'CTO - Founder',
    },
    {
      image: "assets/img/team/ana.svg",
      name: 'Ana María Duarte',
      role: 'Director de arte',
    },
    {
      image: "assets/img/team/leo.svg",
      name: 'Leopoldo Martin',
      role: 'UX / UI',
    },
    {
      image: "assets/img/team/rico.svg",
      name: 'Luis Rico',
      role: 'Desarrollador',
    },
    {
      image: "assets/img/team/jeison.svg",
      name: 'Jeison Gómez',
      role: 'Desarrollador',
    },
  ];

  const staffIndexInput = document.querySelector('.staff-index');
  const firstStaffImg = document.querySelector('.first-staff-img');
  const secondStaffImg = document.querySelector('.second-staff-img');
  const firstStaffName = document.querySelector('.first-staff-name');
  const secondStaffName = document.querySelector('.second-staff-name');
  const firstStaffRole = document.querySelector('.first-staff-role');
  const secondStaffRole = document.querySelector('.second-staff-role');
  const staffPrev = document.querySelector('.staff-prev');
  const staffNext = document.querySelector('.staff-next');

  const updateStaff = (getNewIndex) => {
    const currentIndex = parseInt(staffIndexInput.value);
    const newIndex = getNewIndex(currentIndex);
    const update = (img, name, role, staffMember) => {
      img.src = staffMember.image;
      name.textContent = staffMember.name;
      role.textContent = staffMember.role;
    };
    staffIndexInput.value = newIndex;
    update(firstStaffImg, firstStaffName, firstStaffRole, staff[newIndex]);
    update(secondStaffImg, secondStaffName, secondStaffRole, staff[newIndex + 1]);
  }
  staffPrev.addEventListener('click', () => updateStaff(index => index - 2 < 0 ? staff.length - 2 : index - 2));
  staffNext.addEventListener('click', () => updateStaff(index => index + 2 >= staff.length ? 0 : index + 2));

  const modal = document.getElementById('modal');
  const modalTitle = document.querySelector('.modal-title');
  const modalMessage = document.querySelector('.modal-message');
  const sendContactFormBtn = document.getElementById('sendBtn');
  const closeModalBtn = document.getElementById('closeModal');

  const showModal = (title, message) => {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.remove('hidden');
  };
  const closeModal = () => modal.classList.add('hidden');

  sendContactFormBtn.addEventListener('click', () => {
    const payload = {
      name: document.getElementById("contactName").value,
      email: document.getElementById("contactEmail").value,
      phone: document.getElementById("contactPhone").value,
      message: document.getElementById("contactMessage").value,
    };
    const isEmpty = (str) => /^\s*$/.test(str);
    if (isEmpty(payload.name) || (isEmpty(payload.email) && isEmpty(payload.phone)) || isEmpty(payload.message)) {
      showModal('Información', 'Debes proporcionar por lo menos tu nombre, algún dato de contacto (email o teléfono) y un mensaje.');
      return;
    }
    fetch('https://6dcqn8jeaf.execute-api.us-east-2.amazonaws.com/prod/contact-us', {
      method: 'POST',
      body: JSON.stringify({
        name: document.getElementById("contactName").value,
        email: document.getElementById("contactEmail").value,
        phone: document.getElementById("contactPhone").value,
        message: document.getElementById("contactMessage").value,
      }),
    }).then(response => {
      if (response.ok) {
        showModal('Información', 'El formulario ha sido enviado con éxito. Pronto nos pondremos en contacto contigo.');
      } else {
        showModal('Error', 'Ha ocurrido un error al enviar el formulario. Por favor intenta de nuevo.');
      }
    }).catch(() => showModal('Error', 'Ha ocurrido un error al enviar el formulario. Por favor intenta de nuevo.'));
  });
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});
