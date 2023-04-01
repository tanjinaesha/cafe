import logo from './logo.svg';
import './App.css';
import CardBlog from './components/CardBlog/CardBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <CardBlog></CardBlog>
    </div>
  );
}

export default App;
