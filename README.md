# Gizam Suspension Kendari

Website katalog & toko online **Gizam Suspension Kendari** — supplier shockbreaker motor (tabung & mekanik) ukuran 310–330 mm untuk motor matic & bebek di Kendari, Sulawesi Tenggara.

Dibangun dengan **React 19**, **Vite**, **TypeScript**, dan **Tailwind CSS**.

## Fitur

- Katalog produk shock mekanik & tabung (310 / 315 / 320 / 330 mm)
- Filter berdasarkan ukuran
- Cek kompatibilitas motor (database Honda, Yamaha, dll.)
- Keranjang belanja + checkout via WhatsApp
- Tombol CTA WhatsApp di mana-mana
- Desain dark modern, mobile-friendly

## Menjalankan secara lokal

**Prasyarat:** Node.js 18+ (disarankan 20 LTS)

```bash
git clone https://github.com/USERNAME/gizamsupension.git
cd gizamsupension
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Deploy ke GitHub Pages (otomatis)

Project ini sudah dilengkapi **GitHub Actions** (`.github/workflows/deploy.yml`).

### Langkah sekali saja:

1. Push semua file ke repo GitHub (branch `main` atau `master`)
2. Buka repo → **Settings** → **Pages**
3. Di **Source**, pilih **GitHub Actions** (bukan "Deploy from a branch")
4. Pastikan di `vite.config.ts` nama repo cocok:
   ```ts
   const REPO_NAME = 'gizamsupension'; // <- ganti jika nama repo berbeda
   ```
5. Tunggu Actions selesai (tab **Actions** di repo)
6. Site live di: `https://USERNAME.github.io/gizamsupension/`

### Kenapa sebelumnya putih / blank?

Vite default menganggap site di root (`/`).  
Di GitHub Pages project site URL-nya: `username.github.io/NAMA-REPO/`  
Tanpa `base: '/NAMA-REPO/'`, file JS/CSS tidak ketemu → halaman putih.

## Script

| Command           | Keterangan                     |
|-------------------|--------------------------------|
| `npm run dev`     | Development server (port 3000) |
| `npm run build`   | Build production ke `dist/`    |
| `npm run preview` | Preview hasil build            |
| `npm run lint`    | Type-check TypeScript          |

## Kontak toko

- **WhatsApp:** [0851-1991-9090](https://wa.me/6285119919090)
- **Alamat:** Jl. G. Nipa-nipa, Lorong Maleo, Kel. Punggolaka, Kec. Puuwatu, Kota Kendari, Sulawesi Tenggara

## Lisensi

MIT — lihat file `LICENSE`.  
Nama merek **Gizam Suspension**, gambar produk, dan data toko milik pemilik usaha.  
Jangan gunakan untuk menyamar sebagai toko resmi tanpa izin.
