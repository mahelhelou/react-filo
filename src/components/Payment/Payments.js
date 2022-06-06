import payment from "../../assets/images/payment.png";


function Payments() {
    return (
        <section class="paymentSection">
            <div class="container">
                <div class="row mb-3">
                    <div class="col-md-4 text-center align-self-center">
                        <img src={payment} alt="" />
                    </div>
                    <div class="col-md-4 align-self-center">
                        <h5 class="mb-3 font-weight-bold">ما مميزات الاشتراك في موقع فيلو؟</h5>
                        <ul class="plans__features">
                            <li>مسارات لا نهائية من القصص</li>
                            <li>مشاهدة بلا حدود</li>
                            <li>الإلغاء في أي وقت</li>
                            <li>تحميل القصص المفضلة للاستماع إليها بدون إنترنت</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header text-center">
                                <h2>
                                    عملية دفع آمنة
                                </h2>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">طريقة الدفع</h5>
                                <p class="card-text">الخطوة 2/2 تفاصيل الدفع</p>
                                <div class="card-payment">
                                    <div class="card">
                                        <h4>بطاقة الائتمان / الخصم المباشر</h4>
                                        <p class="mt-5">ادفع ببطاقة الائتمان أو الخصم. بعد إدخال تفاصيل بطاقتك، قد تتم
                                            إعادة توجيهك إلى checkout.com أو البنك الذي تتعامل معه لإكمال
                                            طريقة الدفع بنظام الأمان ثلاثي الأبعاد</p>
                                        <form>
                                            <div class="form-group">
                                                <label for="formGroupExampleInput">رقم البطاقة</label>
                                                <input type="text" class=" incard" id="formGroupExampleInput" placeholder="123456789" />
                                                <span>
                                                    <i class="fas fa-credit-card"></i>
                                                </span>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-group ">
                                                        <label for="formGroupExampleInput2">تاريخ الانتهاء </label>
                                                        <input type="text" id="formGroupExampleInput2" placeholder="15/12/2023" />
                                                    </div>
                                                </div>
                                                <div class="col confirm">
                                                    <div class="form-group">
                                                        <label for="formGroupExampleInput2">رمز التحقق من البطاقة</label>
                                                        <input type="text" id="formGroupExampleInput2" placeholder="123" />
                                                        <span>
                                                            <i class="fas fa-credit-card"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="form-check mt-4">
                                    <label class="form-check-label" for="defaultCheck1">
                                        أقبل الشروط
                                        <a href="">Storytel Unlimited</a>
                                    </label>
                                    <input class="form-check-input-reverse" type="checkbox" value="" id="defaultCheck1" />
                                </div>
                                <h3 class="listeNow mt-4">استمع بلا حدود</h3>
                                <h6 class="text-center pay">ادفع الأن <mark>50%</mark></h6>
                                <a href="#" class="btn btn-block">اشترك الان</a>
                                <p class="p">من الجيد أن تعرف: بعد 3 أيام ، سيتحول الاشتراك تلقائيًا إلى اشتراك منتظم
                                    وستدفع 50 دولار بعد 30 يوم
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Payments;