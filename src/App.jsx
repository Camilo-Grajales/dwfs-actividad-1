// Packages
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

// App
import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';
import AppRouter from 'router';
import { CartProvider } from 'features/cart/context/CartProvider';

// Styles
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Toaster position="top-right" richColors closeButton />
        <Header />
        <main className='app-main'>
          <AppRouter />
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
