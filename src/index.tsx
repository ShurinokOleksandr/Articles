import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme-provider';
import App from 'app/App';
import 'shared/config/i18n/i18n';
import { StoreProvider } from 'app/providers/store-provider';

render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
