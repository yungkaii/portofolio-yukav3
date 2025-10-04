// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", () => {
    
    // Ambil elemen H1 berdasarkan ID
    const textElement = document.getElementById("hacker-text");

    // ======================================================
    // ===== KUSTOMISASI DI SINI ============================
    // ======================================================

    // Tulis daftar kata/frasa yang ingin ditampilkan di sini
    const words = ["Yukafii", "Seorang Pelajar", "Calon Game Developer"];

    // Atur kecepatan animasi (dalam milidetik)
    const typingSpeed = 150; // Kecepatan mengetik
    const deletingSpeed = 100; // Kecepatan menghapus
    const pauseDuration = 2000; // Jeda setelah selesai mengetik satu kata

    // ======================================================
    // ======================================================

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        // Logika untuk mengetik atau menghapus
        if (isDeleting) {
            // Proses menghapus
            charIndex--;
        } else {
            // Proses mengetik
            charIndex++;
        }

        // Tampilkan substring kata dengan kursor
        const textToShow = currentWord.substring(0, charIndex);
        textElement.innerHTML = `${textToShow}<span class="cursor"></span>`;

        // Logika untuk beralih antara mengetik, jeda, dan menghapus
        if (!isDeleting && charIndex === currentWord.length) {
            // Selesai mengetik, jeda sejenak lalu mulai menghapus
            isDeleting = true;
            setTimeout(typeEffect, pauseDuration);
        } else if (isDeleting && charIndex === 0) {
            // Selesai menghapus, pindah ke kata selanjutnya
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Loop kembali ke kata pertama
            setTimeout(typeEffect, typingSpeed);
        } else {
            // Lanjutkan mengetik atau menghapus
            const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(typeEffect, currentSpeed);
        }
    }

    // Mulai animasi
    typeEffect();
});