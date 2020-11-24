import React from 'react'

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log('button was clicked')
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("Form was submitted")
    console.log(this.props.formValues);
  }

  render () {
    return (
      <div>

        <form onSubmit={this.props.onSubmit} action="">
          <div className="form-group">
            <label>First Name</label>
            <input 
              onChange={this.props.onChange} 
              type="text" 
              className="form-control"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              onChange={this.props.onChange} 
              type="text" 
              className="form-control"
              name="lastName"
              value={this.props.formValues.lastName}

            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              onChange={this.props.onChange} 
              type="email" 
              className="form-control"
              name="email"
              value={this.props.formValues.email}

            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input 
              onChange={this.props.onChange} 
              type="text" 
              className="form-control"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input 
              onChange={this.props.onChange} 
              type="text" 
              className="form-control"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button
            onClick={this.handleClick} 
            className="btn btn-primary"
          >Save</button>
          {this.props.error && (<p className="text-danger">{this.props.error.message}</p> 
          )}
        </form>
      </div>
    )
  }
}

export default BadgeForm