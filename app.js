/**
 * PUZZLE CONFIGURATION
 * Change TILE_ROWS and TILE_COLS to adjust grid size (e.g., 3x4, 5x8, etc.)
 * Total tiles = TILE_ROWS × TILE_COLS
 * Ensure you have enough PUZZLE_DATA entries to match total tiles
 */
const TILE_ROWS = 4;
const TILE_COLS = 6;

/**
 * AUDIO CONFIGURATION
 * To add background music:
 * 1. Place your audio file (MP3, WAV, etc.) in /assets/audio/
 * 2. Update the AUDIO_PATH constant below
 * 3. Adjust VOLUME (0.0 to 1.0) as needed
 */
const AUDIO_PATH = ''; // e.g., 'assets/audio/bg-music.mp3'
const VOLUME = 0.3;

/**
 * PUZZLE DATA CONFIGURATION
 * Each entry maps to a tile index (0-indexed, left to right, top to bottom)
 * Replace photo paths with your own images in /assets/photos/
 */
const PUZZLE_DATA = [
  {
    tile: 0,
    photo: 'photos/photo-1.png',
    title: 'Chapter 1 — Hari Kita Bertemu',
    letter: `Dari semua hal yang bisa terjadi hari itu, yang paling tak terduga adalah kamu. Dunia seolah mengecil jadi satu titik: Nabilla. Cara kamu tersenyum bikin aku paham—ada rumah baru yang kutemukan di tatapanmu.`,
  },
  {
    tile: 1,
    photo: 'photos/photo-2.png',
    title: 'Chapter 2 — First date',
    letter: `Ingat pas kita ke kodam bareng dan kita bergandengan tangan bersama? malam yang tidak akan pernah kita lupakan selamanya <3`,
  },
  {
    tile: 2,
    photo: 'photos/photo-3.jpg',
    title: 'Chapter 3 — 14 Bulan, 14 Purnama',
    letter: `Sudah 14 bulan kita berjalan berdampingan. Tidak semua hari cerah, tapi semua hari terasa berarti. Nabilla, terima kasih sudah jadi rumah, rute, dan alasan pulangku.`,
  },
  {
    tile: 3,
    photo: 'photos/photo(1).jpg',
    title: 'Chapter 4 — Pagi yang Pelan',
    letter: '‘Udah sarapan?’—pesan sesingkat itu rasanya seperti selimut tipis di pagi yang sibuk. Kadang cinta memang sesederhana mengingatkan, menenangkan, dan menanti kabar, tanpa banyak kata.',
  },
  {
    tile: 4,
    photo: 'photos/photo(2).jpg',
    title: 'Chapter 5 — Tanda-tanda Kecil',
    letter: 'Kamu ingat hal-hal remeh yang orang lain lupa: cara aku suka roti pinggiran, lagu yang kuskip, meme kesukaanku. Tanda-tanda kecil itu yang bikin aku jatuh cinta berkali-kali.',
  },
  {
    tile: 5,
    photo: 'photos/photo(3).jpg',
    title: 'Chapter 6 — Saat Lelah',
    letter: 'Ada hari yang berat, ada tugas yang menguji. Tapi ada kamu—Nabilla—yang bilang, ‘istirahat dulu.’ Di pelanmu, aku belajar: menang bukan selalu berlari; kadang berhenti dan memeluk juga kemenangan.',
  },
  {
    tile: 6,
    photo: 'photos/photo(4).jpg',
    title: 'Chapter 7 — Kita yang Berantem, Kita yang Bertumbuh',
    letter: 'Kita nggak selalu sependapat. Tapi kita selalu sepakat untuk tetap satu tim. Maaf yang tulus, peluk yang hangat, dan niat untuk belajar—itu yang bikin kita kuat.',
  },
  {
    tile: 7,
    photo: 'photos/photo(5).jpg',
    title: 'Chapter 8 — Langkah Kecil ke Masa Depan',
    letter: 'Rencana kita nggak selalu megah—kadang cuma nabung kecil-kecilan, pilih warna cat, atau menulis daftar mimpi. Tapi aku suka caranya: pelan, jujur, dan mengarah ke ‘kita’',
  },
  {
    tile: 8,
    photo: 'photos/photo(6).jpg',
    title: 'Chapter 9 — Surat Tanpa Amplop',
    letter: 'Nabilla, ada kata-kata yang nggak sempat kuposting, tapi selalu kupeluk: jaga dirimu, makan yang enak, dan percaya—aku di sini. Surat ini mungkin pendek, tapi rasanya panjang.',
  },
  {
    tile: 9,
    photo: 'photos/photo(7).jpg',
    title: 'Chapter 10 — Tawa Tengah Malam',
    letter: 'Video receh, candaan nggak penting, dan ketawa sampai lupa waktu. Bahagia kadang sesederhana itu: kamu, aku, dan alasan konyol untuk tersenyum lama-lama.',
  },
  {
    tile: 10,
    photo: 'photos/photo(8).jpg',
    title: 'Chapter 11 — Rencana Spontan',
    letter: 'Jalan kaki ke minimarket jam sebelas malam, beli es krim rasa random, ngobrol di parkiran. Bukan soal ke mana, tapi sama siapa. Dan aku suka ‘ke mana pun’ yang ada kamu.',
  },
  {
    tile: 11,
    photo: 'photos/photo(9).jpg',
    title: 'Chapter 12 — Kompas',
    letter: 'Kalau aku mulai bingung, kamu jadi tenang. Kalau aku ragu, kamu jadi arah. Kamu nggak memaksaku jadi orang lain—kamu menuntun aku jadi diri sendiri, versi yang lebih baik.',
  },
  {
    tile: 12,
    photo: 'photos/photo(10).jpg',
    title: 'Chapter 13 — Playlist Kita',
    letter: 'Ada lagu yang cuma jadi lagu—sampai kamu datang. Tiba-tiba tiap bait punya alamat. Dan setiap chorus, jantung kita kompak ikut bernyanyi.',
  },
  {
    tile: 13,
    photo: 'photos/photo(11).jpg',
    title: 'Chapter 14 — Foto yang Buram',
    letter: 'Kadang foto kita miring, blur, atau kebanyakan filter. Tapi perasaannya jernih: aku nyaman. Yang penting bukan resolusinya—tapi kita yang nggak pernah kehabisan alasan buat memotret hari.',
  },
  {
    tile: 14,
    photo: 'photos/photo(12).jpg',
    title: 'Chapter 15 — Pundak',
    letter: 'Kalau dunia terasa bising, sini bersandar. Aku nggak janji menyelesaikan semua masalah, tapi aku janji nggak akan pergi waktu kamu butuh ‘tenang’.',
  },
  {
    tile: 15,
    photo: 'photos/photo(13).jpg',
    title: 'Chapter 16 — Doa yang Sama',
    letter: 'Di antara banyak kemungkinan, kita bertemu. Aku suka membayangkan ada doa yang berpapasan di udara—punyaku dan punyamu—lalu jatuh di tempat yang sama: kita.',
  },
  {
    tile: 16,
    photo: 'photos/photo(14).jpg',
    title: 'Chapter 17 — Saat Dunia Terlalu Ramai',
    letter: 'Kita matikan notifikasi, kirim satu pesan: ‘ketemu yuk’. Kadang sunyi bareng kamu lebih nyaring dari konser mana pun. Dan aku selalu pulang dengan hati yang utuh.',
  },
  {
    tile: 17,
    photo: 'photos/photo(15).jpg',
    title: 'Chapter 18 — Hal-hal Favoritmu',
    letter: 'kucing, dan film romcom—tiga hal yang langsung ingetin aku ke kamu. Aku suka caranya kamu jatuh cinta pada hal-hal kecil; itu alasan aku jatuh cinta lebih besar.',
  },
  {
    tile: 18,
    photo: 'photos/photo(16).jpg',
    title: 'Chapter 19 — Janji yang Bisa Dipegang',
    letter: 'Aku nggak janji dunia selalu mudah. Tapi aku janji: jujur saat sulit, hadir saat dibutuhkan, dan bertumbuh bareng kamu, Nabilla—hari ini, besok, dan seterusnya.',
  },
  {
    tile: 19,
    photo: 'photos/photo(17).jpg',
    title: 'Chapter 20 — Rumah Adalah Kamu',
    letter: 'Rumah bukan tempat; rumah adalah orang. Caramu menatap bikin jalan pulang terasa dekat, meski jarak lagi nggak ramah. Kamu rumah yang selalu kubawa.',
  },
  {
    tile: 20,
    photo: 'photos/photo(18).jpg',
    title: 'Chapter 21 — Semesta Paralel',
    letter: 'Kalau ada seribu semesta dan kita nggak selalu bertemu, aku ingin jadi orang yang mencarimu paling keras. Karena di semesta ini, aku sudah menemukanmu, dan nggak mau lepas.',
  },
  {
    tile: 21,
    photo: 'photos/photo(19).jpg',
    title: 'Chapter 22 — Saat Kamu Ragu',
    letter: 'Kalau suatu hari kamu bertanya, ‘cukup nggak aku?’—jawabanku sama seperti pertama kali: lebih dari cukup. Kamu bukan sekadar pilihan; kamu jawabanku.',
  },
  {
    tile: 22,
    photo: 'photos/photo(20).jpg',
    title: 'Chapter 23 — Terima Kasihe',
    letter: 'Untuk 14 bulan yang mengajarkan sabar, tawa, dan pelukan yang nggak pernah terlambat—terima kasih, Nabilla. Kita mungkin tidak sempurna, tapi kita selalu berusaha. Itu yang membuat kita indah.',
  },
  {
    tile: 23,
    photo: 'photos/photo(21).jpg',
    title: 'Chapter 24 — Forever Together',
    letter: `And here we are, at the final piece. Every tile we've uncovered, every memory we've revisited—they all lead to this moment, to us.

Thank you for being my adventure, my comfort, my home. Here's to all the chapters yet to come.

Forever yours. I Love You ❤️`,
  },
];

// State
let isFirstTileOpened = false;
let isPanelOpen = false;
let audioElement = null;
let isPlaying = false;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initializePuzzleGrid();
  initializeLetterPanel();
  initializeMusicToggle();
  preloadBaseImage();
});

/**
 * Create and render puzzle grid
 */
function initializePuzzleGrid() {
  const grid = document.getElementById('puzzle-grid');
  const totalTiles = TILE_ROWS * TILE_COLS;
  
  // Set grid template
  grid.style.gridTemplateColumns = `repeat(${TILE_COLS}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${TILE_ROWS}, 1fr)`;
  
  // Create tiles
  for (let i = 0; i < totalTiles; i++) {
    const tile = createTile(i);
    grid.appendChild(tile);
  }
}

/**
 * Create individual tile element
 */
function createTile(index) {
  const button = document.createElement('button');
  button.className = 'puzzle-tile';
  button.setAttribute('aria-label', `Open memory ${index + 1}`);
  button.setAttribute('tabindex', '0');
  
  const row = Math.floor(index / TILE_COLS);
  const col = index % TILE_COLS;
  
  // Set background position for puzzle effect
  button.style.backgroundImage = `url('photos/base-img.png')`;
  button.style.backgroundPosition = `${(col / (TILE_COLS - 1)) * 100}% ${(row / (TILE_ROWS - 1)) * 100}%`;
  
  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'tile-overlay';
  button.appendChild(overlay);
  
  // Tile number
  const number = document.createElement('div');
  number.className = 'tile-number';
  number.textContent = index + 1;
  button.appendChild(number);
  
  // Event listeners
  button.addEventListener('click', () => openLetterPanel(index));
  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLetterPanel(index);
    }
  });
  
  return button;
}

/**
 * Initialize letter panel functionality
 */
function initializeLetterPanel() {
  const overlay = document.getElementById('letter-panel');
  const backdrop = overlay.querySelector('.letter-panel-backdrop');
  const closeButton = overlay.querySelector('.close-button');
  
  // Close handlers
  closeButton.addEventListener('click', closeLetterPanel);
  backdrop.addEventListener('click', closeLetterPanel);
  
  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isPanelOpen) {
      closeLetterPanel();
    }
  });
}

/**
 * Open letter panel with specific tile data
 */
function openLetterPanel(tileIndex) {
  const data = PUZZLE_DATA.find(item => item.tile === tileIndex);
  if (!data) return;
  
  const overlay = document.getElementById('letter-panel');
  const photo = document.getElementById('panel-photo');
  const title = document.getElementById('panel-title');
  const letter = document.getElementById('panel-letter');
  const loading = overlay.querySelector('.photo-loading');
  
  // Show confetti on first tile
  if (!isFirstTileOpened) {
    triggerConfetti();
    isFirstTileOpened = true;
  }
  
  // Reset photo
  photo.classList.add('hidden');
  loading.style.display = 'flex';
  
  // Load photo
  const img = new Image();
  img.onload = () => {
    photo.src = data.photo;
    photo.alt = data.title;
    loading.style.display = 'none';
    photo.classList.remove('hidden');
  };
  img.src = data.photo;
  
  // Set content
  title.textContent = data.title;
  letter.textContent = data.letter;
  
  // Show panel
  overlay.classList.remove('hidden');
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
  isPanelOpen = true;
}

/**
 * Close letter panel
 */
function closeLetterPanel() {
  const overlay = document.getElementById('letter-panel');
  overlay.classList.remove('visible');
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
  isPanelOpen = false;
}

/**
 * Initialize music toggle functionality
 */
function initializeMusicToggle() {
  if (!AUDIO_PATH) return; // No audio configured
  
  const toggle = document.getElementById('music-toggle');
  const volumeOn = toggle.querySelector('.volume-on');
  const volumeOff = toggle.querySelector('.volume-off');
  
  // Show toggle
  toggle.classList.remove('hidden');
  
  // Create audio element
  audioElement = new Audio(AUDIO_PATH);
  audioElement.loop = true;
  audioElement.volume = VOLUME;
  
  // Load saved preference
  const savedState = localStorage.getItem('musicPlaying');
  if (savedState === 'true') {
    audioElement.play().catch(() => {
      // Auto-play blocked
      updateMusicUI(false);
    });
    updateMusicUI(true);
  }
  
  // Toggle handler
  toggle.addEventListener('click', toggleMusic);
}

/**
 * Toggle music play/pause
 */
function toggleMusic() {
  if (!audioElement) return;
  
  if (isPlaying) {
    audioElement.pause();
    isPlaying = false;
    localStorage.setItem('musicPlaying', 'false');
  } else {
    audioElement.play().catch((err) => {
      console.error('Failed to play audio:', err);
    });
    isPlaying = true;
    localStorage.setItem('musicPlaying', 'true');
  }
  
  updateMusicUI(isPlaying);
}

/**
 * Update music toggle UI
 */
function updateMusicUI(playing) {
  isPlaying = playing;
  const toggle = document.getElementById('music-toggle');
  const volumeOn = toggle.querySelector('.volume-on');
  const volumeOff = toggle.querySelector('.volume-off');
  
  if (playing) {
    volumeOn.classList.remove('hidden');
    volumeOff.classList.add('hidden');
    toggle.classList.add('playing');
    toggle.setAttribute('aria-label', 'Mute music');
  } else {
    volumeOn.classList.add('hidden');
    volumeOff.classList.remove('hidden');
    toggle.classList.remove('playing');
    toggle.setAttribute('aria-label', 'Play music');
  }
}

/**
 * Trigger confetti animation
 */
function triggerConfetti() {
  const container = document.getElementById('confetti');
  const colors = [
    'hsl(340, 75%, 65%)',
    'hsl(280, 50%, 75%)',
    'hsl(25, 80%, 75%)',
    'hsl(340, 60%, 85%)'
  ];
  
  // Create 40 particles
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = '-10px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animationDelay = `${Math.random() * 0.3}s`;
    particle.style.animationDuration = `${1.5 + Math.random() * 1}s`;
    
    container.appendChild(particle);
  }
  
  // Clean up after animation
  setTimeout(() => {
    container.innerHTML = '';
  }, 3000);
}

/**
 * Preload base image for smooth rendering
 */
function preloadBaseImage() {
  const img = new Image();
  img.src = 'photos/base-img.png';
}
