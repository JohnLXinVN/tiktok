
import { Routes, Route } from "react-router-dom"

import { Fragment } from 'react'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layout';

function App() {
  return (

    <div className="app-wrapper">
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout
          if (route.layout) {
            Layout = route.layout
          }
          else if (Layout === null) {
            Layout = Fragment
          }

          const Page = route.component
          return <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>} />
        })}
      </Routes>
    </div>

  );
}

export default App;


