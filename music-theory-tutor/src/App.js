import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Sidebar from "./component/Sidebar";
import { Container, ThemeProvider, Toolbar, createTheme } from "@mui/material";
import Learn from "./pages/Learn";
import NoteRecognition from "./pages/NoteRecognition";
import QuizNav from "./pages/QuizNav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Quiz from "./pages/Quiz";
import NoteRecognitionPane from "./pages/NoteRecognitionPane";
import { useState } from "react";
import RegisterCard from "./component/RegisterCard";
import History from "./pages/History";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userID, setUserID] = useState(0);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#883bc4",
      },
      background: {
        default: "#fffbf2",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
            <Route
              path="/history"
              element={
                <History
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                  setUserID={setUserID}
                  userID={userID}
                />
              }
            />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
