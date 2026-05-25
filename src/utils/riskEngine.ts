export const calculateRisk=(s:Record<string,number>)=>{const max=Math.max(...Object.values(s));if(max>=9)return 'red flag';if(max>=7)return 'berat';if(max>=4)return 'sedang';return 'ringan'};
export const generateDummyAlert=(s:Record<string,number>)=>({severity:calculateRisk(s),message:s.nyeri>=8?'Nyeri tinggi':'Perlu observasi'});
export const getRiskColor=(l:string)=>({ringan:'emerald',sedang:'amber',berat:'orange','red flag':'red'} as any)[l]||'slate';
export const getRiskLabel=(n:number)=>n>80?'Red Flag':n>60?'Berat':n>30?'Sedang':'Ringan';
