import { Route, Routes, useLocation } from "react-router-dom";
import Aside from "./components/aside";
import Navbar from "./components/navbar";
import { routes } from "./contants/routes";

const App = () => {
  const location = useLocation();
  return (
    <>
      <div className="wrap container">
        <aside>
          <Aside />
        </aside>
        <main>
            <header>
              <Navbar />
            </header>
            <div className="content">
              <Routes location={location} key={location.pathname}>
                  {routes.map((route, index) => (
                      <Route
                          key={index}
                          path={route.path}
                          element={route.element}
                      />
                  ))}
              </Routes>
            </div>
        </main>
      </div>
    </>
  ) 
}
export default App;