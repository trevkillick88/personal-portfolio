import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/app.css'
import NavBar from './components/navbar.tsx'
import Footer from './components/footer.tsx'
import Home from "./pages/home.tsx";
import NotFound from "./pages/notfound.tsx"
import Privacy from "./pages/privacy.tsx"
import Projects from './pages/projects.tsx';

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavBar></NavBar>
                <main id="content-container" className="relative isolate">
                    <Routes>
                        <Route>
                            <Route index element={<Home />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="privacy" element={<Privacy />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </main>
                <Footer></Footer>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App
