import Task from './Task';

export default function TaskContent({ tasks, deleteTask }){
    
    if(tasks.length === 0){
        return null;
    }
    
    return (
        <div className='tasks-content'>
            <div className='text-center'>
                <i className="bi bi-card-checklist mt-5 fnt-size-5"></i>

                <h2>Administra tus tareas</h2>
            </div>
            <div className='row'>
                {
                    tasks.map( (task, index) => (
                        <Task key={ index } task={ task } deleteTask={ deleteTask }/>
                    ))
                }
            </div>
        </div>
    )
}