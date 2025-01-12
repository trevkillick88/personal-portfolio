import React, { ReactNode, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation  } from "react-router-dom";
import './css/app.css'
import NavBar from './components/navbar.tsx'
import Footer from './components/footer.tsx'
import Home from "./pages/home.tsx";
import NotFound from "./pages/notfound.tsx"
import Privacy from "./pages/privacy.tsx"
import Projects from './pages/projects.tsx';

//-- Type interface for children in wrapper
interface WrapperProps {
    children: ReactNode;
}
//-- 
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    const location = useLocation();
  
    useLayoutEffect(() => {
      // Scroll to the top of the page when the route changes
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);
  
    return children;
};

/**
 * Main App Function 
 * @returns {React.ReactElement} - React Element
 */
function App():React.ReactElement {
    return (
        <BrowserRouter>
            <Wrapper >
                <NavBar />

                <main
                    className="relative isolate"
                    id="content-container"
                >
                    <Routes>
                        <Route>
                            <Route
                                element={<Home />}
                                index
                            />

                            <Route
                                element={<Projects />}
                                path="projects"
                            />

                            <Route
                                element={<Privacy />}
                                path="privacy"
                            />

                            <Route
                                element={<NotFound />}
                                path="*"
                            />
                        </Route>
                    </Routes>
                </main>

                <Footer />
            </Wrapper >
        </BrowserRouter>
    )
}

export default App
