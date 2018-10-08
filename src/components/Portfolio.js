import React from 'react';
import Img1 from '../bell/img/porf-1.jpg';
import Img2 from '../bell/img/porf-2.jpg';
import Img3 from '../bell/img/porf-3.jpg';
import Img4 from '../bell/img/porf-4.jpg';
import Img5 from '../bell/img/porf-5.jpg';
import Img6 from '../bell/img/porf-6.jpg';
import Img7 from '../bell/img/porf-7.jpg';
import Img8 from '../bell/img/porf-8.jpg';


class Portfolio extends React.Component {
  render() {
    return (
    <section class="portfolio" id="portfolio">
    <div class="container text-center">
      <h2>
          Portfolio
        </h2>

      <p>
        Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, Per nihil dicant commodo an.
      </p>
    </div>

    <div class="portfolio-grid">
      <div class="row">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="card card-block">
            <a href="#"><img alt="" src={Img1}/>
              <div class="portfolio-over">
                <div>
                  <h3 class="card-title">
                    The Dude Rockin
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div></a>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="card card-block">
            <a href="#"><img alt="" src={Img2}/>
              <div class="portfolio-over">
                <div>
                  <h3 class="card-title">
                    The Dude Rockin
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div></a>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="card card-block">
            <a href="#"><img alt="" src={Img3}/>
              <div class="portfolio-over">
                <div>
                  <h3 class="card-title">
                    The Dude Rockin
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div></a>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="card card-block">
            <a href="#"><img alt="" src={Img4}/>
              <div class="portfolio-over">
                <div>
                  <h3 class="card-title">
                    The Dude Rockin
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div></a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="card card-block">
            <a href="#"><img alt="" src={Img5}/>
              <div class="portfolio-over">
                <div>
                  <h3 class="card-title">
                    The Dude Rockin
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div></a>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="card card-block">
            <a href="#"><img alt="" src={Img6}/>
              <div class="portfolio-over">
                <div>
                  <h3 class="card-title">
                    The Dude Rockin
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div></a>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="card card-block">
            <a href="#"><img alt="" src={Img7}/>
              <div class="portfolio-over">
                <div>
                  <h3 class="card-title">
                    The Dude Rockin
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div></a>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="card card-block">
            <a href="#">
            <img alt="" src={Img8} />
              <div class="portfolio-over">
                <div>
                  <h3 class="card-title">
                    The Dude Rockin
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div></a>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
  }
}

export default Portfolio;