       **** Permet de lier des pages entre elle ****

        <Route path="/page1/:questionNumber" element={<Page1 />}>
          {/* Nous imbriquons nos composants dans page1 */}
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route>

// const router = createBrowserRouter([
// {
// path: '/',
// element: <Root />,
// },
// ])

      <Route path="/" element={<Root />}>
        <Route path="dashboard" element={<Dashboard />} />
        {/* ... etc. */}
      </Route>

const collapses = document.getElementsByClassName('collapse-btn')

for (let i = 0; i < collapses.length; i++) {
collapses[i].addEventListener('click', function () {
this.classList.toggle('active')

    const content = this.nextElementSibling

    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }

})
}

// const [logement, setLogement] = useState(false)

// useEffect(() => {
// if (!isLoading) {
// const logementFound = data.find((item) => item.id === idLogement)
// if (logementFound) {
// setLogement(logementFound)
// }
// }
// }, [isLoading, data, idLogement])
