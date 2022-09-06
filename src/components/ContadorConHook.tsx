import { useCounter } from '../hooks/useCounter'
export const ContadorConHook = () => {
  const { valor, acumular } = useCounter(20)
  return (
    <>
      <div>
        Contador con Hook: <small> {valor} </small>
        <br />
        <button className='btn btn-primary' onClick={() => acumular(1)}>
          {' '}
          +1{' '}
        </button>
        &nbsp;
        <button
          className='btn btn-primary'
          onClick={() => {
            acumular(-1)
          }}
        >
          {' '}
          -1{' '}
        </button>
      </div>
    </>
  )
}
