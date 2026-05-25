# RADCARE NUSANTARA

**Smart Radiotherapy Care, Continuous Specialist Monitoring.**

RADCARE NUSANTARA adalah aplikasi dashboard healthcare SaaS berbasis frontend-only untuk simulasi operasional radioterapi: monitoring pasien, jadwal terapi, catatan klinis, laporan, dan audit log dengan penyimpanan lokal.

## Stack Teknologi
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- lucide-react
- localStorage
- Vercel (SPA deployment)

## Fitur Utama
- Login demo berbasis role (Pasien, Dokter Spesialis, Fisikawan Medis, Admin, Manajemen).
- Dashboard klinis dengan ringkasan pasien, jadwal, risiko, dan aktivitas.
- CRUD lokal untuk pasien, monitoring, jadwal, treatment, catatan, dokumen, dan audit log.
- Data table + tampilan card responsif untuk mobile.
- AI Assistant lokal rule-based (tanpa API eksternal).
- Export CSV per entitas dan backup/restore JSON aplikasi.
- Persistensi data penuh di localStorage.

## Struktur Data Demo
Semua data disimpan ke localStorage key:

`radcare_nusantara_app_data`

Data bersifat **dummy** dan hanya untuk kebutuhan demo/prototype.

## Menjalankan Lokal
```bash
npm install
npm run dev
```

Akses aplikasi di URL Vite yang muncul di terminal (default `http://localhost:5173`).

## Build Produksi
```bash
npm run build
npm run preview
```

## Deploy ke Vercel
1. Push repository ke GitHub/GitLab/Bitbucket.
2. Import project di Vercel.
3. Gunakan konfigurasi berikut:
   - Framework Preset: **Vite**
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Pastikan file `vercel.json` aktif untuk SPA rewrite semua route.

## Backup / Restore Data
- Buka halaman **Laporan** atau **Pengaturan**.
- Gunakan fitur **Export JSON** untuk backup.
- Gunakan **Import/Restore JSON** untuk pemulihan data.
- Gunakan **Reset Data Demo** untuk kembali ke seed data awal.

## Disclaimer
- Aplikasi ini tidak menggunakan backend, database, atau API eksternal.
- Aplikasi ini tidak menggunakan data pasien asli.
- Seluruh isi klinis adalah data simulasi untuk demo UI/UX dan alur produk.
- **AI Assistant hanya simulasi dan tidak menggantikan keputusan klinis.**
