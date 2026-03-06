import { useContext } from 'react';
import { SupabaseContext } from '../providers/SupabaseProvider';

export const useSupabase = () => useContext(SupabaseContext);