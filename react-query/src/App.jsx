import { Link, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/Home.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/superheroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/RQSuperheroes">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/superheroes" element={<SuperHeroesPage />} />
        <Route path="/RQSuperheroes" element={<RQSuperHeroesPage />} />
      </Routes>
    </>
  );
}

export default App;
