import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Container, Image} from "react-bootstrap";
import {Config} from "../../config";
import {IReportData} from "../../Interfaces/IReportData";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ViewPage() {
    const { id } = useParams();

    const [reportData, setReportData] = useState<IReportData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(Config.VIEW_API_URL + '?id=' + id);
                const data = await response.json();

                console.log(response);

                setReportData(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            {reportData && (
            <Row>
                <Col className="p-5">
                    <Image src={reportData.imageLocation} rounded fluid className="w-100"/>
                </Col>
                <Col className="p-5">
                    <h5><b>Name:</b></h5>
                    <h5>{reportData.catName} </h5>
                    <br/>
                    <h5><b>From:</b></h5>
                    <h5>{reportData.town}, {reportData.country} </h5>
                    <br/>
                    <h5><b>Missing since:</b></h5>
                    <h5>{reportData.missingSince} </h5>
                    <br/>
                    <h5><b>Additional information:</b></h5>
                    <h5>{reportData.content} </h5>
                    <br/>
                    <h5><b>Report created:</b></h5>
                    <h5>{reportData.created} </h5>
                    <br/>
                </Col>
            </Row>
            )}
        </Container>
    );

}

export default ViewPage;