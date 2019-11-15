import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader,MDBInput } from 'mdbreact';
import * as types from '../../constants/google-form.constant';
import Axios from 'axios';

class GoogleForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modal: false,
            email: '',
            name: '',
            phone: '',
            address: '',
            message: '',
            sendingMessage: false
        }
    }
    
      
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChangeHandle = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        this.setState({
            sendingMessage: true
        })
        this.sendMassage();
    }

    sendMassage = () => {   
        const formData = new FormData();
        formData.append(types.GOOGLE_FORM_EMAIL, this.state.email);
        formData.append(types.GOOGLE_FORM_NAME, this.state.name);
        formData.append(types.GOOGLE_FORM_PHONE, this.state.phone);
        formData.append(types.GOOGLE_FORM_ADDRESS, this.state.address);
        formData.append(types.GOOGLE_FORM_MESSAGE, this.state.message);

        Axios
            .post(types.GOOGLE_FORM_ACTION_URL, formData)
            .then(() => {
                this.setState({
                    email: '',
                    name: '',
                    phone: '',
                    address: '',
                    message: '',
                    sendingMessage: false
                })
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    sendingMessage: false
                })
            })
    }
    
    render() {
        if(this.state.sendingMessage){
            return(
                <div>Sending...</div>
            )
        }
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
                                name="phone"
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