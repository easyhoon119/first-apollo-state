import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import APage from "./pages/aPage";
import BPage from "./pages/bPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<APage />} />
                <Route path="/bPage" element={<BPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
