//count down 

setInterval(function() {
    const birthDate = new Date("December 9, 2001 10:47:00");
    const now = new Date();
    const diff = Math.abs(now - birthDate);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60))% 60);
    const seconds = Math.floor(diff / 1000) % 60;
    document.getElementById("count").innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
  }, 1000);


  const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the ID of the target section from the link's href attribute
    const targetSectionId = link.getAttribute('href').slice(1);
    console.log(targetSectionId);
    const targetSection = document.getElementById(targetSectionId);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Remove the highlight class from all <h> elements
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach((element) => {
      element.classList.remove('highlight');
    });

    // Highlight the first <h> element in the target section
    const firstHElement = targetSection.querySelector('h1, h2, h3, h4, h5, h6');
    
    //check if target section is home.
    if (targetSectionId === 'home') {
      //target to highlight the home element.
      const  home = document.querySelector('#home');
      home.classList.add('highlight');

      setTimeout(() => {
        home.classList.remove('highlight');
      }, 2000);
    } else{
      //Add the highlight element to this elemnent.
      firstHElement.classList.add('highlight');
    }

    // Remove the highlight class from the previously highlighted element after 2 seconds
    setTimeout(() => {
      firstHElement.classList.remove('highlight') || 0;
    }, 2000);
  });
});