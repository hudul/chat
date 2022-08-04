import 'antd/dist/antd.css'
import './assets/styles/index.scss';
import './App.scss';
import PageLayout from './components/layout/index'
import {useReducer} from 'react'
import {appReducer, store, AppContent} from './store/index'

function App() {
  const [state, dispatch] = useReducer(appReducer,store)
  return ( 
    <AppContent.Provider value={[state, dispatch]} >
      <div className = "App" >
        <PageLayout />
      </div>
    </AppContent.Provider>
  );
}

export default App;