import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import APropos from './pages/APropos'
import Error from './pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FicheLogement/:idlogement" element={<FicheLogement />} />
      <Route path="/APropos" element={<APropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
