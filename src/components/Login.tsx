import { useEffect, useReducer } from 'react'
interface AuthState {
  validando: boolean
  token: null | string
  username: string
  name: string
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  name: '',
}

type AuthAction = { type: 'logout' }

//state no se modifica
//authReducer devuelve un tipo AuthState
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        username: '',
        name: '',
      }

    default:
      return state
  }
}

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1500)
  }, [])

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className='alert alert-info'>Validando...</div>
      </>
    )
  }
  return (
    <>
      <div className='alert alert-danger'>No autenticado</div>
      <div className='alert alert-success'>Autenticado</div>
      <button className={'btn btn-primary'}>Login</button>&nbsp;
      <button className={'btn btn-danger'}>Logout</button>
    </>
  )
}

/**
 * useReducer alternativa al useState cuando
 * tenemos un esstado mas elaborado, y q puede cambiar de diferentes maneras, muy
 * parecido a CONCEPTO DE redux
 */
