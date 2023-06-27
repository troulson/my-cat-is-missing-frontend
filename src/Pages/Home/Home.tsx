import React, {useEffect, useState} from "react";
import {Button, Card, Container} from "react-bootstrap";
import ReportGrid from "../../Components/ReportGrid/ReportGrid";
import {IReportData} from "../../Interfaces/IReportData";
import {Config} from "../../config";
import ReportGridItem from "../../Components/ReportGridItem/ReportGridItem"

function HomePage() {
    const [reportData, setReportData] = useState<Array<IReportData>>(new Array<IReportData>());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(Config.PAGE_API_URL);
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
            <ReportGrid colCount={4} md={3}>
                { reportData.map(item => <ReportGridItem catName={item.catName} content={item.content}
                                                         country={item.country} created={item.created}
                                                         email={item.email} id={item.id}
                                                         imageLocation={item.imageLocation}
                                                         missingSince={item.missingSince}
                                                         town={item.town}/>) }
            </ReportGrid>
            )}
        </Container>
    );
}

export default HomePage;