import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slide from '../images/slider.jpg';

function Slider() {
	return (
		<Container fluid className='no-margin'>
			<Row>
				<Col md='12'>
					<div className='sli-image'></div>
				</Col>
			</Row>
		</Container>
	);
}

export default Slider;
