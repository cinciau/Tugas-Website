// buka lightbox
function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  
  lightbox.style.display = "flex";    // tampilkan
  lightboxImg.src = imgElement.src;   // ambil gambar yang diklik
}

// tutup lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// tutup lightbox kalau klik di luar gambar
document.getElementById("lightbox").addEventListener("click", function(e) {
  if (e.target === this) {
    closeLightbox();
  }
});
