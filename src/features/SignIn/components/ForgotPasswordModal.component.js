
import React from 'react';
import { Field } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import InputField from '../../../components/InputField/InputField.component'

const ForgotPasswordModalComponent = ({ isOpen, toggle, handleSubmit }) => {
	return (
		<Modal isOpen={isOpen} toggle={toggle}>
			<ModalHeader>Forgot your password?</ModalHeader>
			<Form onSubmit={handleSubmit} autoComplete="off">
				<ModalBody>
					<p className='text-center'>Don't worry!<br />Write your e-mail below and I will send you new password.</p>
					<Field 
						name="email" 
						type="text" 
						component={InputField} 
						label="Email" 
					/>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" className="mr-2" type="submit">Send</Button>
					<Button color="secondary" onClick={toggle}>Cancel</Button>
				</ModalFooter>
			</Form>
		</Modal>
	);
}

export default ForgotPasswordModalComponent;
