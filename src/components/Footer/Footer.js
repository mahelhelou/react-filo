

function Footer() {
    return (
        <footer class="site-footer ">
            <div class="footer_black">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <h3>تسجيل الدخول في الموقع </h3>
                            <div class="mt-3">
                                <div class="offset-md-2">
                                    <form class="subscribeForm" action="">
                                        <div class="form-group">
                                            <button class="btn subscribeBtn">تسجيل الدخول</button>
                                            <input type="email" class="form-control subscribeInput" placeholder="االبريد الالكتروني" />
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="footer-menu text-center">
                                <ul>
                                    <li><a href="#">من نحن</a></li>
                                    <li><a href="#">تواصل معنا</a></li>
                                    <li><a href="#">شروط</a></li>


                                </ul>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="row end-page">
                                <div class="col-md-3">
                                    <div class="footer-menu text-center">
                                        <ul>
                                            <li><a>palestine,Gaza</a></li>
                                            <li><a>+44 345 678 903</a></li>
                                            <li><a>filo@gmail.com</a></li>


                                        </ul>

                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="footer-menu text-center">
                                        <ul>
                                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>


                                        </ul>

                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer