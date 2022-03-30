import { useEffect } from 'react';
import './App.css';
import Root from './pages/Root';
import cookies from 'js-cookie';
import localStorage from 'local-storage';

const languages = [
  {
    id: '1',
    code: 'fr',
    name: 'Arabic',
    country_name: 'sa',
    dir: 'rtl'
  },
  {
    id: '2',
    code: 'en',
    name: 'English',
    country_name: 'us'
  },
  
]
function App() {
  const currentCode = cookies.get('i18next') || 'ar'
  const currentLanguage = languages.find(l => l.code == currentCode)
  useEffect(() =>{
    document.body.dir = currentLanguage.dir || 'ltr'
  },[currentLanguage]);
  return (
    <div className="App">
 
<Root />

     </div>
  );
}

export default App;
