import { Toaster } from 'react-hot-toast';
import AnimatedCursor from 'react-animated-cursor'
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <AnimatedCursor
        color="255,255,255"
        innerSize={12}
        outerSize={40}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '2px solid #fff'
        }}></AnimatedCursor>
      <Toaster></Toaster>
    </>
  );
}

export default App;
