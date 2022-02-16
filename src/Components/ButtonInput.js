import React, {Component} from 'react';

class ButtonInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: null
        }
      };
      handleChange = (event) => {
        this.setState({"button": event.target.value});
      }
      render(){
      return(
      <li className="ButtonInput cards-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Button</div>
          <p className="card-text">
            <div className="input btn-block">
              <input type="button" value="Click me!" className="btn" onChange={this.handleChange}/>
            </div>
            <div className="output">
              <label for="buttonOutput">State: </label>
              <span name="buttonOutput">{this.state.button}</span>
            </div>
          </p>
        </div>
      </div>
    </li>
      )
      }
    }
      
      
    
    

      
export default ButtonInput;
