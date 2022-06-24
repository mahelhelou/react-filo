import { Modal, Button } from 'react-bootstrap'
import airPlane from '../../assets/images/airplane.gif'

// Modals components
function Modals() {
  return (
    <>
      <div
        className="modal fade"
        id="login-form"
        tabindex="-1"
        role="dialog"
        aria-labelledby="login-form-label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <Button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </Button>

              <img src={airPlane} alt="airplane" />
              <div className="form-title text-center">
                <h4 className="text-center mb-3">تسجيل دخول</h4>
                <div className="d-flex flex-column text-center">
                  <form>
                    <div className="form-group">
                      <input
                        id="email1"
                        type="email"
                        placeholder="اسم المستخدم أو البريد الإلكتروني"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="password"
                        type="password"
                        placeholder="كلمة المرور"
                      />
                    </div>
                    <Button className=" btn btn-block btn11 mt-1" type="button">
                      تسجيل الدخول
                    </Button>
                    <p className="mt-3">
                      اذا لم يكن لديك حساب أنشئ
                      <a
                        href="void()"
                        data-toggle="modal"
                        data-target="#sign-form"
                        data-dismiss="modal"
                      >
                        حساب جديد
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        fade
        id="sign-form"
        tabindex="-1"
        role="dialog"
        aria-labelledby="sign-form-label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <Button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </Button>

              <img src={airPlane} alt="airplane" />
              <div className="form-title text-center">
                <h4 className="text-center mb-3">حساب جديد</h4>
                <div className="d-flex flex-column text-center">
                  <form>
                    <div className="form-group">
                      <input id="name1" type="text" placeholder="الاسم" />
                    </div>
                    <div className="form-group">
                      <input
                        id="email1"
                        type="email"
                        placeholder="اسم المستخدم أو البريد الإلكتروني"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="date1"
                        type="text"
                        placeholder="تاريخ الميلاد"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="password"
                        type="password"
                        placeholder="كلمة المرور"
                      />
                    </div>
                    <div className="form-check mb-3 pr-3 float-right">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        تذكرني
                      </label>
                    </div>
                    <Button className=" btn btn-block btn11" type="button">
                      تسجيل جديد
                    </Button>
                    <p className="mt-3">
                      هل لديك حساب{' '}
                      <a
                        href="void()"
                        data-toggle="modal"
                        data-target="#login-form"
                        data-dismiss="modal"
                      >
                        تسجيل دخول
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Modals
