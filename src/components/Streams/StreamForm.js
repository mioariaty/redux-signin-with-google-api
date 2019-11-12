import React from 'react'
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="alert alert-danger" role="alert">{error}</div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input className="form-control" {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (

            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)}>      
                <Field
                    type="text"
                    name="title"
                    label="Title"
                    component={this.renderInput} />

                <Field
                    type="text"
                    name="description"
                    label="Description" 
                    component={this.renderInput} />
                
                <button  
                    className="btn btn-outline-info" 
                    type="submit">Submit</button>
            </form>

        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Phải điền title ';
    }

    if (!formValues.description) {
        errors.description = 'Phải điền description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);
