// import 時也必須使用 {} 表示要匯入的是名稱
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
