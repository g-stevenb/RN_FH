export const TiposBasicos = () => {
  const nombre: string = 'Steven'
  const edad = 34
  const estActivo: boolean = false
  let poderes = ['Volar', 'Velocidad', 'Fuerza bruta']
  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad},{estActivo ? 'activo' : 'desactivado'}
      <br />
      {poderes.join('- ')}
    </>
  )
}