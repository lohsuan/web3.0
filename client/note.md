# Note for Frontend of Web3.0 Project

## ES6 export
```
// index.js
// allow us to export all of the components from a single file
// ES6 使用 export 來公開名稱(Name Export)，為表示公開的是名稱必須使用{}
export { default as Loader } from "./Loader";
// import 時也必須使用 {} 表示要匯入的是名稱
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
```

```
export { default as Loader } from "./Loader";
代表
import Loader from "./Loader";
export default {Loader};
```

### Reference
- [Youtube Tutorial](https://www.youtube.com/watch?v=Wn_Kb3MR_cU&t=494s)
- [Github Code](https://github.com/adrianhajdin/project_web3.0)
- [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)

### Packages
- react-icons 
- ethers
