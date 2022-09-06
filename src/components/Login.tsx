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
type LoginPayLoad = {
  username: string, 
  name: string
}
type AuthAction =
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayLoad }

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
    // case 'login'
    default:
      return state
  }
}

export const Login = () => {
  const [{ validando, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  )
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1500)
  }, [])

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className='alert alert-info'>Validando...</div>
      </>
    )
  }
  return (
    <>
      <h3>Login</h3>
      {(token)
        ? <div className='alert alert-success'>Autenticado como {name}</div>
        : <div className='alert alert-danger'>No autenticado</div>

      }

      {
        (token)
          ?
          (
            <button className={'btn btn-primary'}>Login</button>
          )
          :
          (
            <button className={'btn btn-danger'}>Logout</button>
          )
      }
    </>
  )
}

/**
 * useReducer alternativa al useState cuando
 * tenemos un esstado mas elaborado, y q puede cambiar de diferentes maneras, muy
 * parecido a CONCEPTO DE redux
 */
