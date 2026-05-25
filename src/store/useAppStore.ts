import { create } from 'zustand';import { Role } from '../types';import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
interface S{selectedRole:Role|null;setRole:(r:Role)=>void}
export const useAppStore=create<S>((set)=>({selectedRole:getFromLocalStorage('selectedRole',null),setRole:(r)=>{saveToLocalStorage('selectedRole',r);set({selectedRole:r});}}));
