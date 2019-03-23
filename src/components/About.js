import React, { Component } from 'react';
import { Card, CardImg, CardText, CardImgOverlay, Carousel, CarouselItem, CarouselIndicators} from 'reactstrap';
import { aboutStyles as styles } from "../assets/styles/aboutStyles";
import about from "../assets/images/about.png";
import carousel1 from "../assets/images/carousel1.jpeg";
import carousel2 from "../assets/images/carousel2.jpeg";
import carousel3 from "../assets/images/carousel3.jpeg";
import carousel4 from "../assets/images/carousel4.jpeg";

// let c1 = {carousel1};
// let c2 = {carousel2};
// let c3 = {carousel3};
// let c4 = {carousel4};

// const items = [
// 	{
// 		src: c1
// 	},
// 	{
// 		src: c2
// 	},
// 	{
// 		src: c3
// 	},
// 	{
// 		src: c4
// 	}
// ];

const items = [
	{
		src: carousel1
	},
	{
		src: carousel2
	},
	{
		src: carousel3
	},
	{
		src: carousel4
	}
];


class About extends Component {

	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.goToIndex = this.goToIndex.bind(this);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem key={item.src} onExiting={this.onExiting} onExited={this.onExited} >
					<img src={item.src} alt={item.altText} width="600"/>
				</CarouselItem>
			);
		});

		return (
			<div>
				<Card>
					<CardImg width="100%" src={about} />
					<CardImgOverlay style={{ backgroundColor: 'rgba(50, 105, 193, 0.7'}}>
						<div className="d-flex flex-row flex-wrap justify-content-around align-items-center">
							<div style={{ maxWidth: 600, marginTop: 70 }}>
							<Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
								<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
								{slides}
							</Carousel>
							</div>
							<div className="md-6" style={styles.container}>
								<h3 className="heading" style={styles.heading}> About </h3>
								<p className="normal" style={styles.text}>
									Jan Elaaj brings an affordable trusted primary healthcare solution to your neighbourhood or at
									your doorstep. Focused group discussions between various healthcare stakeholders and across
									neighbourhoods helped design an optimal solution.
								</p>

								<h4 className="heading" style={{...styles.heading2, ...styles.text}}> Advisory Group: </h4>
								<CardText style={{...styles.text, ...styles.headText }}> Dr. M K Bhan: Padma Bhusan, Former Secretary DBT </CardText>
								<CardText style={{...styles.text, ...styles.headText }}> Prof D Prabhakaran: PHFI </CardText>

								<h4 className="heading" style={{...styles.heading2, ...styles.text}}> Co-Founders: </h4>
								<CardText style={{...styles.text, ...styles.headText }}> Asif Khair: Hewlett Packard, Ericsson </CardText>
								<CardText style={{...styles.text, ...styles.headText }}> Sanjay Rajak: Ericsson </CardText>

								<h4 className="heading" style={{...styles.heading2, ...styles.text}}> Incubation: </h4>
								<CardText style={{...styles.text, ...styles.headText }}> L-incubator, IIM Lucknow, Noida Campus </CardText>
							</div>
						</div>
					</CardImgOverlay>
				</Card>
			</div>
		);
	}
}

export default About;