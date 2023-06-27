import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from "react-bootstrap";
import {Config} from "../../config";
import axios from "axios";

function CreatePage() {

    const [catName, setCatName] = useState('');
    const [country, setCountry] = useState('');
    const [town, setTown] = useState('');
    const [missingSince, setMissingSince] = useState('');
    const [content, setContent] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const fileReader = new FileReader();

    // Post the form data to the API.
    const postFormData = (formData: any) => {
        axios.post(Config.CREATE_API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        }).then((response: any) => {
            console.log(response)

        }).catch((error: any) => {
            console.error(error)
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Create an object with the form data
        const formData: any = {
            catName,
            country,
            town,
            missingSince,
            content,
            email,
        };

        // If an image has been submitted, convert it to base64 and attach it to the formData.
        if (image) {
            new Promise((resolve, reject) => {
                fileReader.readAsDataURL(image);

                fileReader.onload = function () {
                    resolve(fileReader.result);
                };

                fileReader.onerror = function (error) {
                    reject(error);
                };

            }).then(result => {
                formData.image = result;

                postFormData(formData);

            }).catch(err => {
                console.error(err);
            });

        } else {
            postFormData(formData)
        }

    };

    return (
        <Container>
            <Form onSubmit={event => handleSubmit(event)}>
                <Form.Group className="mb-3" controlId="formCatName">
                    <Form.Label>Cat name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter cat name"
                        value={catName}
                        onChange={(event) => setCatName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter country"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTown">
                    <Form.Label>Town / City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name of town / city"
                        value={town}
                        onChange={(event) => setTown(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMissingSince">
                    <Form.Label>Date missing since</Form.Label>
                    <Form.Control
                        type="date"
                        value={missingSince}
                        onChange={(event) => setMissingSince(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContent">
                    <Form.Label>Additional information</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTown">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={(event: any) => setImage(event.target.files[0] || null)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    );
}

export default CreatePage;