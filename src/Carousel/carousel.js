import React from "react";
import '../App.css';
function Carousel() {
    const opions=[
        {h:"Kamla Hope Co Company",p:"Nullam commodo nisl lacinia, mattis nibh at, mollis justo. Integer massa sem, interdum sagittis velit ut, pretium porta libero.  Vivamus commodo augue lorem, ut laoreet risus pharetra in, vulputate est non, porttitor erat."},
        {h:"Adham Hope Co Company",p:"Nullam commodo nisl lacinia, mattis nibh at, mollis justo. Integer massa sem, interdum sagittis velit ut, pretium porta libero.  Vivamus commodo augue lorem, ut laoreet risus pharetra in, vulputate est non, porttitor erat."},
        {h:"Fatma Hope Co Company",p:"Nullam commodo nisl lacinia, mattis nibh at, mollis justo. Integer massa sem, interdum sagittis velit ut, pretium porta libero.  Vivamus commodo augue lorem, ut laoreet risus pharetra in, vulputate est non, porttitor erat."},
        
    ];
    const style={ textAlign: 'center',color: '#fff'}
    const backG={
      background:'url(/img/testimonials_bg.jpg)',
      backgroundAttachment: 'fixed',
      backgroundPosition:'right'
    }
  return (
    <div id="tclient" className="carousel slide" data-ride="carousel" style={backG}>
        <ol class="carousel-indicators">
          <li data-target="#tclient" data-slide-to="0" className="active"></li>
          <li data-target="#tclient" data-slide-to="1"></li>
          <li data-target="#tclient" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner ">
          <div className="carousel-item active tclientcon">
            <img src="img/comment1.jpg" alt="..." className="rounded-circle"/>
            <p>Nullam commodo nisl lacinia, mattis nibh at, mollis justo. Integer massa sem, interdum sagittis velit ut, pretium porta libero.  Vivamus commodo augue lorem, ut laoreet risus pharetra in, vulputate est non, porttitor erat.</p>
              <h5>Adham Hope <span>Co Company</span></h5>
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>
          <div className="carousel-item tclientcon">
            <img src="img/comment2.jpg"  alt="..." className="rounded-circle"/>
            <p>Nullam commodo nisl lacinia, mattis nibh at, mollis justo. Integer massa sem, interdum sagittis velit ut, pretium porta libero.  Vivamus commodo augue lorem, ut laoreet risus pharetra in, vulputate est non, porttitor erat.</p>
              <h5>Adham Hope <span>Co Company</span></h5>
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>
          <div className="carousel-item tclientcon">
            <img src="img/comment3.jpg"  alt="..." className="rounded-circle"/>
            <p>Nullam commodo nisl lacinia, mattis nibh at, mollis justo. Integer massa sem, interdum sagittis velit ut, pretium porta libero.  Vivamus commodo augue lorem, ut laoreet risus pharetra in, vulputate est non, porttitor erat.</p>
              <h5>Adham Hope <span>Co Company</span></h5>
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>
            <br/><br/><br/>
        </div>
      </div>
  );
}

export default Carousel;
