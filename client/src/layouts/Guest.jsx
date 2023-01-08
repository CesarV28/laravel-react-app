import { Navigate, Outlet } from 'react-router-dom'
import { useSateContext } from '../context/ContextProvider';

export const Guest = () => {

    const { token } = useSateContext();

  if(token){
    return <Navigate to={'/users'} />
  }

  return (
    <div className='h-screen flex justify-center items-center'>
        <Outlet/>
    </div>
  )
}
