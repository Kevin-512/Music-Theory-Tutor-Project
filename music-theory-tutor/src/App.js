import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Sidebar from "./component/Sidebar";
import { Container, Toolbar } from "@mui/material";
import Learn from "./pages/Learn";
import NoteRecognition from "./pages/NoteRecognition";
import QuizNav from "./pages/QuizNav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Quiz from "./pages/Quiz";
import NoteRecognitionPane from "./pages/NoteRecognitionPane";
import { useState } from "react";
import RegisterCard from "./component/RegisterCard";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userID, setUserID] = useState(0);

  return (
    <Container>
      <Router>
        <Sidebar />
        <Navbar />
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/sightreading" element={<NoteRecognition />} />
          <Route path="/quizmap" element={<QuizNav />} />
          <Route
            path="/profile"
            element={
              <Profile
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                setUserID={setUserID}
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/sightreadingquiz" element={<NoteRecognitionPane />} />
          <Route path="/register" element={<RegisterCard />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
