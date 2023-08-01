import { Route, Routes } from 'react-router-dom'
import { useFetch } from '../../utils/hooks/useFetch'

// ROOT
import RootLayout from '../../layouts/RootLayout'
// PAGES
import Home from '../../pages/Home'
import FicheLogement from '../../pages/FicheLogement'
import APropos from '../../pages/APropos'
import Error from '../../pages/Error'

export default function Router() {
  const { data, isLoading, error } = useFetch(`/data.json`)
  const maxItems = data.length

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home data={data} isLoading={isLoading} />} />
        <Route
          path="/FicheLogement/:indexLogement"
          element={
            <FicheLogement data={data} isLoading={isLoading} maxItems={maxItems} />
          }
        />
        <Route path="/FicheLogement/*" element={<Error />} />

        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}
