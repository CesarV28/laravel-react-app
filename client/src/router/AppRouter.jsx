
import { Route, Routes } from 'react-router-dom';
import { Default, Guest } from '../layouts';
import { Dashboard, Home, Login, Singup, Users } from '../pages';


export const AppRouter = () => {
  return (
    <Routes>
        
        <Route path='/*' element={ <Home/> }/>
        
        <Route path='/guest' element={ <Guest/> }>
          <Route index element={ <Login/> }/>
          <Route path='login' element={ <Login/> }/>
          <Route path='singup' element={ <Singup/> }/>
        </Route>

        <Route path='/users' element={ <Default/> }>
          <Route index element={ <Users/> }/>
          <Route path='dashboard' element={ <Dashboard/> }/>
        </Route>
    </Routes>
  )
}
