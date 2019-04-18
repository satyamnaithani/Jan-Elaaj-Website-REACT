import React, {Component} from 'react';
import '../assets/styles/styles_footer.css';

export default class Footer extends Component {
    render(){
        return(
            <footer style={{backgroundColor: "rgba(28, 30, 30, 1)"}}>
	
	<div><h3>Get in Touch</h3>
		<ul>
		<li><a href="/"><i class="fab fa-twitter-square fa-2x"></i> janelaaj@gmail.com</a></li>
		<li><a href="/"><i class="fab fa-facebook-square fa-2x"></i>+123 456 7890<br />+123 456 7890</a></li>
		<li><a href="/"><i class="fab fa-snapchat-square fa-2x"></i>Plot no 27, Pocket - 1 Jasola, New Delhi - </a></li>
	</ul>
    </div>
	

	<div><h3>Quick Links</h3><ul>
		<li><a href="/"> About us</a></li>
		<li><a href="/">Careers</a></li>
		<li><a href="/">Contact us</a></li>
		<li><a href="/">Faq</a></li>
		<li><a href="/">Insurance</a></li>
		<li><a href="/">Partners</a></li>
	</ul></div>
	

	<div><h3>Our Services</h3>	<ul>	<li><a href="/"> About us</a></li>
		<li><a href="/">Careers</a></li>
		<li><a href="/">Contact us</a></li>
		<li><a href="/">Faq</a></li>
		<li><a href="/">Insurance</a></li>
		<li><a href="/">Partners</a></li>
	</ul></div>
	

	{/* <div>
		<h3>Enquiry Form</h3>
		<form>
			<label>Name</label>
			<input type="text" name="name" />
			<label>Phone</label>
			<input type="text" name="phone" />
			<label>Message</label>
			<input type="text" name="Message" />
			<input type="submit" />
		</form>
	</div> */}

</footer>
        )
    }
}