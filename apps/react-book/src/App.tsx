import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { routes } from './routes'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div
        className="p-16"
        style={{ scrollBehavior: 'smooth', scrollPaddingTop: '5rem', flex: 1 }}
      >
        <div className="prose w-full max-w-4xl flex-grow">
          <h1 className="text-xl mb-8">组件示例</h1>
          <Suspense fallback={<>...</>}>
            <Routes>
              {routes.map(({ path, Page }) => {
                return <Route path={path} key={path} element={<Page />} />
              })}
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App
