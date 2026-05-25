# RADCARE NUSANTARA

Prototype frontend-only healthtech radioterapi berbasis **React + Vite + TypeScript**.

## Fitur Demo Interaktif (localStorage)
- Manajemen pasien demo: tambah pasien, ubah status, update progress terapi.
- Detail pasien interaktif: monitoring note + doctor note timeline.
- Jadwal radioterapi interaktif: ubah status jadwal, status `Selesai` otomatis menambah progress pasien.
- Monitoring dashboard: ringkasan pasien risiko tinggi dan catatan monitoring harian.
- Laporan interaktif: statistik dihitung dari data localStorage (bukan hardcoded) + export CSV/JSON.
- Settings demo: pengaturan fasilitas, backup/restore JSON, reset data demo, audit log lokal.
- Persistensi data: semua data disimpan pada key `radcare_nusantara_demo_data` dan tetap ada setelah refresh browser.

## Stack
React + Vite + TypeScript + Tailwind CSS + React Router DOM + lucide-react + localStorage.

## Menjalankan Lokal
```bash
npm install
npm run dev
npm run build
```

## Rute Demo
- `/`
- `/demo`
- `/demo/patients`
- `/demo/patients/new`
- `/demo/patients/:id`
- `/demo/schedule`
- `/demo/monitoring`
- `/demo/reports`
- `/demo/settings`

## Deploy ke Vercel
1. Push repository ke Git provider.
2. Import project di Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Pastikan file `vercel.json` aktif agar SPA routing bekerja untuk semua route.

## Catatan
Semua data bersifat dummy, tanpa backend/database/API eksternal, dan tidak menggunakan data pasien asli.
