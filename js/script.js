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