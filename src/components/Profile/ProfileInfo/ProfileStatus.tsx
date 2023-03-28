import React from 'react';
import {RootStateType} from "../../../redux/store";



export class ProfileStatus extends React.Component<any,any> {    // any?

    state = {
        editMode: false
    }
    activateEditMode  (){
        this.setState({
            editMode : true
        })
    }

    deactivateEditMode  (){
        this.setState({
            editMode : false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }


};

