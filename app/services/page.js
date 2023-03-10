'use client';
import './page.css'
import { useRouter  } from 'next/navigation';

import { useState, useEffect } from "react"

export default function Services() {

    const router = useRouter();

    const [selectedFilter, setSelectedFilter] = useState('');

    function handleClick(craft) {
        setSelectedFilter(craft);

    }

    return (
        <>


            {/* cards  */}

            <div className="container">
                <div className="services">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"></img>
                            <h3>Home Repairs</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>When stuff breaks, your local craftsman is here to fix it. Our home repair services can save you the time and money when it comes to fixing things around your home.</p>
                            <button onClick={() => router.push('/services/HOME_REPAIRS')}><a>Book a pro</a></button>
                        </div>
                    </div>
                </div>

                <div className="services">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://static.thenounproject.com/png/3533069-200.png"></img>
                            <h3>Plumbing Work</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Need Plumbing? we got you covered! Select umong the best plumbers in kingdom.</p>
                            <button onClick={() => router.push('/services/PLUMBING_WORK')}><a>Book a pro</a></button>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://www.freepnglogos.com/uploads/warning-sign-png/warning-sign-volts-amps-and-other-electric-6.png"></img>
                            <h3>Electrical Work</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Lightning, remodeling, Wiring Repairs, Outlet Repair, and more from our best professional Electricians in Town.</p>
                            <button onClick={() => router.push('/services/ELECTRICAL_WORK')}><a>Book a pro</a></button>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://findicons.com/files/icons/2549/moving_and_packing_icons/512/moving_and_packing_icon_set_01.png"></img>
                            <h3>Moving and packing</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Best of the best for you if you want to move from Town, or just want to transport a few things. Also with extra services like Furniture assembly and disassembly. </p>
                            <button onClick={() => router.push('/services/MOVING_AND_PACKING')}><a>Book a pro</a></button>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://www.freepnglogos.com/uploads/ac-png/ac-akshaya-gardeens-home-7.png"></img>
                            <h3>HVAC repair</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Central Air Conditioning Repair or Maintenance, Heating System Repair or Maintenance? Just call a pro to warm you up in winter or cool you off in summer.</p>
                            <button onClick={() => router.push('/services/HVAC_REPAIR')}><a>Book a pro</a></button>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://icon-library.com/images/carpentry-icon/carpentry-icon-15.jpg"></img>
                            <h3>Carpentry</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Our carpentry contractors have the skills, tools, and experience necessary to complete a wide range of carpentry projects.</p>
                            <button onClick={() => router.push('/services/CARPENTRY')}><a>Book a pro</a></button>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://cdn.discordapp.com/attachments/1062648819801653329/1064140995584872530/Pngtreepaint_brush_line_black_icon_4008027.png"></img>
                            <h3>Painting</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Walls, ceilings, woodwork, and metalwork. Interior and exterior painting, as well as special finishes services. Our guys can refresh the look of your space! </p>
                            <button onClick={() => router.push('/services/PAINTING')}><a>Book a pro</a></button>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"></img>
                            <h3>Power Washing</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Buildings, decks, sidewalks, driveways, graffiti, carpets, and more. You only need one man with his high-pressure pump to clean it all up.</p>
                            <button onClick={() => router.push('/services/POWER_WASHING')}><a>Book a pro</a></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


