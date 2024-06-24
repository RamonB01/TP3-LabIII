import { useState } from "react"

export default function Ej3(){

    const [direccion, setDireccion] = useState("row")
    const [justificado, setJustificado] = useState("center")
    const [alineado, setAlineado] = useState("center")


    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: direccion,
                justifyContent: justificado,
                alignItems: alineado,
                width: "300px",
                height: "400px",
                border: "5px solid black"
            }}>
                <div style={{
                    backgroundColor: "red",
                    color: "white",
                    textAlign: "center",
                    margin: "5px",
                    padding: "10px"
                }}>Div 1</div>
                <div style={{
                    backgroundColor: "green",
                    color: "white",
                    textAlign: "center",
                    margin: "5px",
                    padding: "10px"
                }}>Div 2</div>
                <div style={{
                    backgroundColor: "blue",
                    color: "white",
                    textAlign: "center",
                    margin: "5px",
                    padding: "10px"
                }}>Div 3</div>
            </div>
            {/* <label>Seleccionar Div</label> <br />
            <select name="" id="" onChange={(e) => setColorT(e.target.value)}>
                <option value="column">Div 1</option>
                <option value="row">Div 2</option>
                <option value="column-reverse">Div 3</option>
                <option value="row-reverse">Div 3</option>
            </select><br /> */}
            <label>Seleccionar Dirección</label> <br />
            <select name="" id="" onChange={(e) => setDireccion(e.target.value)}>
                <option selected value="" disabled>--dirección--</option>
                <option value="column">Columna</option>
                <option value="row">Fila</option>
                <option value="column-reverse">Columna Inversa</option>
                <option value="row-reverse">Fila Inversa</option>
            </select><br />
            <label>Seleccionar Justificado</label> <br />
            <select name="" id="" onChange={(e) => setJustificado(e.target.value)}>
                <option selected value="" disabled>--justificado--</option>
                <option value="flex-start">Inicio</option>
                <option value="center">Centro</option>
                <option value="flex-end">Final</option>
            </select><br />
            <label>Seleccionar Alineado</label> <br />
            <select name="" id="" onChange={(e) => setAlineado(e.target.value)}>
                <option selected value="" disabled>--alineado--</option>
                <option value="flex-start">Inicio</option>
                <option value="center">Centro</option>
                <option value="flex-end">Final</option>
                <option value="stretch">Estirar</option>
            </select>
        </>
    )

}