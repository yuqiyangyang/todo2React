import React from 'react';


class Todos extends Component {
    state={
        todos:[
            {id: 1,
            title:'take out the trash'},
            completed: false
    },
    
        ]
    }
    
    
    render(){ 
      return (
        <div className="App">
          <h1>Todos</h1>
        </div>
      );
    }
    
    }
export default Todos;