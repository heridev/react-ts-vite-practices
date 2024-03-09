import ErrorPage from '../ErrorPage.tsx'
import UseRefCounter from '../components/UseRefCounter.tsx'
import PokemonList from '../components/PokemonList.tsx'
import AvailableExamples from '../components/AvailableExamples/AvailableExamples.tsx'
import MainLayout from '../components/layouts/MainLayout.tsx'

export const availableRoutes = [
  {
    path: '/',
    element: <AvailableExamples />,
    errorElement: <ErrorPage />
  },
  {
    path: '/examples/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/examples/tic-tac-toe',
        element: <div>Tic tac toe</ div >
      },
      {
        path: '/examples/use-ref-counter',
        element: <UseRefCounter />
      },
      {
        path: '/examples/poke-list',
        element: <PokemonList />
      }
    ]
  },
]
