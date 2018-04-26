import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class headerCarousel extends Component {

	render(){
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			// slideToShow: 1
			// slidesToScroll: 1
		};
		return (
			<div className="carousel-wrapper">
			<Carousel>
					<div className="carouselDiv">
						<img src={require('../../Assets/images/img10.jpeg')}/>
						<p className="headerImage"></p>
					</div>
					<div>
						<img src={require('../../Assets/images/img18.jpeg')}/>
						<p className="headerImage"></p>
					</div>
					<div>
						<img src={require('../../Assets/images/img16.jpeg')}/>
						<p className="headerImage"></p>
					</div>
					<div>
						<img src={require('../../Assets/images/img11.jpeg')}/>
						<p className="headerImage"></p>
					</div>
					<div>
						<img src={require('../../Assets/images/img6.jpeg')}/>
						<p className="headerImage"></p>
					</div>
					<div>
						<img src={require('../../Assets/images/img17.jpeg')}/>
						<p className="headerImage"></p>
					</div>
			</Carousel>
			</div>
		);
	}
}

export default headerCarousel;

