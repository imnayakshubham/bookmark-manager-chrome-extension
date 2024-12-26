import { Navbar } from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes'
import LandingPage from '../LandingPage/LandingPage'
import { PageNotFound } from '../PageNotFound/PageNotFound'

export const AppContainer = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="py-12">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<>Home</>} />

                    <Route path="/" element={<ProtectedRoutes />}>
                        <Route path="/dashboard" element={<>profile</>} />
                    </Route>
                    <Route path="*" element={<><PageNotFound /></>} />
                </Routes>
            </div>
        </div>
    )
}
