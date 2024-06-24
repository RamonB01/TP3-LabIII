import { useState } from "react"

export default function Ej1(){

    const [bI, setBI] = useState(false);
    const [bC, setBC] = useState(true);
    const [bD, setBD] = useState(true);

    const botIzq = () => {
        setBI(true)
        setBC(false)
    };

    const botCent = () => {
        setBC(true)
        setBD(false)
    };

    const botDer = () => {
        setBD(true)
        setBI(false)
    };

    return (
        <>
            <div>
                <button onClick={botIzq} disabled= {bI} style={{ marginRight: "60px" }}>Izquierda</button>
                <button onClick={botCent} disabled= {bC} style={{ marginRight: "60px" }}>Centro</button>
                <button onClick={botDer} disabled= {bD} style={{ marginRight: "60px" }}>Derecha</button>
            </div>
        </>
    )

}