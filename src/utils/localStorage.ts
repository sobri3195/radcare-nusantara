export const saveToLocalStorage=<T,>(k:string,v:T)=>localStorage.setItem(k,JSON.stringify(v));
export const getFromLocalStorage=<T,>(k:string,f:T):T=>{const v=localStorage.getItem(k);return v?JSON.parse(v):f};
