import React from 'react'
import {connect} from 'react-redux';
import { fetchStreams } from '../../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {
    
    // componentDidMount() {
    //     this.props.fetchStreams();
    // }

    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId && this.props.isSignedIn) {
            return (
                <div className="d-flex">
                    <Link
                        to={`/streams/edit/${stream.id}`}
                        className="btn btn-info m-0 rounded-0">Edit</Link>
                    <Link 
                        to={`/streams/delete/${stream.id}`}
                        className="btn btn-danger m-0 rounded-0">Delete</Link>
                </div>
            )
        }
    }

    renderCreate = () => {
        if (this.props.isSignedIn) {
            return (
                <React.Fragment>
                    <Link 
                        to="/streams/new" 
                        className="btn btn-success">Create stream</Link>
                </React.Fragment>
            )
        }
    }

    renderListStreams = () => {
        const {streams} = this.props;
        if (!streams) {
            return <div>Loading...</div>
        } else {
            return streams.map((stream, index) => {
                return (
                    <div
                        className="card mt-2"
                        index={index} 
                        key={stream.id}>
                        <div className="card-body d-flex align-items-center flex-row-reverse ">
                            {this.renderAdmin(stream)}
                            <div className="content w-100">
                                <h5 className="card-title mb-0">Title: {stream.title}</h5>
                                <p className="card-text">{stream.description}</p>
                            </div>
                        </div>
                    </div>
                );
            })
        }
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    {this.renderCreate()}
                    {this.renderListStreams()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);