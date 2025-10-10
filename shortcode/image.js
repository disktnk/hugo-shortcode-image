function openModal(img) {
    const modal = img.parentElement.nextElementSibling;
    modal.classList.add('show');
}

// Close with Esc Key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.show').forEach(modal => {
      modal.classList.remove('show');
    });
  }
});
