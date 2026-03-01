import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import './index.css';
import PricingPage from './components/PricingPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PricingPage />
    <Analytics />
  </StrictMode>,
);
