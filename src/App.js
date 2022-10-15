
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main'
import RegisterReactBootstrap from './Components/Register/RegisterReactBootstrap'
import Login from './Components/Register/Login';


function App() {
  const router = createBrowserRouter([
    {
     path: '/', 
     element: <Main>0</Main>,
     children: [
       {
         path: '/',
         element: <RegisterReactBootstrap></RegisterReactBootstrap>
       },
       {
         path: '/register',
         element: <RegisterReactBootstrap></RegisterReactBootstrap>
       },
       {
         path: '/login',
         element: <Login></Login>
       },
     ]
    }

  ])


  return (
    <div className="">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
