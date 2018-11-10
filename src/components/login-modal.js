import React, { Component } from 'react';

class LoginModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showOTP: false,
      inputEmail: "",
      errorMessage: ""
    }
    this.sendOTP = this.sendOTP.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  sendOTP(){
    if(!this.state.inputEmail) {
      this.setState({
        errorMessage: "Enter Email ID"
      })
    } else {
      this.setState({
        showLogin: false,
        showOTP: true
      })
    }
  }

  updateInput(e) {
    const name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                <i className="fa fa-sign-in"></i> Login
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
              {this.state.showLogin ? 
                <div class="form-group">
                  <input type="email" name="inputEmail" onChange={(e) => this.updateInput(e)} className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter valid email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  <span className="text-danger">{this.state.errorMessage}</span>
                </div>:null}
                {this.state.showOTP ? 
                <div class="form-group">
                  <input type="text" className="form-control" id="inputOTP" aria-describedby="otpHelp" placeholder="Enter OTP"/>
                  <small id="otpHelp" className="form-text text-muted">Enter the OTP sent to your email {}</small>
                </div>:null}
              </form>              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              {this.state.showLogin ? 
              <button type="button" className="btn btn-info" onClick={this.sendOTP}>
                <i class="fa fa-envelope-open" aria-hidden="true"></i> Send OTP
              </button>:null}
              {this.state.showOTP ? 
              <button type="button" className="btn btn-info">
                <i class="fa fa-envelope-open" aria-hidden="true"></i> Verify OTP
              </button>:null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;