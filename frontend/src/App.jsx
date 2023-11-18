import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrPage, HomePage, JobsPage, PostPage, } from './pages';

export default function App() {


  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='*' element={<ErrPage />} />
          <Route path='/post' element={<PostPage />} />
          <Route path='/jobs' element={<JobsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}