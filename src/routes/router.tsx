import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Home/landing';

// Importación dinámica (Lazy Loading)
//const Dashboard = React.lazy(() => import('../pages/dashboard'));

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            {/* Suspense muestra algo mientras carga la página nueva (opcional) */}
            <Suspense fallback={<div style={{ color: 'white' }}>Cargando...</div>}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    {/* Ruta para manejar 404 - Página no encontrada */}
                    <Route path="*" element={<h1 style={{ color: 'white' }}>404 - Not Found</h1>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;