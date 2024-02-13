import { Routes, Route, Navigate } from "react-router-dom";
import Framed from "./framed";
import './index.css';
import MovieGrid from "./moviegrid";
import Moviemoji from "./moviemoji";

function ValentinesDay() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Framed />} />
                <Route path="/moviegrid" element={<MovieGrid />} />
                <Route path="/moviemoji" element={<Moviemoji />} />
            </Routes>
        </div>
    )
}

export default ValentinesDay;