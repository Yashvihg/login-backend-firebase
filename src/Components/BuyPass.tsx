
import './BuyPass.css';
const BuyPass = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form className="loginForm">
                  <h3 className=" mb-3 pb-3">Log in</h3>

                  <div className="form-outline mb-4">
                  <label className="form-label">Enter Phone Number</label>
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                    />
                   
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label">Enter OTP</label>
                    <input
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                    />
                  
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-info btn-lg btn-block"
                      type="button"
                    >
                      Login
                    </button>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <a href="#!" className="link-info">
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block loginImage">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login image"
                className="w-100 vh-100"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyPass;
