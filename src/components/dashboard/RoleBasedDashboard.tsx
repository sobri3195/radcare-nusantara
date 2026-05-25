export const getRoleFocus = (role: string) => ({
  'Dokter Spesialis': 'Prioritas hari ini: pasien risiko tinggi, catatan belum direview, dan review spesialis.',
  'Pasien': 'Fokus Anda: jadwal terapi pribadi, progres terapi, dan laporan gejala harian.',
  'Fisikawan Medis': 'Fokus hari ini: QA alat, rencana terapi, dan catatan fisikawan medis.',
  'Admin Rumah Sakit': 'Fokus operasional: jadwal harian, dokumen, serta koordinasi layanan.',
  Manajemen: 'Fokus manajemen: analitik performa layanan, produktivitas, dan laporan ringkas.',
}[role] || 'Ringkasan operasional radioterapi hari ini.');
