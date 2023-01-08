import { Link, Navigate, Outlet } from 'react-router-dom'
import { useSateContext } from '../context/ContextProvider'

export const Default = () => {

  const { user, token } = useSateContext();

  if(!token){
    return <Navigate to={'/guest/login'} />
  }

  const onLogout = ( e ) => {
    e.preventDefault();
  }

  return (
    <div className='grid grid-cols-6'>
        <aside className='h-screen pt-4 col-span-1 bg-cyan-700' >
          
            <div className='flex flex-col gap-4 text-lg text-center font-semibold text-slate-50'>
                <Link className='p-2 hover:bg-cyan-800'  to={'dashboard'} >Dashboard</Link>
                <Link className='p-2 hover:bg-cyan-800'  to={'/users'} >Users</Link>
            </div>
          
        </aside>
        
        <div className='col-span-5'>
          <header className='p-6  bg-slate-100 border-b-4 border-cyan-400'>
            <div className='text-gray-800 flex flex-row justify-between'>
              <p>Header</p>
              <p>
                { user.name }
                <span 
                  className='ml-2 cursor-pointer'
                  onClick={ onLogout }
                >
                    Logout
                </span>
              </p>
            </div>
          </header>
          <main>
            <Outlet/>
          </main>
        </div>

       
    </div>
  )
}
