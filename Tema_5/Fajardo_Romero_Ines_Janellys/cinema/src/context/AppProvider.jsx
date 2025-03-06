import { ButacaProvider } from './butacaContext/ButacaProvider';

export function AppProvider({ children }) {
    return (
        <ButacaProvider>
            {children}
        </ButacaProvider>
    );
}