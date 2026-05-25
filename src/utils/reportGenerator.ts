export const generatePatientSummary=(p:any)=>`${p.name} menjalani ${p.technique} ${p.currentFraction}/${p.totalFractions}.`;
export const generateReportDraft=(i:any)=>`Laporan Radioterapi\nDiagnosis: ${i.diagnosis}\nStadium: ${i.stadium}\nTeknik: ${i.technique}\nDosis: ${i.dose}\nFraksi: ${i.fraction}\nEfek Samping: ${i.effects}\nRespons: ${i.response}\nFollow-up: ${i.followUp}`;
