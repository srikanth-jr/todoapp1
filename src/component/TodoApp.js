import React from 'react';

class TodoApp extends React.Component{
constructor(props){
    super(props);
    this.state = {
        task : '',
        tasks : [],
}
}
UpdateInput = (event) => {
    this.setState({
        ...this.state,
        task: event.target.value
    })
}
 
AddItem = (event) => {
    event.preventDefault();
    if(!this.state.task){

    }
    else{
        this.state.tasks.push(this.state.task);
    this.setState({
     ...this.state,
    })
}
}


render(){
    return(
        <React.Fragment>
        <section className = "p-3">
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-6">
                        <div className = "card">
                         <div className = "card-header bg-secondary text-white">
                                    <p className ="h3">TODO APP</p>
                        </div>
                         <div className = "card-body rgba-black-light">
                                <form className = "form-inline">
                                <div className = "form-group">
                                <input type ="text" 
                              value = {this.state.task}
                               onChange = {this.UpdateInput}
                                className = "form-control" placeholder = "Enter Your Todo"/>
                                
                                <button onClick = {this.AddItem}
                                    className = "btn btn-secondary btn-sm">Add</button>
                                    </div>
                                </form>
                                </div>
                                </div>
                        </div>
                          <div className = "col-md-6">
                              <div className = "card">
                                  <div className = "card-header bg-secondary text-white text-center">
                                      <p className = "h3">Display All TODO</p>
                                  </div>
                                  <div className = "card-body text-center rgba-black-light">
                                  {
                            this.state.tasks.map((task, index)=>{
                                return(
                                    <ul key = {index} className = "list-group mb-3">
                                        <li className = "list-group-item">
                                            {task}
                                        </li>
                                    </ul>
                                      )
                                   })
                                }    
                                </div>
                              </div>
                          </div>
                          </div>  
                      </div>
            </section>          
        </React.Fragment>
    )
}
}
export default TodoApp;