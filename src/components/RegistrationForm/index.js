import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameErrorMsg: false,
    showLastNameErrorMsg: false,
    errorFirstNameMsg: '',
    errorlastNameMsg: '',
    showFormContainer: true,
  }

  onClickShowForm = () =>
    this.setState({showFormContainer: true, firstName: '', lastName: ''})

  renderSuccessContainer = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
        className="success-img"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        type="button"
        className="another-response-btn"
        onClick={this.onClickShowForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  onClickSubmit = async event => {
    event.preventDefault()

    const {
      firstName,
      lastName,
      showFirstNameErrorMsg,
      showLastNameErrorMsg,
      errorFirstNameMsg,
      errorlastNameMsg,
    } = this.state

    if (firstName === '' && lastName==='') {
      this.setState({
        showFirstNameErrorMsg: true,
        errorFirstNameMsg: 'Required',
        showLastNameErrorMsg: true,
        errorlastNameMsg: 'Required'
      })
    }else if (firstName === '') {
      this.setState({
        showFirstNameErrorMsg: true,
        errorFirstNameMsg: 'Required',
      })
    } else if (lastName === '') {
      this.setState({
        showLastNameErrorMsg: true,
        errorlastNameMsg: 'Required',
      })
    } else {
      this.setState({showFormContainer: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({showLastNameErrorMsg: true, errorlastNameMsg: 'Required'})
    } else {
      this.setState({errorlastNameMsg: ''})
    }
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({
        showFirstNameErrorMsg: true,
        errorFirstNameMsg: 'Required',
      })
    } else {
      this.setState({errorFirstNameMsg: ''})
    }
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  renderLastName = () => {
    const {lastName} = this.state

    return (
      <div>
        <label htmlFor="last-name" className="input-label">
          LAST NAME
        </label>
        <input
          type="text"
          id="last-name"
          className="input-field"
          onBlur={this.onBlurLastName}
          onChange={this.onChangeLastName}
          value={lastName}
        />
      </div>
    )
  }

  renderFirstName = () => {
    const {firstName} = this.state

    return (
      <div>
        <label htmlFor="first-name" className="input-label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="first-name"
          className="input-field"
          onBlur={this.onBlurFirstName}
          value={firstName}
          onChange={this.onChangeFirstName}
        />
      </div>
    )
  }

  render() {
    const {
      showFirstNameErrorMsg,
      showLastNameErrorMsg,
      errorFirstNameMsg,
      errorlastNameMsg,
      showFormContainer,
    } = this.state
    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        {showFormContainer ? (
          <form className="form-container">
            {this.renderFirstName()}
            {showFirstNameErrorMsg && (
              <p className="error-msg">{errorFirstNameMsg}</p>
            )}
            {this.renderLastName()}
            {showLastNameErrorMsg && (
              <p className="error-msg">{errorlastNameMsg}</p>
            )}
            <button
              type="submit"
              className="submit-btn"
              onClick={this.onClickSubmit}
            >
              Submit
            </button>
          </form>
        ) : (
          this.renderSuccessContainer()
        )}
      </div>
    )
  }
}

export default RegistrationForm
