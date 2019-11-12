import React from 'react'
import {connect} from 'react-redux';
import {fetchSingleStream, editStream} from '../../actions/index'
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchSingleStream(this.props.match.params.id);
    }

    onSubmitEdit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    renderStream = () => {
        const {stream} = this.props;
        
        if (!stream) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h3 className="alert alert-primary">Edit stream</h3>
                        {/* 
                            - this.props.stream is an object with a title and a description property 
                            - _.pick(Object, [path]) return new object composed of the picked object properties.
                        */}
                        <StreamForm
                            initialValues={_.pick(this.props.stream, 'title', 'description')} 
                            onSubmit={this.onSubmitEdit} />
                    </div>
                </div>
            )
        }
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                {this.renderStream()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
    
}

export default connect(mapStateToProps, {fetchSingleStream, editStream})(StreamEdit);