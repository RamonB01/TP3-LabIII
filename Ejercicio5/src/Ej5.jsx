import { useState, useEffect } from "react"

export default function Ej5() {

    const [personas, setPersonas] = useState([])
    useEffect(() => {
        const cargarPersonas = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if (res.ok) {
                const nuevasPersonas = await res.json();
                setPersonas(nuevasPersonas);
            }
        };
        cargarPersonas();
    }, []);

    const [tareas, setTareas] = useState([])
    const [seleccion, setSeleccion] = useState([])

    const cargarTareas = async (userId) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?userId=" + userId);
        if (res.ok){
            const tareasJson = await res.json();
            setTareas(tareasJson);
            setSeleccion(userId)
        }
    };


    return (
        <>  <h1>Listado de personas</h1>
            <ul> {personas.map((persona) => (
                <li style={{
                    background: "rgb(136, 182, 222)",
                    margin: "4%",
                    padding: "5%",
                    maxWidth: "max-content",
                    borderRadius: "5%",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Georgia, 'Times New Roman', Times, serif",
                    fontSize: "20px",
                    textShadow: "1px 1px 10px rgb(168, 168, 168)",
                }} key={persona.id}>
                {"Id: " + persona.id} <br />
                {"Nombre: " + persona.name} <br />
                {"Usuario: " + persona.username} <br />
                {"Email: " + persona.email} <br />
                {"Web: " + persona.website} <br />
                <button onClick={() => cargarTareas(persona.id)}>Ver Tareas</button>
                
                {seleccion === persona.id && (
                <ul>
                    {/* {tareas
                        .filter((tarea) => tarea.userId === persona.id) */}
                        {tareas.map((tarea) => (
                            <li key={tarea.id} style={{color: tarea.completed ? "green" : "red"}}>
                                {tarea.title}
                                {/* {tarea.completed ? setColorT("green") : setColorT("red")} */}
                            </li>
                    ))}
                </ul>
                    )}
                </li>
                ))}

            </ul >
        </>
    )

}