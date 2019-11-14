import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBInput } from 'mdbreact';

class GoogleForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modal: false,
        }
    }
    
      
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChangeHandle = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value  
        })
    }

    onSubmitHandle = (e) => {
        e.preventDefault();

    }
    
    render() {
        return (
            <MDBContainer>
                <span onClick={this.toggle} style={{cursor: 'pointer', color: '#007bff'}}>Gửi ý kiến cho chúng tui</span>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Form contact</MDBModalHeader>
                    <MDBModalBody>
                    <form onSubmit={this.onSubmitHandle}>
                        <div className="grey-text">
                            <MDBInput
                                label="Điền email"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                name="email"
                                onChange={this.onChangeHandle}
                            />
                            <MDBInput
                                label="Điền họ và tên"
                                group
                                type="text"
                                validate
                                error="wrong"
                                name="name"
                                success="right"
                                onChange={this.onChangeHandle}
                            />
                            <MDBInput
                                label="Điền số điện thoại"
                                group
                                type="number"
                                validate
                                name="phone-number"
                                error="wrong"
                                success="right"
                                onChange={this.onChangeHandle}
                            />
                            <MDBInput
                                label="Điền địa chỉ"
                                group
                                type="text"
                                validate
                                name="address"
                                error="wrong"
                                success="right"
                                onChange={this.onChangeHandle}
                            />
                            <MDBInput
                                style={{resize: 'none'}}
                                type="textarea"
                                label="Material textarea" 
                                rows="3"
                                name="message"
                                onChange={this.onChangeHandle} />
                        </div>
                        <div className="text-center">
                            <MDBBtn type="submit">Gửi</MDBBtn>
                        </div>
                    </form>
                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        )
    }
}
export default GoogleForm;