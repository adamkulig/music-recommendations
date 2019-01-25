import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardHeader, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
} from 'reactstrap';
import Select from 'react-select';

const ReviewNewComponent = ({ onSubmit, onChange, data, types, genres, rating }) => {
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Card className="my-5 mx-auto">
          <CardHeader>New recommendation</CardHeader>
          <CardBody>
            <Form onSubmit={onSubmit} autoComplete='false'>
              <FormGroup row>
                <Label for="type" sm={3} md={2}>Type*</Label>
                <Col>
                  <Input 
                    type="select" 
                    name="type" 
                    id="type"
                    sm={9}
                    md={10}
                    value={data.type} 
                    onChange={onChange}
                  >
                    <option value=''>-choose type of recommendation-</option>
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              { data.type && (
              <Fragment>
                <FormGroup row>
                  <Label for="band" sm={3} md={2}>Band*</Label>
                  <Col>
                    <Input 
                      type="text" 
                      name="band"
                      id="band"
                      sm={9}
                      md={10} 
                      onChange={onChange} 
                      value={data.band}
                    />
                  </Col>
                </FormGroup>
                { data.type === 'album' && (
                  <FormGroup row>
                    <Label for="album" sm={3} md={2}>Album*</Label>
                    <Col>
                      <Input 
                        type="text" 
                        name="album"
                        id="album"
                        sm={9}
                        md={10}
                        onChange={onChange} 
                        value={data.album}
                      />
                    </Col>
                  </FormGroup>
                )}
                { data.type === 'track' && (
                  <FormGroup row>
                    <Label for="track" sm={3} md={2}>Track*</Label>
                    <Col>
                      <Input 
                        type="text" 
                        name="track"
                        id="track"
                        sm={9}
                        md={10}
                        onChange={onChange} 
                        value={data.track}
                      />
                    </Col>
                  </FormGroup>
                )}
                <FormGroup row>
                  <Label for="genre" sm={3} md={2}>Genre*</Label>
                  <Col>
                    <Select
                      isMulti
                      name="genres"
                      options={genres}
                      placeholder="choose genres..."
                      className="multi-select"
                      classNamePrefix="multi-select__item"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="link" sm={3} md={2}>Link*</Label>
                  <Col>
                    <Input 
                      type="text" 
                      name="link"
                      id="link"
                      sm={9}
                      md={10} 
                      onChange={onChange} 
                      value={data.link}
                      placeholder='paste youtube or spotify link...'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="rating" sm={3} md={2}>Rating*</Label>
                  <Col>
                    <Input 
                      type="select" 
                      name="rating" 
                      id="rating"
                      sm={9}
                      md={10}
                      value={data.rating} 
                      onChange={onChange}
                    >
                      <option value=''>-your rating-</option>
                      {rating.map(rating => (
                        <option key={rating} value={rating}>{rating}</option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="link" sm={3} md={2}>Text</Label>
                  <Col>
                    <Input 
                      type="textarea" 
                      name="text"
                      id="text"
                      sm={9}
                      md={10} 
                      onChange={onChange} 
                      value={data.text}
                      placeholder='your opinion...'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="similar" sm={3} md={2}>Similar</Label>
                  <Col>
                    <Input 
                      type="text" 
                      name="similar"
                      id="similar"
                      sm={9}
                      md={10} 
                      onChange={onChange} 
                      value={data.similar}
                      placeholder='separate band names with a comma...'
                    />
                  </Col>
                </FormGroup>
                <Button color="primary" className="float-right">Submit</Button>
              </Fragment>
              )}
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};

ReviewNewComponent.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  data: PropTypes.shape({
    type: PropTypes.oneOf(['', 'band', 'album', 'track']),
    band: PropTypes.string,
    album: PropTypes.string,
    track: PropTypes.string,
    genre: PropTypes.string,
    link: PropTypes.string,
    rating: PropTypes.string,
    text: PropTypes.string,
    similar: PropTypes.string
  }),
  types: PropTypes.array,
  genres: PropTypes.array,
  rating: PropTypes.array
}

export default ReviewNewComponent;
