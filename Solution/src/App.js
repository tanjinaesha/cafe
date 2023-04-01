import logo from './logo.svg';
import './App.css';
import CardBlog from './components/CardBlog/CardBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <CardBlog></CardBlog>
      <Blog></Blog>
      <ToastContainer />
    </div>
  );
}

export default App;
