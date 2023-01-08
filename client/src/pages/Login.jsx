import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';

export const Login = () => {

  const {formState, onInputChange } = useForm({
    email: '',
    password: '',
  });

  const {
    email,
    password,
  } = formState;

  const onSubmit = (e) => {
      e.preventDefault();
      console.log(formState)
  }

  return (
 
    <form className='h-1/2 flex flex-col items-center gap-4 p-8 rounde bg-white shadow-sm w-1/2' action="" onSubmit={ onSubmit }>
      <h1 className='text-center text-4xl font-semibold text-gray-800'>Login</h1>
      <input 
          className='w-1/2 rounded-sm p-1 border border-gray-400 text-gray-800' 
          type="email" 
          placeholder='Email'
          name='email'
          value={email}
          onChange={onInputChange}
      />
      <input 
          className='w-1/2 rounded-sm p-1 border border-gray-400 text-gray-800' 
          type="password" 
          placeholder='Password'
          name='password'
          value={password}
          onChange={onInputChange}
      />
      <button className='px-6 py-1 text-lg font-semibold text-gray-200 bg-cyan-500 hover:bg-cyan-600 rounded-sm'>Login</button>

      <p className='text-gray-500'>
        Not register? | <Link className='text-cyan-600' to={'/guest/singup'} >Create an account</Link> 
      </p>
    </form>
 
  )
}
