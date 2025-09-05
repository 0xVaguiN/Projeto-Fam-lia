document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      let href = this.getAttribute("href");
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location = href;
      }, 120);
    });
  });

  window.addEventListener("pageshow", () => {
    document.body.classList.remove("fade-out");
  });

  // ===== LIGHTBOX =====
document.addEventListener('DOMContentLoaded', function() {

  const thumbs = document.querySelectorAll('.fotos-familias');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  // Abrir lightbox ao clicar na imagem
  thumbs.forEach(thumb => {
      thumb.addEventListener('click', function() {
          lightboxImg.src = this.src;
          lightbox.style.display = 'flex';
          document.body.style.overflow = 'hidden'; // trava scroll
      });
  });

  // Fechar com o X
  if (closeBtn) {
      closeBtn.addEventListener('click', fecharLightbox);
  }

  // Fechar clicando fora da imagem
  if (lightbox) {
      lightbox.addEventListener('click', function(e) {
          if (e.target === lightbox) {
              fecharLightbox();
          }
      });
  }

  // Fechar com ESC
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
          fecharLightbox();
      }
  });

  // Função para fechar (reutilizável)
  function fecharLightbox() {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto'; // libera scroll
  }

});