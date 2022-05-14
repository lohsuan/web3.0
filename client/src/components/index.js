// allow our components to import all of these components in one line
// allow us to export all of the components from a single file
// ES6 使用 export 來公開名稱(Name Export)，為表示公開的是名稱必須使用{}
// import 時也必須使用 {} 表示要匯入的是名稱
export { default as Navbar } from "./Navbar";
export { default as Welcome } from "./Welcome";
export { default as Loader } from "./Loader";
export { default as Services } from "./Services";
export { default as Transactions } from "./Transactions";
export { default as Footer } from "./Footer";

/*
export { default as Loader } from "./Loader";
代表
import Loader from "./Loader";
export default {Loader};
*/