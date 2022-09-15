import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Company from './components/pages/company/Company'
import Contact from './components/pages/contact/Contact'
import NewProject from './components/pages/newProjects/NewProject'
import Container from './components/layout/Container/Container'
import Footer from './components/layout/Footer/Footer'
import NavBar from './components/layout/NavBar/NavBar'
import Projects from './components/pages/projects/Projects'
function App() {
  return (
    <Router>
      <NavBar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/newProject" element={<NewProject />}></Route>
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App
