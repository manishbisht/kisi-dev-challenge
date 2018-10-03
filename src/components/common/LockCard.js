import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as userActions from '../../redux/actions/userActions';

class LockCard extends Component {
    formatData() {
        let lockData = this.props.lockData || {};

        return {lockData};
    }

    render() {
        let {lockData} = this.formatData();

        return (
            <div style={{padding: 10}}>
                <Card >
                    <CardContent>
                    <Typography variant="headline" component="h2">
                        {lockData.name} | Locker ID: {lockData.id}
                    </Typography>
                    <Typography color="textSecondary">
                        Current Status: {lockData.unlocked === true ? "Lock" : "UnLock"}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => this.props.changeLock(lockData)}>
                            {lockData.unlocked === true ? "UnLock" : "Lock"}
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default LockCard;
