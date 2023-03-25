import React, {ReactNode} from 'react';
import './Header.module.css';
import Header from "./Header";
import {RootStateType} from "../../redux/store";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/reduxStore";

class HeaderContainer extends React.Component<any, RootStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
               if (response.data.resultCode === 0){
                   let {id, email, login} = response.data.data;
                   this.props.setAuthUserDataAC(id,email,login)
               }
            });
    }

    render(): ReactNode {
        return <Header isAuth={undefined} login={undefined} {...this.props}/>;
    }

}
type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

const mapStateToProps = (state:AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{setAuthUserDataAC})(HeaderContainer);

