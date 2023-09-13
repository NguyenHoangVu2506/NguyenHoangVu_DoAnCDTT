
import Header from './layouts/Header';
import '../src/assets/sass/app.scss';
import Footer from './layouts/Footer';
import Main from './layouts/Main';

import './assets/js/script'

function App() {
  return (
    <div className="App">
      <div class="overlay" data-overlay></div>
      
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
