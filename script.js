document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const text = "Hi, I'm Afnan Yusuf...";
  let index = 0;
  
  function typeText() {
    const typingTextElement = document.getElementById("typing-text");
    if (index < text.length) {
      typingTextElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 100); // Kecepatan ketikan
    } else {
      // Reset untuk animasi ulang
      setTimeout(() => {
        typingTextElement.innerHTML = ""; // Hapus teks
        index = 0; // Reset index
        typeText(); // Mulai ulang
      }, 2000); // Delay sebelum mulai ulang
    }
  }
  
  typeText(); // Mulai animasi saat halaman dimuat
  