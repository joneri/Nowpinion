import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from '../components/Home';
import NxWelcome from './nx-welcome';
import About from '../components/About';  // Example additional component

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
            </ul>
          </nav>

          <NxWelcome title="frontend" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* Example route */}
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
