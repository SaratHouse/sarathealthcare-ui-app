import { Routes, Route} from 'react-router-dom';

import IndexRoutes from './containers/index';

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:gap-[5rem] gap-7 w-full h-screen">
      <Routes>
        <Route path="/*" element={<IndexRoutes/>} />
      </Routes>
    </div>
  )
}

export default App;
