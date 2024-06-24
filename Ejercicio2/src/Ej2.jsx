import { useState } from "react";

export default function Ej2(){

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [nivel, setNivel] = useState("Sin definir")
    const [IMC, setIMC] = useState(0)

    const calcIMC = (p, al) => {
        return (p/(al*al))

    }

    const tipoNivel = (imc2) => {
        if (imc2 < 18.5 ){
            setNivel(<span style={{color: "yellow"}} >BAJO</span>)
        } else if (imc2 >= 18.5 && imc2 <= 24.9){
            setNivel(<span style={{color: "green"}} >NORMAL</span>)
        } else if (imc2 >= 25 && imc2 <= 29.9){
            setNivel(<span style={{color: "orange"}} >SOBREPESO</span>)
        } else {
            setNivel(<span style={{color: "red"}} >OBESIDAD</span>)
        }
        return nivel
    }
    // segun yo se ve el cambio de color, pero soy daltonico así que no lo puedo asegurar

    const handleCalc = () =>{
        let imc3 = calcIMC(peso, altura)
        setIMC(imc3)
        tipoNivel(imc3)

    }

    return (
        <>
            <h2>Peso en Kg:</h2>
            <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
            <h2>Altura en metros:</h2>
            <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
            <br /><br />
            <button onClick={handleCalc}>Calcular</button>
            <p >IMC: {IMC}</p>
            <p>Nivel: {nivel}</p>
        </>
    )

}