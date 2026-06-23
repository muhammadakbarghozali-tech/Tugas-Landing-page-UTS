// Mobile menu toggle
const btnMenu = document.getElementById('btnMenu');
const menuMobile = document.getElementById('menuMobile');

btnMenu.addEventListener('click', function() {
    menuMobile.classList.toggle('hidden');
    btnMenu.textContent = menuMobile.classList.contains('hidden') ? '☰' : '✕';
});

function tutupMenu() {
    menuMobile.classList.add('hidden');
    btnMenu.textContent = '☰';
}

// Form submit - kirim ke WhatsApp
const formPesan = document.getElementById('formPesan');

formPesan.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('inputNama').value.trim();
    const hp = document.getElementById('inputHP').value.trim();
    const layanan = document.getElementById('inputLayanan').value;
    const catatan = document.getElementById('inputCatatan').value.trim();

    if (nama === '') {
        alert('Nama ngga boleh kosong!');
        return;
    }
    if (hp === '') {
        alert('Nomor WhatsApp ngga boleh kosong!');
        return;
    }
    if (layanan === '') {
        alert('Pilih layanan terlebih dahulu!');
        return;
    }

    const pesan = 
        'Halo OMA KAYD LAUNDRY, saya ingin pesan laundry!\n\n' +
        'Nama: ' + nama + '\n' +
        'No. WhatsApp: ' + hp + '\n' +
        'Layanan: ' + layanan + '\n' +
        (catatan ? 'Catatan: ' + catatan : '');

    const nomorWA = '628979154249';
    const url = 'https://wa.me/' + nomorWA + '?text=' + encodeURIComponent(pesan);

    window.open(url, '_blank');
    formPesan.reset();
});

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(function(section) {
        if (window.scrollY >= section.offsetTop - 80) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(function(link) {
        link.classList.remove('aktif-link');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('aktif-link');
        }
    });
});
