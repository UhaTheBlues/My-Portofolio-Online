import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CertifSlider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="/images/Sertifikat/Sertifikat1.jpg" />
                </div>
                <div>
                    <img src="/images/Sertifikat/Sertifikat2.jpg" />
                </div>
                <div>
                    <img src="/images/Sertifikat/Sertifikat3.jpg" />
                </div>
                <div>
                    <img src="/images/Sertifikat/Sertifikat4.jpg" />
                </div>
                <div>
                    <img src="/images/Sertifikat/Sertifikat5.jpg" />
                </div>
                <div>
                    <img src="/images/Sertifikat/Sertifikat6.jpg" />
                </div>
            </Carousel>
        );
    }
};

export default CertifSlider;
