import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const AnimatedRoute = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        // Appliquer les animations ici
        // Par exemple, vous pouvez ajouter des classes d'animation au body ou à un élément parent
        document.body.classList.add("page-enter");

        const timeout = setTimeout(() => {
            document.body.classList.remove("page-enter");
        }, 1000); // Assurez-vous que la durée correspond à la durée de votre animation CSS

        return () => clearTimeout(timeout);
    }, [location]);

    return children;
};

const App = () => {
    return (
        <main className="bg-slate-300/20">
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AnimatedRoute>
                                <Home />
                            </AnimatedRoute>
                        }
                    />
                    <Route
                        path="/*"
                        element={
                            <AnimatedRoute>
                                <>
                                    <Routes>
                                        <Route
                                            path="/about"
                                            element={<About />}
                                        />
                                        <Route
                                            path="/projects"
                                            element={<Projects />}
                                        />
                                        <Route
                                            path="/contact"
                                            element={<Contact />}
                                        />
                                    </Routes>
                                    <Footer />
                                </>
                            </AnimatedRoute>
                        }
                    />
                </Routes>
            </Router>
        </main>
    );
};

export default App;