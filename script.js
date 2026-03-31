/* DARK MODE */
function toggleMode() {
  document.body.classList.toggle("dark");
}

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

/* IMAGE MODAL */
function openModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
