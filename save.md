       **** Permet de lier des pages entre elle ****

        <Route path="/page1/:questionNumber" element={<Page1 />}>
          {/* Nous imbriquons nos composants dans page1 */}
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route>
