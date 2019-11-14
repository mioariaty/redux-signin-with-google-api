import React from 'react'
import {connect} from 'react-redux';
import {fetchSingleStream} from '../../actions/';
import flv from 'flv.js';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.videoRef = React.createRef();
    }
    
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchSingleStream(id);

        this.buildPlayer();
    }

    /* 
        will be called when component fetched the stream successfully and the component renders component
    */
    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer = () => {
        if (this.player || !this.props.stream) {
            return;
        }
        const {id} = this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    renderStream = () => {
        const {stream} = this.props;
        if (!stream) return (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
        else {
            return (
                <div className="card">
                    <div className="view overlay">
                        <video 
                            ref={this.videoRef} 
                            style={{width: '100%'}}
                            controls={true} />
                        <div className="mask rgba-white-slight" />
                    </div>

                    <div className="card-body">
                        <h4 className="card-title">{stream.title}</h4>
                        <p className="card-text">{stream.description}</p>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col">
                <div className="col-md-10 offset-md-1">
                    {this.renderStream()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchSingleStream})(StreamShow);