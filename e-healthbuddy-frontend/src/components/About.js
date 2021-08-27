
import React from 'react'
import './about.css'

const About = () => {
    return (
        <div>
            <div class="bg-dark">
                <div class="container text-white py-5">
                    <div class="row h-100 align-items-center py-5">
                        <div class="col-lg-6">
                            <h1 class="display-4">About us</h1>
                            <p class="lead mb-0">Healthify is our effort to simply the lives of millions of users by providing easy to access centralized system for all there needs.</p>
                            <p class="lead text-muted">Designed with love in India.</p>
                        </div>
                        <div class="col-lg-6 d-none d-lg-block"><img src="images/about.png" alt="" class="img-fluid" /></div>
                    </div>
                </div>
            </div>

            <div class="bg-white py-5">
                <div class="container py-5">
                    <div class="row align-items-center mb-5">
                        <div class="col-lg-6 order-2 order-lg-1"><i class="fas fa-heartbeat fa-2x mb-3 text-primary" ></i> 
                            <h2 class="font-weight-light">What is Healthify?</h2>
                            <p class="font-italic text-muted mb-4">Healthify helps people track their health history through centralized, secure and accurate information and much more. We make tracking simpler, because getting information doesn’t need to be any harder!</p>
                        </div>
                        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="images/healthify.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-5 px-5 mx-auto"><img src="images/more.png" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                        <div class="col-lg-6"><i class="fas fa-mortar-pestle fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light">More than just an app</h2>
                            <p class="font-italic text-muted mb-4">Healthify is also a consultation platform for doctors who after seeing your history can also give better suggestions for staying healthy and fit. It is also a source of latest health related blogs and trends!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-dark py-5">
                <div class="container py-5">
                    <div class="row mb-4">
                        <div class="col-lg-5">
                            <h2 class="display-4 font-weight-light text-white">Our team</h2>
                            <p class="font-italic text-light">Meet our veterans from various domains.</p>
                        </div>
                    </div>

                    <div class="row text-center">
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="images/1.jpeg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Surya Saini</h5><span class="small  text-muted">CEO - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="images/5.jpeg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Naval Gazta</h5><span class="small text-muted">Designer</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="images/2.jpeg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Saurabh Mahamuni</h5><span class="small text-muted">Consultant</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="images/3.jpeg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Akshata</h5><span class="small text-muted">Consultant</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="images/4.jpeg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Sayali Badgujar</h5><span class="small text-muted">Advisor</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
