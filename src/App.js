
import Appbar from './component/Appbar'
import Blog from './component/Blog'
import Faq from './component/Faq'
import './App.css';
import { useState } from 'react';

function App() {
  const [pages, setPage] = useState(false);
  return (
    <div>
      <Appbar setPage={setPage} />
      {pages ?   <Faq />: <Blog />}
      
    
    
    </div>
  );
}

export default App;
