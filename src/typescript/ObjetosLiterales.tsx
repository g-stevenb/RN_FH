interface Persona {
  //Interfaces sirven para poner reglas de validacion a los objetos, se puede expandir
  //Los tipos son objetos planos, no se expanden
  nombreCompleto: string
  edad: number
  direccion: Direccion
}
interface Direccion {
  pais: string
  casaNro: number
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Steven',
    edad: 34,
    direccion: {
      pais: 'Peru',
      casaNro: 11,
    },
  }

  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
      {/* {persona} */}
    </>
  )
}
