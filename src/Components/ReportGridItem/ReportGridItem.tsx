import {Card, Button} from 'react-bootstrap';
import {IReportData} from "../../Interfaces/IReportData";
import React from "react";
import {Link} from "react-router-dom";

const ReportGridItem: React.FC<IReportData> = ({catName, content, country, created,
                                                   email, id, imageLocation, missingSince,
                                                   town}) => {

    return (
        <Card style={{ width: '18rem' }} className="mt-5">
            <Card.Img variant="top" src={imageLocation} />
            <Card.Body>
                <Card.Title><b>{catName}</b></Card.Title>
                <Card.Text>
                    {town}, {country}
                    <br/>
                    Missing since {missingSince}
                </Card.Text>
                <div className="d-grid gap-1">
                    <Link to={'/view/' + id}>
                        <Button variant="outline-primary">More info</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ReportGridItem;
