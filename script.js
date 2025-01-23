


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário


  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();


  if (name === '' || email === '' || message === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Simulação de envio (substitua por uma requisição AJAX ou integração com backend)
  alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
  document.getElementById('contact-form').reset(); 
});


function toggleMobileMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
}


const mobileMenuButton = document.createElement('button');
mobileMenuButton.innerText = 'Menu';
mobileMenuButton.classList.add('mobile-menu-button');
mobileMenuButton.addEventListener('click', toggleMobileMenu);


document.querySelector('header').appendChild(mobileMenuButton);