import "./index.css"
import { Suspense } from 'react';
import Layout from "./layout";

function App() {
  return (
    <Suspense fallback>
      <Layout/>
    </Suspense>
  )
}

export default App;