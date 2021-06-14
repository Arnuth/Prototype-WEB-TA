import React from "react";
import { Link } from "react-router-dom";


const Forgotpassword = () => {
  return (
      <div className="d-flex align-items-center auth register-bg-1 theme-one px-0">
        <div className="row w-100 mx-0">
          <div className="col-xl-4 col-lg-6 col-sm-8 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              
              <form className="pt-3">
                <div className="form-group">
                <h4 className="font-weight-light text-center">
                Forgot Password
                </h4>
                  <input
                    type="text"
                    className="form-control form-control-lg text-center"
                    id="exampleInputUsername1"
                    placeholder="กรุณากรอก username ของท่านที่จำได้"
                  />
                </div>
                
                
                <div className="mb-4">
                  <div className="form-group text-center">
                    รหัสผ่านใหม่ของท่าน<br />จะถูกส่งเข้าไปยังอีเมล์ภายในองกรณ์
                    <small className="d-block text-muted">กรุณาเข้าเช็ครหัสผ่านใหม่ที่ได้รับทางอีเมล์ yourname.sr@cjexpress.co.th</small>
                  </div>
                </div>
                <div className="mt-3">
                  <Link
                    className="btn btn-block btn-primary font-weight-medium auth-form-btn"
                    to="/login"
                  >
                    Reset Password
                  </Link>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Forgotpassword;
