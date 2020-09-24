import { ReactComponent } from "*.svg";
import react from "react";
import reactDOM from "react-dom";


class abc extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render(){

        return <div>Hello World</div>

    }
}

reactDOM.render(<App />, document.getElementById("root"));