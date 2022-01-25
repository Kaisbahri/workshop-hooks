import { React, useState ,useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Func() {
    const [counter,setCounter]=useState(0)
  const [info, setInfo] = useState({
    name: "",
    lastname: "",
  });

  const [show, setShow] = useState(true);
 useEffect(()=>console.log("show update"), [show])

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleCouter = () => {
    setCounter(counter+1);
  };

  const[password,setpassword]=useState("")
  useEffect(()=>console.log("password update"), [password])

  return (
    <div style={{ width: "500px" }}>
      {show && (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>nom</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
            />
            <Form.Label>prenom</Form.Label>
            <Form.Control
              name="lastname"
              type="text"
              placeholder="Enter your lastname"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange={(e)=>setpassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
      <div>{counter}</div>
      <Button variant="success" type="submit" onClick={() => {
        setShow(!show)
      }
      }>
        {" "}
        sh
      </Button>
    </div>
  );
}
