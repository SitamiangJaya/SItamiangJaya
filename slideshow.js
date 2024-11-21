let slideIndex = 0;

// Menampilkan slide pertama kali
showSlides(slideIndex);

// Fungsi untuk mengubah slide dengan tombol navigasi
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fungsi untuk mengubah slide dengan dots
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Fungsi utama untuk menampilkan slide
function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    // Jika melewati jumlah slide, kembali ke awal
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Sembunyikan semua slide
    slides.forEach(slide => slide.classList.remove('active'));

    // Nonaktifkan semua dots
    dots.forEach(dot => dot.classList.remove('active'));

    // Tampilkan slide yang sesuai
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Slideshow otomatis (opsional)
setInterval(() => {
    plusSlides(1);
}, 5000); // Ganti slide setiap 5 detik
