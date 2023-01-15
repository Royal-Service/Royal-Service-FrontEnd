import './page.css'

export default function Search() {
  return (
    <>
      <div class="flexbox">
        <div class="search">
          <h1>One Search, Many Services</h1>
          <h3>Click on search icon, then type your keyword.</h3>
          <div>
            <input type="text" placeholder="Search for services . . . ." />
            <div class="sub-main">
               <button class="button-three">Search</button>
               </div>
          </div>
        </div>
      </div>

  {/* cards  */}

      <div class="container">
        <div class="services">
            <div class="face face1">
                <div class="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"></img>
                    <h3>Home Repairs</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        
        <div class="services">
            <div class="face face1">
                <div class="content">
                    <img src="https://static.thenounproject.com/png/3533069-200.png"></img>
                    <h3>Plumbing Work</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="services">
            <div class="face face1">
                <div class="content">
                    <img src="https://www.freepnglogos.com/uploads/warning-sign-png/warning-sign-volts-amps-and-other-electric-6.png"></img>
                    <h3>Electrical Work </h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="services">
            <div class="face face1">
                <div class="content">
                    <img src="https://findicons.com/files/icons/2549/moving_and_packing_icons/512/moving_and_packing_icon_set_01.png"></img>
                    <h3>Moving and packing</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="services">
            <div class="face face1">
                <div class="content">
                    <img src="https://www.freepnglogos.com/uploads/ac-png/ac-akshaya-gardeens-home-7.png"></img>
                    <h3>HVAC repair</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="services">
            <div class="face face1">
                <div class="content">
                    <img src="https://icon-library.com/images/carpentry-icon/carpentry-icon-15.jpg"></img>
                    <h3>Carpentry</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="services">
            <div class="face face1">
                <div class="content">
                    <img src="https://cdn.discordapp.com/attachments/1062648819801653329/1064140995584872530/Pngtreepaint_brush_line_black_icon_4008027.png"></img>
                    <h3>Painting</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="services">
            <div class="face face1">
                <div class="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"></img>
                    <h3>Others</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
      
    </>
  );
}
