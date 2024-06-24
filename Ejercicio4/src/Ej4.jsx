import { useState } from "react"

export default function Ej4(){

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [altura, setAltura] = useState("")
    const [correo, setCorreo] = useState("")
    const [validacion, setValidacion] = useState("Validación")
    const [colorV, setColorV] = useState("red")
    
    const validarTodo = (e) => {
        e.preventDefault();
        if (nombre === "") {
            setValidacion("Nombre vacio");
            setColorV("red");
        } else if (apellido === "" ) {
            setValidacion("Apellido vacio")
            setColorV("red")
        } else if (edad === "" ) {
            setValidacion("Edad vacia")
            setColorV("red")
        } else if (edad < 18 ) {
            setValidacion("No puede ser menor de edad")
            setColorV("red")
        } else if (altura === "" ) {
            setValidacion("Altura vacia")
            setColorV("red")
        } else if (altura > 230 ) {
            setValidacion("Altura invalida")
            setColorV("red")
        } else if (correo === "" ) {
            setValidacion("Correo vacio")
            setColorV("red")
        } else if (!correo.includes("@") ) {
            setValidacion("Falta '@")
            setColorV("red")
        } else {setValidacion("Todo correcto"), setColorV("green")}
    };

    return (
        <>
            <form action="" onSubmit={validarTodo}>
                {/* quite los required porque se quedaba primero ese mensaje en lugar de usar la validacion de abajo */}
                <label htmlFor="nombre">Nombre: </label><br />
                <input type="text" name="nombre" id="nombre"   maxLength="50" value={nombre} onChange={(e)=> setNombre(e.target.value)} /><br />
                <label htmlFor="apellido">Apellido: </label><br />
                <input type="text" name="apellido" id="apellido"   maxLength="50" value={apellido} onChange={(e)=> setApellido(e.target.value)}  /><br />
                <label htmlFor="edad">Edad (años): </label><br />
                <input type="number" name="edad" id="edad" min="0"   value={edad} onChange={(e)=> setEdad(e.target.value)} /><br />
                <label htmlFor="altura">Altura (cm): </label><br />
                <input type="number" name="altura" id="altura" min="0"   value={altura} onChange={(e)=> setAltura(e.target.value)} /><br />
                {/* quite el max 230 porque me pasaba el mismo error que con el required */}
                <label htmlFor="correo">Correo: </label><br />
                <input type="text" name="correo" id="correo" value={correo} onChange={(e)=> setCorreo(e.target.value)}   /><br />
                <br />
                <button type="submit">Enviar</button>
                <p style={{color: colorV}} >{validacion}</p>
            </form>

        </>
    )

}