import { useContext } from 'react';
import ButacaContext from '../context/butacaContext/ButacaContext';

export function useButaca() {
    return useContext(ButacaContext);
}