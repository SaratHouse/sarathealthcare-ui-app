import { Routes, Route} from 'react-router-dom';

import IndexRoutes from './containers/index';

const App = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-auto h-screen">
      <Routes>
        <Route path="/*" element={<IndexRoutes/>} />
      </Routes>
    </div>
  )
}

export default App;
