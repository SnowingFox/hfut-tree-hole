import { RootRoutes } from '@/route'
import { Appbar } from '@/components/Appbar'
import './App.css'

function App() {
  return (
    <>
      <Appbar>
        <RootRoutes />
      </Appbar>
    </>
  )
}

export default App
