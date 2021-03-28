import { CSVLink, CSVDownload } from "react-csv";
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { Form, Container, Row, Col } from "react-bootstrap";


const ExportSection = ({ headers, filters }) => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);


    return (
        <Container>
            <Form>
                {headers.map((header, index) => (
                    <div key={`default-${header}`} className="mb-3">
                        <Form.Check
                            type={'checkbox'}
                            id={`default-${index}`}
                            label={header}
                        />
                        <div class="px-4">{header in filters && filters[header].map((filter, index) => (
                            <div class="px-2 d-inline-block">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${index}`}
                                    label={filter}
                                />
                            </div>
                        ))}</div>
                    </div>
                ))}
            </Form>
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
        </Container>
    );
};

export default ExportSection;