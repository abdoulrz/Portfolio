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