import Layout from '../../Components/Layout';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {ShoppingCartContext} from '../../Context'


function SignIn() {

  const context = useContext(ShoppingCartContext)

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  //Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage  || !noAccountInLocalState  

  return (
  
  <Layout>
    <h1 
    className='font-semibold text-black text-center mb-6 mt-6 w-80'
    >Welcome!</h1>

    <div className='flex flex-col w-80'>
      <p>
        <span className='font-light text-sm'>Email:   </span>
        <span className='text-sm'>{parsedAccount?.email}</span>
      </p>
      <p>
        <span className='font-light text-sm'>Password:    </span>
        <span className='text-sm'>{parsedAccount?.password}</span>
      </p>

      <Link
      to='/'>
      <button 
      disabled= {!hasUserAnAccount}
      className='bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2'>
          Log In 
      </button> 
      </Link>

    <div className='text-center'>
      <a className='font-light text-xs underline underline-offset-4' href="">Forgot my password</a>
    </div>

      <Link>
      <button 
      disabled= {hasUserAnAccount}
      className='border border-black disabled:text-black/40 disabled:border-black/40 w-full rounded-lg py-3 mt-6'>
          Sign Up
      </button>
      </Link>
  

  </div>
  </Layout>
  )
}

export default SignIn;
