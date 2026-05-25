export type Role='patient'|'caregiver'|'doctor'|'physicist'|'therapist'|'nurse'|'admin'|'manager';
export interface Patient{ id:string; name:string; diagnosis:string; stadium:string; technique:string; totalDose:string; totalFractions:number; currentFraction:number; risk:'ringan'|'sedang'|'berat'|'red flag'; status:string; doctor:string; }
