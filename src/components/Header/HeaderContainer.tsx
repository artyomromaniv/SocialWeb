import React, {ReactNode} from 'react';
import './Header.module.css';
import Header from "./Header";
import {RootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/reduxStore";


class HeaderContainer extends React.Component<any, RootStateType> {

    componentDidMount() {
        this.props.getAuthUserData();
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

export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer);

