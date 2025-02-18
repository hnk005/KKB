import "./index.css"
import { Suspense } from 'react';
import Layout from "./layout";
import AuthProvider from "./providers/AuthProvider";


function App() {
  return (
    <Suspense fallback>
      <AuthProvider>
        <Layout/>
      </AuthProvider>
    </Suspense>
  )
}

export default App;