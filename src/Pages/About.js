import React from "react";

function About(){
    render(
         <div class="ps-about">
            <div class="container">
                <ul class="ps-breadcrumb">
                    <li class="ps-breadcrumb__item"><a href="index.html">Home</a></li>
                    <li class="ps-breadcrumb__item active" aria-current="page">About us</li>
                </ul> 
                <section class="ps-banner--round">
                    <div class="ps-banner">
                        <div class="ps-banner__block">
                            <div class="ps-banner__content">
                                <div class="ps-logo"><a href="index.html"> <img src="img/logo.png" alt=""/></a></div>
                                <h2 class="ps-banner__title">Your one and only <br/>online pharmacy!</h2>
                                <div class="ps-banner__btn-group">
                                    <div class="ps-banner__btn"><img src="img/icon/virus.svg" alt=""/>Up to 5 users simultaneously</div>
                                    <div class="ps-banner__btn"><img src="img/icon/ribbon.svg" alt=""/>Has HEALTH certificate</div>
                                </div><a class="ps-banner__shop bg-yellow" href="#">About</a>
                            </div>
                            <div class="ps-banner__thumnail"><img class="ps-banner__round" src="img/round5.png" alt=""/><img class="ps-banner__image" src="img/girl-face-mask.png" alt=""/></div>
                        </div>
                    </div>
                </section>
              
            </div>
          
            <div class="container">
                <section class="ps-section--blog">
                    <h3 style="background-color: plum; padding: 19px;" class="ps-section__title">From the blog</h3>
                    <div class="ps-section__carousel">
                        <div class="owl-carousel" data-owl-auto="false" data-owl-loop="true" data-owl-speed="13000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="true" data-owl-item="3" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="2" data-owl-item-lg="3" data-owl-item-xl="3" data-owl-duration="1000" data-owl-mousedrag="on">
                            <div class="ps-section__item">
                                <div class="ps-blog--latset">
                                    <div class="ps-blog__thumbnail"><a href="blog-post1.html"><img src="img/blog/blog2-496x262.jpg" alt="alt"/></a>
                                        <div class="ps-blog__badge"><span class="ps-badge__item">MEDIC</span><span class="ps-badge__item">PHARMACY</span><span class="ps-badge__item">SALE</span>
                                        </div>
                                    </div>
                                    <div class="ps-blog__content">
                                        <div class="ps-blog__meta"> <span class="ps-blog__date">May 18, 2021</span><a class="ps-blog__author" href="#">Alfredo Austin</a></div><a class="ps-blog__title" href="blog-post1.html">[PDF REPORT] – Impact of wearing masks on social behavior</a>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-section__item">
                                <div class="ps-blog--latset">
                                    <div class="ps-blog__thumbnail"><a href="blog-post1.html"><img src="img/blog/blog11-496x262.jpg" alt="alt"/></a>
                                        <div class="ps-blog__badge"><span class="ps-badge__item">MEDIC</span><span class="ps-badge__item">PHARMACY</span><span class="ps-badge__item">SALE</span>
                                        </div>
                                    </div>
                                    <div class="ps-blog__content">
                                        <div class="ps-blog__meta"> <span class="ps-blog__date">May 18, 2021</span><a class="ps-blog__author" href="#">Alfredo Austin</a></div><a class="ps-blog__title" href="blog-post1.html">The latest tests of popular masks in accordance with CV2s standards</a>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-section__item">
                                <div class="ps-blog--latset">
                                    <div class="ps-blog__thumbnail"><a href="blog-post1.html"><img src="img/blog/blog13-496x262.jpg" alt="alt"/></a>
                                        <div class="ps-blog__badge"><span class="ps-badge__item">MEDIC</span><span class="ps-badge__item">PHARMACY</span><span class="ps-badge__item">SALE</span>
                                        </div>
                                    </div>
                                    <div class="ps-blog__content">
                                        <div class="ps-blog__meta"> <span class="ps-blog__date">May 18, 2021</span><a class="ps-blog__author" href="#">Alfredo Austin</a></div><a class="ps-blog__title" href="blog-post1.html">The latest tests of popular masks in accordance with CV2s standards</a>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-section__item">
                                <div class="ps-blog--latset">
                                    <div class="ps-blog__thumbnail"><a href="blog-post1.html"><img src="img/blog/blog12-496x262.jpg" alt="alt"/></a>
                                        <div class="ps-blog__badge"><span class="ps-badge__item">MEDIC</span><span class="ps-badge__item">PHARMACY</span><span class="ps-badge__item">SALE</span>
                                        </div>
                                    </div>
                                    <div class="ps-blog__content">
                                        <div class="ps-blog__meta"> <span class="ps-blog__date">May 18, 2021</span><a class="ps-blog__author" href="#">Alfredo Austin</a></div><a class="ps-blog__title" href="blog-post1.html">New special offer for customers who have been with us for 10 years</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
             
            </div>
        </div>
       
    );
}

export default About;