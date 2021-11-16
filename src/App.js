import { FaTwitch, FaTwitter } from 'react-icons/fa';
import { Col, Container, Row, Image } from 'react-bootstrap';

function App() {
    return (
        <Container className="d-flex flex-column text-center justify-content-center align-items-center" style={{minHeight: "100vh", marginTop: -5}}>
            <Row>
                <Col>
                    <Image src="./logo.png" alt="logo" rounded fluid style={{width: "50%", maxWidth: 300}} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="h2 mt-2 mb-2">UNWISHINGMOON</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="mb-2"><q>Be the change that you wish to see in the world.</q> &mdash; Mahatma Gandhi</span>
                </Col>
            </Row>
            <Row className="mt-2 h5">
                <Col>
                    <a href="https://www.twitch.tv/unwishingmoon" target="_blank" rel="noreferrer" title="Twitch">
                        <FaTwitch color="white" />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.twitter.com/unwishingmoon" target="_blank" rel="noreferrer" title="Twitter">
                        <FaTwitter color="white" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default App;