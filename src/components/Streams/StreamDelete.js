import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import { deleteStream } from '../../actions';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


class StreamDelete extends React.Component {

    // componentDidMount() {
    //     this.props.deleteStream(this.props.match.params.id);
    // }

    renderActions = () => {
        const {id} = this.props.match.params;
        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteStream(id)}
                    className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent = () => {
        if (!this.props.currentStream) {
            return 'Are you sure you wanna delete this stream?'
        } else {
            return `Are you sure you wanna delete the stream with title: ${this.props.currentStream.title}?`
        }
    }

    render() {
        return (
            <React.Fragment>
                <Modal 
                    title="Delete stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentStream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {deleteStream})(StreamDelete);