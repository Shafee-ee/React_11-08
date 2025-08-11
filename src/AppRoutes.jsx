import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import UseEffect from "./pages/UseEffect";
import UseEffectAPI from "./pages/UseEffectAPI";
import UseEffectAPi2 from "./pages/UseEffectAPi2";
import UseEffectApi3 from "./pages/UseEffectApi3";
import UseEffectApi4 from "./pages/UseEffectApi4";
import UseEffectApi5 from "./pages/UseEffectApi5";
import UseReduce from "./pages/UseReduce";
import UseReducer2 from "./pages/UseReducer2";
import UseReducer3 from "./pages/UseReducer3";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="useEffectApi" element={<UseEffectAPI />} />
            <Route path="useEffectApi2" element={<UseEffectAPi2 />} />
            <Route path="useEffectApi3" element={<UseEffectApi3 />} />
            <Route path="useEffectApi4" element={<UseEffectApi4 />} />
            <Route path="useEffectApi5" element={<UseEffectApi5 />} />
            <Route path="useReduce" element={<UseReduce />} />
            <Route path="useReducer2" element={<UseReducer2 />} />
            <Route path="useReducer3" element={<UseReducer3 />} />

        </Routes>
    )
}