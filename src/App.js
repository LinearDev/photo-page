import './App.css';

import Header from './templates/Header';
import PhotoList from './templates/PhotoList';
import Filter from './templates/Filter';

const App = () => (
    <div className="App">
      <Header />
      <div style={{display: 'flex', flexDirection: 'row-reverse', marginTop: '30px'}} className='mainContent container'>
        <div className='col-md-3'>
          <Filter />
        </div>
        <div className='col-md-9'>
          <PhotoList />
        </div>
        </div>
    </div>
);


export default App;
