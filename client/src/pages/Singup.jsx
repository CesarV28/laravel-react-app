import React from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../api/fetchAxios';
import { useSateContext } from '../context/ContextProvider';
import { useForm } from '../hooks/useForm'

export const Singup = () => {

  const {  setUser, setUserToken } = useSateContext();

  const {formState, onInputChange } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const {
    name,
    email,
    password,
    password_confirmation
  } = formState;

  const onSubmit = (e) => {
      e.preventDefault();
      console.log(formState)
      axiosClient.post('/singup', formState)
                 .then( ({ data }) => {
                    setUser(data.user)
                    setUserToken(data.toke)
                 })
                 .catch( err => {
                    if( response && response.status === 422 ){
                      console.log( response.data.errors )
                    }
                 })
  }
  
  return (

    <form 
        className='h-3/4 flex flex-col items-center gap-4 p-8 rounde bg-white shadow-sm w-1/2' 
        action="" 
        onSubmit={ onSubmit }
      >
      <h1 className='text-center text-4xl font-semibold text-gray-800'>Singup</h1>
      <input 
          className='w-1/2 rounded-sm p-1 border border-gray-400 text-gray-800' 
          type="text" 
          placeholder='Full name'
          name='name'
          value={name}
          onChange={ onInputChange }        
        />
      <input 
          className='w-1/2 rounded-sm p-1 border border-gray-400 text-gray-800' 
          type="email" 
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={ onInputChange }        
        />
      <input 
          className='w-1/2 rounded-sm p-1 border border-gray-400 text-gray-800' 
          type="password" 
          placeholder='Password'
          name='password'
          value={password}
          onChange={ onInputChange }        
        />
      <input 
          className='w-1/2 rounded-sm p-1 border border-gray-400 text-gray-800' 
          type="password" 
          placeholder='Password Confirmation'
          name='password_confirmation'
          value={password_confirmation}
          onChange={ onInputChange }        
        />
      <button className='px-6 py-1 text-lg font-semibold text-gray-200 bg-cyan-500 hover:bg-cyan-600 rounded-sm'>Login</button>

      <p className='text-gray-500'>
        Already registered? | <Link className='text-cyan-600' to={'/guest/login'} >Sing in</Link> 
      </p>
    </form>

  )
}
