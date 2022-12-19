import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const GeneralInfo = (props) => {
  const { handlerChangeInput, personalInfo } = props;
  return (
    <>
        <h3>Personal Information</h3>
        <Form>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              placeholder="Enter your full name" 
              onChange={handlerChangeInput}
              value={personalInfo.fullName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" placeholder="Enter email" onChange={handlerChangeInput}
              value={personalInfo.address}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="tel" name="phoneNumber" placeholder="Enter email" onChange={handlerChangeInput}
              value={personalInfo.phoneNumber}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handlerChangeInput}
              value={personalInfo.email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name="description" rows={3}  onChange={handlerChangeInput}
              value={personalInfo.description}/>
          </Form.Group>
        </Form>
      </>
  )
}

export default GeneralInfo