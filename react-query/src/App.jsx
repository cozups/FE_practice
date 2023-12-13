import { Link, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/Home.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RQSuperHeroPage } from './components/RQSuperHero.page';
import { ParallelQueriesPage } from './components/ParallelQueries.page';
import { DynamicParallelPage } from './components/DynamicParallel.page';
import { DependentQueriesPage } from './components/DependentQueries.page';
import { PaginatedQueriesPage } from './components/PaginatedQueries.page';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/superheroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-superheroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/superheroes" element={<SuperHeroesPage />} />
          <Route path="/rq-superheroes" element={<RQSuperHeroesPage />} />
          <Route path="/rq-superheroes/:heroId" element={<RQSuperHeroPage />} />
          <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
          <Route
            path="/rq-dynamic-parallel"
            element={<DynamicParallelPage heroIds={[1, 3]} />}
          />
          <Route
            path="/rq-dependent"
            element={<DependentQueriesPage email="cozups@test.com" />}
          />
          <Route path="rq-paginated" element={<PaginatedQueriesPage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
