// import { Header, Icon, Grid, Segment, Label, Button } from "semantic-ui-react";

export default function Task({ task, deleteTask }){

    const { idTask, categoryTask, taskName} = task;
    return (
            <div class="col-sm-6 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h5 className="card-title header-task">{ taskName }</h5>
                        
                        <div>{ idTask }</div>
                        <button className="btn btn-danger" onClick={ () => deleteTask(idTask) }>
                            Eliminar
                        </button>
                    </div>
                    {
                        categoryTask && (
                            <div className="ribbon ribbon-bottom-right col align-self-end">
                                <span>{ categoryTask }</span>
                            </div>
                        )
                    }
                    
                </div>
            </div>
    );
}