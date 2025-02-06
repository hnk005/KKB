import "./index.css"
import { Suspense } from 'react';
import LandingPage from "./landing-page";
function App() {
  return (
    <Suspense fallback>
      <LandingPage/>
    </Suspense>
  )
}

export default App;