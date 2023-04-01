import logo from './logo.svg';
import './App.css';
import CardBlog from './components/CardBlog/CardBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <CardBlog></CardBlog>
      <Blog></Blog>
    </div>
  );
}

export default App;
