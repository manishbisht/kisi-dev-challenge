import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as userActions from '../../redux/actions/userActions';
import LockCard from "../common/LockCard";

class Home extends Component {
    constructor(props) {
        super(props);
        let {dispatch} = this.props;

        this.userActions = bindActionCreators(userActions, dispatch);

    }

    componentDidMount() {
        this.updateLocks();
    }

    updateLocks(){
        this.userActions.getLocks();
    }

    changeLock(lockData) {
        if(lockData.unlocked) {
            this.userActions.changeLock('/' + lockData.id + '/lock');
        } else {
            this.userActions.changeLock('/' + lockData.id + '/unlock');
        }
        console.log(lockData);
    }

    renderLockCards(locks) {
        return locks.map((lockData) => {
            return (
                <LockCard lockData={lockData} changeLock={(lockData) => this.changeLock(lockData)}/>
            );
        })
    }

    formatData() {
        let locks = this.props.user.locks || [];

        return {locks};
    }

    render() {
        let {locks} = this.formatData();

        return (
            <div style={{marginTop: 64}}>
                {this.renderLockCards(locks)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps)(Home);