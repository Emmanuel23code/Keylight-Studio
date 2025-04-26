 // Loader spinner functionality
 window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
  }, 2000); // Hide after 2 seconds
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

 
  
  // Form submit handling
  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const form= e.target;
    const formData ={
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };

    fetch("http://localhost:3000/send",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response=> response.text())
    .then(data =>{
      document.getElementById("formMessage").innerHTML = data;
      form.reset;
    })
    .catch(error =>{
      document.getElementById("formMessage").innerHTML =
      "Something went wrong. Please try again.";
    })
  })

  
    
   // Optional: Reveal animations on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.section-center, .image-grid, .team-section, .parallax-content, .contact-info').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
  