
import React from 'react';
import { Field } from 'redux-form';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import InputField from 'components/InputField/InputField.component'
import SubmitCancelButtons from 'components/SubmitCancelButtons/SubmitCancelButtons.component'

const ResetPasswordModalComponent = ({ isOpen, toggle, handleSubmit, reset, submitting }) => {
	return (
		<Modal isOpen={isOpen} toggle={toggle} onReset={reset} centered>
			<ModalHeader>Reset your password?</ModalHeader>
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
				<SubmitCancelButtons disabled={submitting} onCancel={toggle}/>
				</ModalFooter>
			</Form>
		</Modal>
	);
}

export default ResetPasswordModalComponent;
