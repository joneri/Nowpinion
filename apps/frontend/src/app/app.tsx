import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from '../components/Home';
import About from '../components/About';  // Example additional component
import Profile from '../components/Profile';  // Import the new Profile component

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white">About</Link> {/* Example link to another page */}
              </li>
              <li>
                <Link to="/profile" className="text-white">Profile</Link> {/* Link to the Profile page */}
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* Example route */}
            <Route path="/profile" element={<Profile />} /> {/* Route to the Profile component */}
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;