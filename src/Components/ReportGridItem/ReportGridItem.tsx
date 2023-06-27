import { Card, Button } from 'react-bootstrap';

const Header = () => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://mcim-image-bucket.s3.amazonaws.com/beefcake.jpg" />
            <Card.Body>
                <Card.Title><b>Beefcake</b></Card.Title>
                <Card.Text>
                    Aberdeen, Scotland
                    <br/>
                    Missing since 2019-11-22
                </Card.Text>
                <div className="d-grid gap-1">
                    <Button variant="outline-primary">More info</Button>
                </div>
            </Card.Body>
        </Card>

    );
}

export default Header;