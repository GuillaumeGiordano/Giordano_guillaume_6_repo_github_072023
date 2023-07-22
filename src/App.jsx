//SYSTEM
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
// ROOT
import RootLayout from './layouts/RootLayout'
// PAGES
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import APropos from './pages/APropos'
import Error from './pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/FicheLogement/:idlogement" element={<FicheLogement />} />
      <Route path="/APropos" element={<APropos />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
