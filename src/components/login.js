import React from 'react'

function Login() {
    return (
        <div>
            <section className="login-form py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <h2 className="text-center mb-4">Login</h2>
                            <form>
                                <div className="form-group mt-2">
                                    <label for="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" required/>
                                </div>
                                <div className="form-group form-check my-2">
                                    <input type="checkbox" className="form-check-input" id="remember"/>
                                        <label className="form-check-label" for="remember">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </form>
                            <div className="mt-3 text-center">
                                <a href="/">Forgot Password?</a>
                            </div>
                            <div className="mt-2 text-center">
                                <a href="/">Don't have an account? Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login
