import { Route, Routes } from 'react-router-dom'
// ROOT
import RootLayout from '../../layouts/RootLayout'
// PAGES
import Home from '../../pages/Home'
import FicheLogement from '../../pages/FicheLogement'
import APropos from '../../pages/APropos'
import Error from '../../pages/Error'

export default function Router() {
  return (
    <Routes>
      <Route path="/Kasa/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/Kasa/FicheLogement/:idLogement" element={<FicheLogement />} />
        <Route path="/Kasa/APropos" element={<APropos />} />
        <Route path="/Kasa/FicheLogement/*" element={<Error />} />
        <Route path="/Kasa/error" element={<Error />} />
        <Route path="/Kasa/*" element={<Error />} />
      </Route>
    </Routes>
  )
}
