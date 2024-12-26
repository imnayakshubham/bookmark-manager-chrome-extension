import { Navbar } from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes'
import LandingPage from '../LandingPage/LandingPage'
import { PageNotFound } from '../PageNotFound/PageNotFound'
import { Dashboard } from '../Dashboard/Dashboard'

export const AppContainer = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-12 left-0 w-full bg-yellow-300 text-black text-center p-2 font-medium z-50">
                🚧 This site is currently under development. 🚀
            </div>
            <Navbar />
            <div className="py-3">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/" element={<ProtectedRoutes />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                    <Route path="*" element={<><PageNotFound /></>} />
                </Routes>
            </div>
        </div>
    )
}
