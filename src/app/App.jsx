import './App.css';
import { Header } from 'widgets/Header';
import { Provider } from 'react-redux';
import { AppRouter } from './providers/router';
import { store } from './appStore.';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <AppRouter />
        </Provider>
    );
}
export default App;
