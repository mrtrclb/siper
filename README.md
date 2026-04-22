# Siper — Modern Tower Defense

**🌐 Languages:** [English](#english) · [Türkçe](#türkçe)

---

<a name="english"></a>

## English

A browser-based tower defense game with a modern military theme, built as a single-file HTML app with a dark khaki/orange palette. Built from scratch with AI-assisted "vibe coding" — no frameworks, no build step, just one HTML file and a service worker.

**Play now:** [mrtrclb.github.io/siper](https://mrtrclb.github.io/siper/)

![SİPER](og-image.png)

### Features

- **32 unique maps** — 15 single-path, 15 multi-path (6 of which are four-way quad-attack where enemies converge on a central HQ from four directions), plus **2 dynamic maps** where you place your HQ and the system generates the path via BFS pathfinding
- **7 tower types** across 3 upgrade levels — Machine Gun, Rocket Launcher, Tank Cannon, Anti-Air SAM, Sniper (instant beam), Flamethrower (cone AoE), Slow Field (frost debuff)
- **8 enemy types** with distinct strategies — Infantry, Armor, Air, Scout (fast), Shielded (shield HP), Regenerator (heals), Agitator (shoots at towers), Mega-Tank (boss)
- **Boss wave system** — A Mega-Tank boss spawns every 10th wave (10/20/30/40/50...) with its own epic health bar banner
- **Tower HP & repair** — Towers have 100 HP. Agitator enemies shoot at them. Use the in-panel Repair button (2 HP per 1₺) or watch them go up in smoke
- **Tower relocation** — Click any placed tower and use the "Move" button to reposition it once (single-use per tower, free of charge)
- **Progress-point unlock system** — Maps are ordered easy → hard. First 3 are free, the other 29 unlock as you earn points (highest wave × map difficulty weight, 1× to 6×). Flexible: grind an easy map or push a hard one
- **Dynamic maps (v2.7.0)** — Place your HQ anywhere (not on the outer edge); enemy bases spawn automatically ≥4 cells away; BFS carves the shortest path. Two modes: Random (bases on opposite sides) and Mirrored (bases point-reflected around HQ). Top-tier difficulty — 6× progress-point weight
- **Hamburger menu UI** — Clean HUD with compact controls: stats + Start Wave + Speed (1×/2×/3×) + hamburger dropdown for all other actions
- **3 difficulty levels** — Easy (250₺ / 30 lives / 1.15× HP), Medium (200 / 20 / 1.22×), Hard (130 / 15 / 1.30× + more air/armor)
- **37-achievement system** — Progression, kill counts, economy milestones, difficulty mastery, boss hunting, quad-attack challenges, dynamic map strategist
- **Game speed control** — Toggle between 1×, 2×, 3× for fast-forwarding through long runs
- **Autoplay** — Enable from the hamburger menu; waves auto-advance with a 4-second pause button
- **Endless wave mode** — Survive as many waves as possible, per-map best-score tracking
- **Full save/load** — Local save per map (auto-saves on tower placement, wave advance, 30s heartbeat, and tab close), with cloud sync via **SI-XXXXXX codes** (Firebase-backed) for cross-device continuation. Supports dynamic maps including mid-placement saves
- **Bilingual TR/EN** — Complete interface and content translation throughout (162 strings, 100% coverage)
- **PWA / offline-capable** — Install to home screen, play without internet after first load
- **Live atmosphere** — Drifting ambient particles, passing aircraft silhouettes, procedural Web Audio SFX (no mp3 shots needed)
- **Presence counter** — See how many players are online right now (Firebase RTDB)

### Tower Roster

| Tower | Role | Range | Fire Rate | Damage | Special |
|---|---|---|---|---|---|
| **Machine Gun** | Anti-infantry | 2.3–2.9 | Fast (0.18–0.11s) | Low (6–16) | Piercing at L3 |
| **Rocket Launcher** | Group damage | 2.8–3.4 | Slow (1.2–0.85s) | High (30–95) | Splash AoE |
| **Tank Cannon** | Armor-piercing | 3.0–3.6 | Slow (1.1–0.8s) | Very High (55–220) | High piercing |
| **Anti-Air (SAM)** | Air-only | 3.5–4.3 | Medium (0.55–0.35s) | High (28–90) | Air targets only |
| **Sniper** | Elite single-target | 5.0–6.0 | Slow (1.8–1.4s) | Very High (80–320) | Instant-hit beam, 0.8–1.0 piercing |
| **Flamethrower** | Short-range DoT | 1.6–2.0 | Very Fast (0.08–0.06s) | Very Low (4–11) | Cone AoE, ground only |
| **Slow Field** | Utility / debuff | 2.5–3.1 | Medium (0.5–0.4s) | Very Low (3–8) | Slows enemies 45–65% for 1.5–2.5s |

### Enemy Roster

| Enemy | HP | Speed | Armor | Reward | Special |
|---|---|---|---|---|---|
| **Infantry** | 30 | 1.2× | 0.0 | 6 | Standard unit |
| **Armor** | 110 | 0.7× | 0.55 | 14 | Heavy armor, -3 lives at base |
| **Air** | 55 | 1.6× | 0.1 | 12 | Flying — SAM or Sniper only |
| **Scout** | 22 | 2.6× | 0.0 | 5 | Very fast — bypasses slow towers |
| **Shielded** | 50 + **80 shield** | 0.9× | 0.25 | 22 | Shield absorbs full damage until broken |
| **Regenerator** | 80 | 0.95× | 0.15 | 20 | Regenerates 3 HP/second — need sustained DPS |
| **Agitator** | 55 | 1.0× | 0.0 | 18 | Shoots your towers every 2s from wave 10+ |
| **Mega-Tank (Boss)** | 2200 | 0.35× | 0.75 | 250 | Spawns every 10 waves. -10 lives if reaches base |

### Map Categories

- **Single-path (15):** Alpha, Bravo, Charlie, Delta, Echo, India, Kilo, Lima, Mike, Oscar, Quebec, Romeo, Yankee, Bravo-II, Delta-II
- **Multi-path (7):** Foxtrot, Golf, Hotel, Juliet, November, Papa, Zulu, Alpha-II
- **Quad-attack (6):** Sierra, Tango, Uniform, Victor, Whiskey, X-ray — central HQ, 4-way simultaneous spawn, round-robin distribution (70% ordered, 30% random jitter)
- **Triangle-entry (2):** Charlie-II
- **Dynamic (2, v2.7.0):** Echo-II Random, Foxtrot-II Mirrored — HQ placed by player, enemy bases auto-chosen, BFS path generation

### Controls

- **Click / tap** a tower in the sidebar to select — a toast confirms your selection
- **Click on grid** to place the selected tower on a valid empty cell (mobile: two-tap confirmation)
- **Click** a placed tower to open its panel — Upgrade / Repair / Move / Sell. On desktop the panel appears next to the tower; on mobile it pins to the bottom-left
- **Move** button lets you reposition a tower once per tower (free)
- **ESC** to cancel placement, cancel move, or close tower panel
- **Speed button (1×/2×/3×)** in HUD to fast-forward gameplay
- **Hamburger (≡) menu** contains: Autoplay toggle / Save & Quit / Menu / Restart / Language toggle
- **Dynamic map HQ placement:** click any inner cell (not on the outermost ring). On mobile, first tap previews with a pulsing green outline, second tap on the same cell confirms. Enemy bases then spawn automatically and paths are drawn

### Progress-Point Unlock System

Each map has a complexity weight (`cp`):
- Maps 1–10 (easiest): **1×** — e.g., Bravo-II Labyrinth, Kilo Rectangle
- Maps 11–15: **2×** — e.g., Charlie Zigzag, Romeo Coil
- Maps 16–20: **3×** — e.g., Juliet Junction, Foxtrot Twin
- Maps 21–25: **4×** — e.g., Mike Star, Tango Pincer
- Maps 26–30 (hardest fixed): **5×** — e.g., X-ray Crossroad, Sierra Cross
- Maps 31–32 (dynamic): **6×** — Echo-II Random, Foxtrot-II Mirrored

Points = **highest wave reached × map's cp**, pooled across all maps. Thresholds range from 10 (map #4) to 2900 (Foxtrot-II). You can grind easy maps or push hard ones — either path works.

### Tech Stack

- **Vanilla HTML + CSS + JavaScript** — single-file, ~7500 lines total
- **Canvas 2D** for rendering (grid, towers, enemies, projectiles, ambient effects, boss banner, placement preview)
- **BFS pathfinding** for dynamic maps — breadth-first search on the 10×8 grid with 4-directional movement
- **Web Audio API** for procedural SFX — no audio files required for game sounds
- **Firebase Realtime Database** for presence, feedback, cloud saves/scores
- **Service Worker** for PWA offline support
- **localStorage** for local saves, best scores, settings, achievement progress, unlock progression
- **No build step** — just open index.html in a browser, or deploy as static files

### Local Development

```bash
git clone https://github.com/mrtrclb/siper.git
cd siper
# No build step. Just serve the folder:
python3 -m http.server 8000
# or: npx serve
```

Open `http://localhost:8000` in your browser.

**Firebase configuration** is hardcoded in `index.html` at the top of the script block. To use your own Firebase project:
1. Create a Realtime Database in europe-west1 (or your region)
2. Paste rules from `firebase-rules.json` into Rules tab
3. Replace the `firebaseConfig` object with your own credentials
4. Configure domain restrictions in Google Cloud Console (App Check + reCAPTCHA v3) — the game checks domain and disables online features on unauthorized hosts

### Deployment

This repo deploys to GitHub Pages from the `main` branch. Any push to `main` triggers a rebuild. Service worker version is bumped per release (currently `siper-v2.7.0`) to invalidate old caches.

### Version History

Current: **v2.7.0**

| Version | Highlights |
|---|---|
| **v2.7.0** | 2 dynamic maps with player-placed HQ and BFS path generation. 2 new achievements. Mobile two-tap HQ placement. |
| **v2.6.4** | Progress-point info modal (ℹ icon). About page unlock section. Mobile HUD hamburger overlap fix. Desktop tower panel now centered. |
| **v2.6.3** | Maps ordered easy→hard, first 3 free, other 29 unlocked via progress points (1× to 6× complexity weight). |
| **v2.6.2** | Music pauses with game. Domain-locked Firebase. |
| **v2.6.1** | Mobile tap placement polish. Initial auto-save. |
| **v2.6.0** | 12 new maps (30 total). 6 new quad-attack maps. |
| **v2.5.0** | Agitator enemy. Tower HP system. Repair button. 3 new achievements. |
| **v2.4.0** | Life system overhaul: +2 every 5 waves, +5 every 10. Repair shop on HUD. |
| **v2.3.0** | Visual feedback pass: damage numbers, muzzle flash, screen shake, boss glow. |
| **v2.2.0** | Two-phase mobile placement. Pause button. Hover effects. |
| **v2.1.0** | Autoplay feature. Enlarged HUD. |
| **v2.0.0** | Big UI overhaul: hamburger menu. Tower move (1× per tower). |
| **v1.9.0** | 4 new enemies: Scout, Shielded, Regenerator, Mega-Tank boss. |
| **v1.8.0** | Achievement system (32 achievements). Game speed (1×/2×/3×). |
| **v1.7.0** | 12 new maps (30 total). 6 new quad-attack maps. |
| **v1.6.0** | 3 new towers (Sniper, Flamethrower, Slow Field). Music/SFX split. |
| **v1.5.0** | First official release: 8 maps, 3 difficulties, Firebase presence. |

See in-game About page for the full changelog with detailed notes.

### License

MIT — see [LICENSE](LICENSE)

### Author

**mrtrclb** — hobbyist game developer building browser games with AI-assisted "vibe coding"

Other games:
- [Watch Empire](https://watchempire.net) — Build a watchmaking empire
- [Trade Game](https://tradegame.net) — Stock market and investment simulator

---

<a name="türkçe"></a>

## Türkçe

Modern askeri temalı, tarayıcıda çalışan bir kule savunma oyunu. Tek bir HTML dosyası olarak geliştirildi — koyu haki/turuncu paletle, framework'süz, build adımı olmadan, AI-destekli "vibe coding" yöntemiyle sıfırdan kodlandı.

**Şimdi oyna:** [mrtrclb.github.io/siper](https://mrtrclb.github.io/siper/)

### Özellikler

- **32 benzersiz harita** — 15 tek yollu, 15 çoklu yollu (6 tanesi dört yönlü saldırı — düşmanlar dört bir yönden merkez HQ'ya akın ediyor), ayrıca **2 dinamik harita** — ana kaleyi sen yerleştiriyorsun, sistem yolu BFS ile otomatik hesaplıyor
- **7 kule tipi** ve 3 seviye yükseltme — Makineli Tüfek, Roketatar, Tank Topu, Hava Savunma (SAM), Keskin Nişancı (anlık ışın), Alev Makinesi (koni AoE), Yavaşlatıcı (frost debuff)
- **8 düşman tipi** farklı stratejilerle — Piyade, Zırhlı, Hava, Koşucu (hızlı), Kalkanlı (shield HP), Yenileyici (kendini iyileştirir), Ajitatör (kulelere ateş eder), Mega-Tank (boss)
- **Boss dalga sistemi** — Her 10. dalgada (10/20/30/40/50...) bir Mega-Tank bossu, kendine özel epic can çubuğu ile
- **Kule HP ve onarım** — Kulelerin 100 HP'si var. Ajitatör düşmanları onlara ateş eder. Panel'deki Onar butonuyla tamir et (2 HP = 1₺) veya patlayıp yok olmasını izle
- **Kule taşıma** — Yerleştirilmiş bir kuleye tıkla ve "Taşı" butonunu kullan (kule başına tek kullanım, ücretsiz)
- **İlerleme puanı kilit sistemi** — Haritalar kolaydan zora sıralı. İlk 3 açık, diğer 29 puan biriktirerek açılır (en yüksek dalga × zorluk katsayısı, 1× ile 6× arasında). Esnek: kolay haritayı grindle veya zora erken atla
- **Dinamik haritalar (v2.7.0)** — Ana kaleyi istediğin yere koy (kenara değil); düşman kaleleri en az 4 kare uzakta otomatik beliriyor; BFS en kısa yolu çizer. İki mod: Rastgele (kaleler karşılıklı taraflarda) ve Aynalı (kaleler HQ etrafında simetrik). En zor kategori — 6× ilerleme puanı katsayısı
- **Hamburger menü arayüzü** — Temiz HUD: istatistikler + Dalgayı Başlat + Hız (1×/2×/3×) + hamburger dropdown (diğer tüm aksiyonlar)
- **3 zorluk seviyesi** — Kolay (250₺ / 30 can / 1.15× HP), Orta (200 / 20 / 1.22×), Zor (130 / 15 / 1.30× + daha fazla hava/zırhlı)
- **37 başarım sistemi** — Dalga ilerleme, kill sayıları, ekonomi, zorluk ustalığı, boss avcılığı, dört-yönlü meydan okumalar, dinamik harita stratejisti
- **Oyun hızı kontrolü** — 1×, 2×, 3× arası geçiş (uzun oyunları hızlandırmak için)
- **Otomatik Oynat** — Hamburger menüden aç; dalgalar otomatik ilerler, 4 saniye ara verilir, ⏸ ile duraklatabilirsin
- **Sonsuz dalga modu** — Mümkün olduğunca çok dalgadan sağ çık, harita bazlı en iyi skor takibi
- **Tam kayıt/yükleme** — Harita başına yerel kayıt (her kule yerleştirmede, dalga ilerlemesinde, 30 saniyede bir, sekme kapanınca otomatik), **SI-XXXXXX kodları** ile bulut senkron (Firebase). Dinamik haritaları da destekler — yerleşim fazı ortasındaki save'ler bile korunur
- **TR/EN çift dil** — Tüm arayüz ve içerik baştan sona çeviri (162 string, %100 kapsam)
- **PWA / çevrimdışı** — Ana ekrana kurulabilir, ilk yüklemeden sonra internet olmadan çalışır
- **Canlı atmosfer** — Süzülen partiküller, geçen uçak silüetleri, prosedürel Web Audio ses efektleri (mp3 gerekmez)
- **Çevrimiçi sayacı** — Şu an kaç kişinin oynadığını gör (Firebase RTDB)

### Kuleler

| Kule | Rolü | Menzil | Ateş Hızı | Hasar | Özel |
|---|---|---|---|---|---|
| **Makineli Tüfek** | Piyade karşıtı | 2.3–2.9 | Hızlı (0.18–0.11s) | Düşük (6–16) | L3'te piercing |
| **Roketatar** | Grup hasarı | 2.8–3.4 | Yavaş (1.2–0.85s) | Yüksek (30–95) | Splash AoE |
| **Tank Topu** | Zırh delici | 3.0–3.6 | Yavaş (1.1–0.8s) | Çok Yüksek (55–220) | Yüksek piercing |
| **Hava Savunma (SAM)** | Sadece hava | 3.5–4.3 | Orta (0.55–0.35s) | Yüksek (28–90) | Sadece hava hedefi |
| **Keskin Nişancı** | Elit tek hedef | 5.0–6.0 | Yavaş (1.8–1.4s) | Çok Yüksek (80–320) | Anlık ışın, 0.8–1.0 piercing |
| **Alev Makinesi** | Kısa menzil DoT | 1.6–2.0 | Çok Hızlı (0.08–0.06s) | Çok Düşük (4–11) | Koni AoE, sadece kara |
| **Yavaşlatıcı** | Destek / debuff | 2.5–3.1 | Orta (0.5–0.4s) | Çok Düşük (3–8) | Düşmanları 1.5–2.5s boyunca %45–65 yavaşlatır |

### Düşmanlar

| Düşman | HP | Hız | Zırh | Ödül | Özel |
|---|---|---|---|---|---|
| **Piyade** | 30 | 1.2× | 0.0 | 6 | Standart birim |
| **Zırhlı** | 110 | 0.7× | 0.55 | 14 | Ağır zırh, üsse -3 can |
| **Hava** | 55 | 1.6× | 0.1 | 12 | Uçan — sadece SAM veya Sniper |
| **Koşucu** | 22 | 2.6× | 0.0 | 5 | Çok hızlı — yavaş kuleleri geçer |
| **Kalkanlı** | 50 + **80 kalkan** | 0.9× | 0.25 | 22 | Kalkan kırılana kadar tüm hasarı soğurur |
| **Yenileyici** | 80 | 0.95× | 0.15 | 20 | Saniyede 3 HP yeniler — sürekli DPS gerekir |
| **Ajitatör** | 55 | 1.0× | 0.0 | 18 | Wave 10+'da çıkar, 2 saniyede bir kulelerine ateş eder |
| **Mega-Tank (Boss)** | 2200 | 0.35× | 0.75 | 250 | Her 10 dalgada. Üsse ulaşırsa -10 can |

### Harita Kategorileri

- **Tek yollu (15):** Alfa, Bravo, Charlie, Delta, Echo, India, Kilo, Lima, Mike, Oscar, Quebec, Romeo, Yankee, Bravo-II, Delta-II
- **Çoklu yollu (7):** Foxtrot, Golf, Hotel, Juliet, November, Papa, Zulu, Alfa-II
- **Dört-yönlü (6):** Sierra, Tango, Uniform, Victor, Whiskey, X-ray — merkezi HQ, düşmanlar dört yönden aynı anda spawn, round-robin dağıtım (%70 sıralı, %30 rastgele)
- **Üçgen giriş (2):** Charlie-II
- **Dinamik (2, v2.7.0):** Echo-II Rastgele, Foxtrot-II Aynalı — HQ oyuncu tarafından yerleştirilir, düşman kaleleri otomatik seçilir, yol BFS ile oluşturulur

### Kontroller

- **Kuleyi seç**: Yan paneldeki kuleyi tıkla — seçim toast ile onaylanır
- **Yerleştir**: Grid'de boş uygun bir hücreye tıkla (mobilde iki aşamalı dokunma)
- **Kule paneli**: Yerleştirilmiş kuleye tıkla — Yükselt / Onar / Taşı / Sat. Masaüstünde panel kulenin yanında, mobilde sol alta pinli
- **Taşı** butonu: Her kuleyi bir kez yeniden konumlandır (ücretsiz)
- **ESC**: Yerleştirmeyi iptal, taşımayı iptal, veya kule panelini kapat
- **Hız butonu (1×/2×/3×)**: HUD'da, oyun hızını değiştir
- **Hamburger (≡) menü**: Otomatik Oynat / Kaydet & Çık / Menü / Yeniden Başla / Dil değiştir
- **Dinamik harita HQ yerleşimi**: iç hücrelerden birine tıkla (dış halka olmaz). Mobilde ilk dokunuş yeşil pulse preview, aynı hücreye ikinci dokunuş onay. Düşman kaleleri sonra otomatik belirir ve yollar çizilir

### İlerleme Puanı Kilit Sistemi

Her haritanın kendi zorluk katsayısı (`cp`) var:
- Haritalar 1–10 (en kolay): **1×** — örn. Bravo-II Labirent, Kilo Dörtgen
- Haritalar 11–15: **2×** — örn. Charlie Zikzak, Romeo Sarmal
- Haritalar 16–20: **3×** — örn. Juliet Kavşak, Foxtrot İkiz
- Haritalar 21–25: **4×** — örn. Mike Yıldız, Tango Kıskaç
- Haritalar 26–30 (en zor sabit): **5×** — örn. X-ray Kavşağı, Sierra Haç
- Haritalar 31–32 (dinamik): **6×** — Echo-II Rastgele, Foxtrot-II Aynalı

Puan = **geçilen en yüksek dalga × haritanın cp'si**, tüm haritalardan toplanır. Eşikler 10 (4. harita) ile 2900 (Foxtrot-II) arasında. Kolay haritayı grindleyebilir veya zora erken atlayabilirsin — iki yol da çalışır.

### Teknoloji

- **Vanilla HTML + CSS + JavaScript** — Tek dosya, yaklaşık 7500 satır
- **Canvas 2D** — Grid, kuleler, düşmanlar, mermiler, atmosfer, boss banner, yerleşim preview render'ları
- **BFS yol bulma** — Dinamik haritalar için 10×8 grid üzerinde 4-yönlü hareket ile genişlik öncelikli arama
- **Web Audio API** — Prosedürel ses efektleri, mp3 gerekmez
- **Firebase Realtime Database** — Presence, feedback, bulut kayıt/skor
- **Service Worker** — PWA çevrimdışı desteği
- **localStorage** — Yerel kayıtlar, en iyi skorlar, ayarlar, başarım ilerlemesi, kilit açma progresi
- **Build adımı yok** — Tarayıcıda index.html aç veya statik dosya olarak deploy et

### Yerel Geliştirme

```bash
git clone https://github.com/mrtrclb/siper.git
cd siper
# Build adımı yok. Klasörü serve et:
python3 -m http.server 8000
# veya: npx serve
```

Tarayıcıda `http://localhost:8000` aç.

**Firebase yapılandırması** `index.html`'in üst kısmındaki script bloğunda hardcoded. Kendi Firebase projeni kullanmak için:
1. europe-west1 (veya kendi bölgende) bir Realtime Database oluştur
2. `firebase-rules.json` içindeki kuralları Rules sekmesine yapıştır
3. `firebaseConfig` objesini kendi bilgilerinle değiştir
4. Google Cloud Console'dan domain kısıtlamalarını yapılandır (App Check + reCAPTCHA v3) — oyun domain kontrolü yapar ve yetkisiz host'larda online özellikleri devre dışı bırakır

### Deploy

Bu repo GitHub Pages'e `main` branch'ten deploy ediyor. `main`'e her push'ta yeniden build oluyor. Her sürümde service worker versiyonu artırılıyor (şu an `siper-v2.7.0`) ki eski cache'ler temizlensin.

### Sürüm Tarihi

Mevcut: **v2.7.0**

| Sürüm | Öne Çıkanlar |
|---|---|
| **v2.7.0** | 2 dinamik harita — oyuncu yerleşimli HQ ve BFS yol oluşturma. 2 yeni başarım. Mobil iki-dokunma HQ onayı. |
| **v2.6.4** | İlerleme puanı bilgi modalı (ℹ ikonu). Hakkında sayfasında kilit sistemi açıklaması. Mobil HUD hamburger çakışması düzeltildi. Masaüstünde kule paneli artık ortada. |
| **v2.6.3** | Haritalar kolaydan zora sıralı, ilk 3 açık, diğer 29 ilerleme puanıyla kilit açma (1× ile 6× zorluk katsayısı). |
| **v2.6.2** | Oyun duraklayınca müzik de duraklıyor. Domain bağımlı Firebase. |
| **v2.6.1** | Mobil dokunmatik yerleşim polish. İlk auto-save. |
| **v2.6.0** | Güçlendirilmiş otomatik kayıt (30sn + olay-tabanlı + tab-close). |
| **v2.5.0** | Ajitatör düşmanı. Kule HP sistemi. Onar butonu. 3 yeni başarım. |
| **v2.4.0** | Can sistemi revizyonu: 5 dalgada +2, 10 dalgada +5. HUD'a onarım dükkanı. |
| **v2.3.0** | Görsel geri bildirim paketi: hasar sayıları, muzzle flash, screen shake, boss glow. |
| **v2.2.0** | İki aşamalı mobil yerleşim. Duraklat butonu. Hover efektleri. |
| **v2.1.0** | Otomatik Oynat özelliği. Büyütülmüş HUD. |
| **v2.0.0** | Büyük UI yenilemesi: hamburger menü. Kule taşıma (kule başına 1×). |
| **v1.9.0** | 4 yeni düşman: Koşucu, Kalkanlı, Yenileyici, Mega-Tank boss. |
| **v1.8.0** | Başarım sistemi (32 başarım). Oyun hızı (1×/2×/3×). |
| **v1.7.0** | 12 yeni harita (30 toplam). 6 yeni 4-yönlü harita. |
| **v1.6.0** | 3 yeni kule (Sniper, Flamethrower, Slow Field). Müzik/SFX ayrımı. |
| **v1.5.0** | İlk resmi sürüm: 8 harita, 3 zorluk, Firebase presence. |

Tam changelog için oyun içindeki "Oyun Hakkında" sayfasına bak.

### Lisans

MIT — [LICENSE](LICENSE) dosyasına bak

### Geliştirici

**mrtrclb** — AI-destekli "vibe coding" ile tarayıcı oyunları geliştiren hobicı

Diğer oyunlar:
- [Watch Empire](https://watchempire.net) — Saat üretim imparatorluğu kur
- [Trade Game](https://tradegame.net) — Borsa ve yatırım simülasyonu

---

*Hattı tut, üssü koru.* — Hold the line, protect the base.
