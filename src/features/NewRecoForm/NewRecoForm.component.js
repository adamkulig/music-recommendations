import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { GENRES, RATING } from '../../variables/reviews';
import { 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardHeader,
  Form, 
} from 'reactstrap';
// import WrappedInputField from '../../components/InputField/WrappedInputField.component';
import InputField from '../../components/InputField/InputField.component';
import SelectField from '../../components/SelectField/SelectField.component';
import SubmitCancelButtons from '../../components/SubmitCancelButtons/SubmitCancelButtons.component'
import history from '../../history';
import routes from '../../variables/routes';

const NewRecoComponent = ({ handleSubmit, submitting, countries }) => {
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Card className="mt-3 mb-5">
          <CardHeader>New recommendation</CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Field
                name="band" 
                type="text" 
                component={InputField} 
                label="Band*" 
              />
              <Field
                name="country"
                component={SelectField} 
                label="Country*" 
                options={countries}
                placeholder='choose country...'
              />
              <Field
                name="rating"
                component={SelectField} 
                label="Rating*" 
                options={RATING}
                placeholder='your rating...'
              />
              <Field
                isMulti
                name="genres"
                component={SelectField} 
                label="Genres*" 
                options={GENRES}
                placeholder='choose genres...'
              />
              <Field
                name="youtubeLink" 
                type="text" 
                component={InputField} 
                label="Link*" 
                placeholder='paste youtube link...'
              />
              <Field
                name="similar" 
                type="text" 
                component={InputField} 
                label="Similar"
                placeholder='separate band names with a comma...' 
              />
              <Field
                name="facebookLink" 
                type="text" 
                component={InputField} 
                label="FB link"
                placeholder='paste facebook link...'
              />
              <Field
                name="opinion" 
                type="textarea" 
                component={InputField} 
                label="Opinion"
                placeholder='your opinion...'
                rows="5"
              />
              <p className='small text-muted'>* fields are required.</p>
             <SubmitCancelButtons disabled={submitting} onCancel={() => history.push(routes.Main)}/>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};

// ReviewNewComponent.propTypes = {
//   onSubmit: PropTypes.func,
//   onChange: PropTypes.func,
//   data: PropTypes.shape({
//     type: PropTypes.oneOf(['', 'band', 'album', 'track']),
//     band: PropTypes.string,
//     album: PropTypes.string,
//     track: PropTypes.string,
//     genre: PropTypes.string,
//     link: PropTypes.string,
//     rating: PropTypes.string,
//     text: PropTypes.string,
//     similar: PropTypes.string
//   }),
//   types: PropTypes.array,
//   genres: PropTypes.array,
//   rating: PropTypes.array
// }

export default NewRecoComponent;
