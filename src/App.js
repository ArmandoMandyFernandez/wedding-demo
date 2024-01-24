import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/nav";
import Footer from "./Components/Footer/footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import OurStory from "./Pages/OurStory/OurStory";
import WeddingParty from "./Pages/WeddingParty/weddingParty";
import Travel from "./Pages/Travel/Travel";
import ThingsToDo from "./Pages/ToDo/ToDo";
import Schedule from "./Pages/Schedule/Schedule";
import Registry from "./Pages/Registry/Registry";
import RSVP from "./Pages/RSVP/RSVP";

function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ourstory" element={<OurStory />} />
                <Route path="/weddingparty" element={<WeddingParty />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/thingstodo" element={<ThingsToDo />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/registry" element={<Registry />} />
                <Route path="/RSVP" element={<RSVP />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
