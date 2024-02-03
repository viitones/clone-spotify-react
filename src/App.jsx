import Sidebar from "./components/Sidebar"
import Library from "./components/Library"

import "./styles/components/app.sass"

function App() {


  return (
    <>
      <aside className="sidebar">
        <Sidebar />
        <Library />
      </aside>
    </>
  )
}

export default App
