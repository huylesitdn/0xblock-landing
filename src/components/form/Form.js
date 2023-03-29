import React from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
  } from 'react-google-recaptcha-v3';

const EMAIL_JS_SERVICE_ID = 'service_ax8ef6l'
const EMAIL_JS_TEMPLATE_ID = 'template_1yo4wm1'
const EMAIL_JS_USER_ID = '9oOynTr3ChJiJOhRg'
const ReCAPTCHA_SITE_KEY = '6LfUeKYeAAAAAOqN2Y2txHLIhZ63yE7DtH3zF0rn'

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purpose: 'General Inquiry',
            name: '',
            nameValid: false,
            email: '',
            emailValid: false,
            company: '',
            companyValid: false,
            message: '',
            messageValid: false,
            privacy: true,
            isValid: false,
            isSubmitted: false,
            reCaptchaToken: '',
            loading: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVerifyReCaptcha = this.handleVerifyReCaptcha.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' 
            ? target.checked 
            : target.value;
        const stateName = target.name;

        this.setState({[stateName]: value}, this.checkValidation.bind(this));
    }

    handleVerifyReCaptcha(token) {
        this.setState({reCaptchaToken: token})
    }
    
    checkValidation() {
        const re = /^[a-zA-Z0-9_ ]*$/;
        const name = this.state.name;
        if(name.length > 0) {
            re.test(name)
                ? this.setState({nameValid: false})
                : this.setState({nameValid: 'Full Name Invalid'}) 
        } else {
            this.setState({nameValid: false}) 
        }
        // name.length >= 2
        //     ? this.setState({nameValid: false})
        //     : this.setState({nameValid: 'Full Name at least 2 characters'}) 

        // const re = /^[a-zA-Z0-9_ ]*$/;
        // re.test(name)
        //     ? this.setState({nameValid: false})
        //     : this.setState({nameValid: 'Full Name Invalid'}) 

        const email = this.state.email;
        const email_re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
        if(email.length > 0){
            email_re.test(email)
                ? this.setState({emailValid: false})
                : this.setState({emailValid: 'Email Invalid'})
        } else {
            this.setState({emailValid: false})
        }

        const company = this.state.company;
        if (company) {
            re.test(company)
                ? this.setState({companyValid: false})
                : this.setState({companyValid: 'Company Invalid'}) 
        } else {
            this.setState({companyValid: false}) 
        }
        // company.length >= 2 
        //     ? this.setState({companyValid: false})
        //     : this.setState({companyValid: 'Company at least 2 characters'}) 
        
        // re.test(company)
        //     ? this.setState({companyValid: false})
        //     : this.setState({companyValid: 'Company Invalid'}) 

        const message = this.state.message;
        if(message) {
            re.test(message)
                ? this.setState({messageValid: false})
                : this.setState({messageValid: 'Message Invalid'}) 
        } else {
            this.setState({messageValid: false})
        }
        // message.length >= 2 
        //     ? this.setState({messageValid: false})
        //     : this.setState({messageValid: 'Message at least 2 characters'}) 
    
        // re.test(message)
        //     ? this.setState({messageValid: false})
        //     : this.setState({messageValid: 'Message Invalid'}) 

        this.setState({isSubmitted: false}, this.confirmValidation.bind(this));
    }

    confirmValidation() {
        const {
            nameValid,
            name,
            emailValid,
            email,
            companyValid,
            company,
            messageValid,
            message,
        } = this.state;
        (!nameValid &&  !!name) &&
        (!emailValid && !!email) &&
        (!companyValid && !!company) &&
        (!messageValid && !!message)
            ? this.setState({isValid: true})
            : this.setState({isValid: false})
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const self = this;
        const { isValid, reCaptchaToken } = this.state
        if(!!isValid && !!reCaptchaToken) {
            self.setState({loading: true});
            const { 
                purpose,
                name,
                email,
                company,
                message,
            } = this.state
            let templateParams = {
                from_name: name,
                from_email: email,
                from_purpose: purpose,
                from_company: company,
                message,
            }
            emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, EMAIL_JS_USER_ID)
                .then(function(response) {
                    self.setState({isSubmitted: true, loading: false}) 
                }, function(error) {
                    self.setState({loading: true});
                    alert('Can not send email')
                    console.log('FAILED...', error);
                });
        }
    }

    render() {
        let {
            isValid,
            loading,
            nameValid,
            emailValid,
            companyValid,
            messageValid,
        } = this.state;

        let submit = !!isValid ? 'btn-primary' : 'btn-greyout btn-error';

        if (this.state.isSubmitted) { 
            return (
                <div className="form-approval">
                    <h4>You’re all set!</h4>
                    <p className="small mt-2">A member of 0xBlock team will get back to you shortly.</p>
                </div>
            )
        }
        else {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="select">
                    Purpose
                    <select
                        className="form-element"
                        type="text" 
                        name="purpose" 
                        value={this.state.purpose} 
                        onChange={this.handleChange}
                        required
                    >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Investement">Investement</option>
                        <option value="Partnership">Partnership</option>
                    </select>
                </label>
                <label>
                    Full name
                    <input
                        className="form-element" 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange}
                        placeholder="Enter your name" 
                        minLength="2"
                        required
                    />
                    {nameValid && <small className="text-secondary">{nameValid}</small>}
                </label>
                <label>
                    Email address
                    <input
                        className="form-element" 
                        type="email" 
                        name="email"
                        autoComplete="off"
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        placeholder="Enter your email address..." 
                        minLength="2"
                        required
                    />
                    {emailValid && <small className="text-secondary">{emailValid}</small>}
                </label>
                <label>
                    Company
                    <input
                        className="form-element" 
                        type="text" 
                        name="company" 
                        value={this.state.company} 
                        onChange={this.handleChange} 
                        placeholder="Enter your company..." 
                        minLength="2"
                        required
                    />
                    {companyValid && <small className="text-secondary">{companyValid}</small>}
                </label>
                <label>
                    Message
                    <textarea
                        className="form-element" 
                        value={this.state.message} 
                        style={{resize: 'none'}}
                        name="message"
                        onChange={this.handleChange} 
                        rows="5"
                        maxLength="200"
                        placeholder="Enter your message..." 
                        minLength="2"
                        required
                    />
                    {messageValid && <small className="text-secondary">{messageValid}</small>}
                </label>
                {/* <label className="checkbox">
                    Accept 0xBlock’s  <Link to="/privacy">Privacy Policy</Link>
                    <input
                        className="form-element"
                        name="privacy"
                        type="checkbox"
                        checked={this.state.privacy}
                        onChange={this.handleChange} />
                    <span></span>
                </label> */}
                <div className="text-center">
                    <GoogleReCaptchaProvider reCaptchaKey={ReCAPTCHA_SITE_KEY}>
                        <GoogleReCaptcha onVerify={this.handleVerifyReCaptcha} />
                    </GoogleReCaptchaProvider>
                </div>
                <button className={`btn btn-wide d-flex ${submit}`} type="submit" disabled={!!loading && isValid}>
                    Submit {!!loading && <div className="spinner ms-2"></div>}
                </button>
            </form>
          );
        }
    }
}

const Form = () => {
    return (
        <ContactForm />
    )
}

export default Form