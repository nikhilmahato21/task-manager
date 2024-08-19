import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from "react-hot-toast";
import { TaskProvider } from './utils/taskContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskProvider>
    <App />
    </TaskProvider>
    <Toaster/>
    
  </StrictMode>,
)
