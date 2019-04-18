import React, {Component} from 'react';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, CardImgOverlay } from 'reactstrap';
import { styles } from '../assets/styles/servicesStyles';
import doc2 from '../assets/images/doc2.jpg';
import pharmacies from '../assets/images/pharmacies.jpg';
import radio from '../assets/images/radio.jpg';
import one from '../assets/images/1.png';
import two from '../assets/images/2.png';
import three from '../assets/images/3.png';
import four from '../assets/images/4.png';
import woman from '../assets/images/woman.png';


const RenderServiceItem = ({service}) => {
	return (
		<Card>
			<CardImg top width="100%" src={service.image} alt={service.title} />
			<CardBody>
				<CardTitle style={{ fontSize: 20, color: '#343434' }}> {service.title} </CardTitle>
				<CardSubtitle className="d-flex flex-row flex-wrap justify-content-between">
					<span style={{...styles.cardSubTitle, ...styles.normalText}}> {'Search doctors nearby'} </span>
					<span style={styles.cardText}> {'Starting at Rs. 99'} </span>
				</CardSubtitle>
			</CardBody>
		</Card>
	)
};

const srvices = [
    {
        id: 0,
        title: 'Doctors',
        image: doc2
    },
    {
        id: 1,
        title: 'Pharmacy & Clinics',
        image: pharmacies
    },
    {
        id: 2,
        title: 'Pathology and Radiology',
        image: radio
    }
]

const featurs = [
    {
		id: 0,
		logo: one,
        feature: 'Affordability',
        description: 'Discounted healthcare services for all in their neighbourhood at Jan Elaaj Clinics'
    },
    {
		id: 1,
		logo: two,
        feature: 'Standardization',
        description: 'All clinics offer similiar services and all of the doctors and our partners are verified professionals'
    },
    {
        id: 2,
		feature: 'Convenience',
		logo: three,
        description: 'You can find a Jan Elaaj Clinc and other services near you through our website as well as mobile application'
    },
    {
        id: 3,
		feature: 'Digitization',
		logo: four,
        description: 'Patients can access their medical records any time and from anywhere with the help of a biometric touch based application'
    },
];


class Services extends Component{
	
render(){
    const services = srvices.map((item) => {
		return(
			<div key={item.id} className="mb-4 col-md-4 flex-fill flex-grow-1 flex-shrink-1">
				<RenderServiceItem service={item} />
			</div>
		)
	});

	const RenderFeatures = () => {
		return (
			<Card style={{ borderWidth: 0, marginTop: 50 }}>
				<CardImg width="100%" src={woman}/>
				<CardImgOverlay className="d-none d-xl-inline-block">
					<div className="d-flex flex-row flex-wrap justify-content-between ml-5">
						{features}
					</div>
				</CardImgOverlay>

				<div className="d-xs-block d-xl-none">
					<div className="d-flex flex-row flex-wrap justify-content-between">
						{features}
					</div>
				</div>
			</Card>
		);
	};

	
	const features = featurs.map((feature) => {
		return (
			<div key={feature.id} className="flex-fill flex-grow-1 flex-shrink-1 col-md-5 m-md-5" style={{ maxWidth: 400 }}>
				<CardTitle style={styles.title} className="heading mt-md-5"><img src={feature.logo} width='100.8px' height='72px' alt='logo' /> {feature.feature} </CardTitle>
				<CardText style={styles.description} className="normal mb-5"> {feature.description} </CardText>
			</div>
		);
	});


	return (
		<div className="container-fluid">
			<div className="row">
				<h3 className="heading col-12 text-center mt-5 mb-5" style={styles.heading}><div style={{marginTop: 70}}>Services</div></h3>
			</div>
			<div className="row ml-4 mr-4 d-flex flex-row justify-content-around">
				{services}
			</div>
			<div>
			<div className="d-flex flex-row flex-wrap justify-content-center">
				<h3 className="heading col-12 mt-5 mb-4 text-center" style={styles.heading}> {'Why Choose Us ?'} </h3>
				<p style={{...styles.headText, ...styles.normalText}} className="normal"> {'Only we bring you a variety of affordable ' +
				'innovative services at your doorstep from our trusted and verified partners, with the best ' +
				'discounts too!! Our FDP approved devices are operated by trained staff.'} </p>
			</div>
				<RenderFeatures/>
			</div>
		</div>
	);
}
}

export default Services;