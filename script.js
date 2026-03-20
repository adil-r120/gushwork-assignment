const header = document.getElementById('header');

// Sticky header: show only after scrolling past the hero section (first fold)
window.addEventListener('scroll', () => {
  const hero = document.getElementById('home');
  const threshold = hero ? hero.offsetHeight : window.innerHeight;
  if (window.scrollY > threshold) {
    header.classList.add('sticky-visible');
  } else {
    header.classList.remove('sticky-visible');
  }
});

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");
let index = 0;

// Full-size image URLs matching the thumbnails (in order)
const fullImages = [
  "assets/images/pipe1.jpg",
  "assets/images/pipe2.jpg",
  "assets/images/pipe3.jpg",
  "assets/images/pipe4.jpg",
  "assets/images/pipe5.jpg",
  "assets/images/pipe6.jpg"
];

function setImage(i) {
  index = (i + fullImages.length) % fullImages.length;
  mainImage.src = fullImages[index];
  thumbs.forEach(t => t.classList.remove("active"));
  thumbs[index].classList.add("active");
}

// Arrow Navigation
document.querySelector(".right").onclick = () => setImage(index + 1);
document.querySelector(".left").onclick  = () => setImage(index - 1);

// Thumbnail Click
thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => setImage(i));
});

// ── Zoom Toggle ───────────────────────────────
// Click the lens button to zoom in/out on the main image
function toggleZoom() {
  const img = document.getElementById('mainImage');
  const btn = document.getElementById('zoomBtn');
  const isZoomed = img.classList.toggle('zoomed');
  btn.title = isZoomed ? 'Zoom out' : 'Zoom in';
  btn.querySelector('svg').innerHTML = isZoomed
    ? `<circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/><line x1="8" y1="11" x2="14" y2="11"/>`
    : `<circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>`;
}

// ── Process Tabs ─────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.proc-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const content = document.getElementById('step-' + btn.dataset.step);
    if (content) content.classList.add('active');
  });
});

// ── FAQ Accordion ─────────────────────────────
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});