import React from 'react'

function Register() {
  return (
    <div>
          <section className="signup-form py-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <form>
                        <div className="form-group mt-3">
                            <label for="name">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your full name" required/>
                        </div>
                        <div className="form-group mt-3">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
                        </div>
                        <div className="form-group mt-3">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" required/>
                        </div>
                        <div className="form-group mt-3">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" className="form-control" id="confirm-password" placeholder="Confirm your password" required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button>
                    </form>
                    <div className="mt-3 text-center">
                        <a href="/">Already have an account? Login</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Register
