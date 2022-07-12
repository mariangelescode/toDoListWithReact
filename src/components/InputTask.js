import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const optionsCategory = [
    { key:"selecciona", value:"selecciona", label:"Selecciona una categoria" },
    { key:"deporte", value:"deporte", label:"Deporte" },
    { key:"casa", value:"casa", label:"Casa" },
    { key:"oficina", value:"oficina", label:"Oficina" },
    { key:"otra", value:"otra", label:"Otra" },
]

export default function InputTask({ createTask }){

    const [task, setTask] = useState({
        idTask: "",
        taskName: "",
        categoryTask: "",
    });

    const [error, setError] = useState(false);


    const onChangeTask = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
        
    };

    const onChangeCategoryTask = (e) => {
        console.log(e.target.value)
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
        
    };

    const onSubmitTask = (e) => {
        e.preventDefault();
        //Validación
        if(task.taskName.trim() === "" || task.categoryTask.trim() === "" || task.categoryTask === 'selecciona'){
            setError(true);
            return;
        }
        

        //eliminar el mensaje previo
        setError(false);

        //asignar id
        task.idTask = uuidv4();

        //crear la tarea
        createTask(task);

        //limpiar inputs
        setTask({
            idTask: "",
            taskName: "",
            categoryTask: "",
        });
    }

    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="bi bi-calendar-plus"></i></span>
                            <input 
                                type="text" 
                                className="col-8" 
                                aria-label="Dollar amount (with dot and two decimal places)" 
                                placeholder="Escribe tu tarea..."
                                name="taskName"
                                value={ task.taskName }
                                onChange={ onChangeTask }
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        <select
                            // options={options}
                            className="select-form-task form-select"
                            name="categoryTask"
                            placeholder="Categoria"
                            value={ task.categoryTask }
                            onChange={ onChangeCategoryTask }
                        >
                            {
                                optionsCategory.map( opt => (
                                    <option key={opt.key} value={opt.value}>{opt.label}</option>
                                ) )
                            }
                        </select>
                    </div>
                    <div className="row">
                        <button type="submit" className="btn btn-primary col-md-2 offset-md-5 purple" onClick={ onSubmitTask }>Añadir tarea</button>
                    </div>
                </div>
            </div>

            {
                error && (
                    <div className="text-center mt-3">
                        <div className="alert-error-form text-danger fs-4">
                            <i className="bi bi-x-circle-fill"></i>
                            Los campos son obligatorios
                            <i className="bi bi-x-circle-fill"></i>
                        </div>
                    </div>
                )
            }
        </>
    )
}