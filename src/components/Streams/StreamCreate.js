import React from 'react'
import {connect} from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamCreate extends React.Component {

    onSubmitHandle = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3 className="alert alert-success">Create stream</h3>
                    <StreamForm onSubmit={this.onSubmitHandle} />
                </div>
            </div>
        );
    }
}


export default connect(null, {createStream})(StreamCreate);