import React from 'react'
import { Button, Form, 
    FormControl, FormGroup, 
    FormLabel, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ApplyForm = () => {
    return (
        <Container>
        <Card style={{
            padding:10,
            marginTop:20
        }}>
            <Card.Body>
                <Card.Title style={{
                    textAlign:'center'
                }}>Application</Card.Title>
                <Form>
            <FormGroup className="mb-3">
                <FormLabel>Name</FormLabel>
                <FormControl 
                type="text" 
                placeholder="Type your name"
                />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Email</FormLabel>
                <FormControl
                type="email"
                placeholder="Type email address"
                 />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Phone</FormLabel>
                <FormControl 
                type="text"
                placeholder="123 456 7890"
                 />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Message</FormLabel>
                <FormControl 
                as="textarea"
                rows={3}
                placeholder="Say something to us"
                 />
            </FormGroup>
            <FormGroup 
            className="mb-3"
            style={{
                textAlign:'end'
            }}>
            <Link 
            to="/options">
                <Button size="lg">Next</Button>
            </Link>
            </FormGroup>
            <FormGroup style={{
                textAlign:'end'
            }}>
                <FormLabel>1/2</FormLabel>
            </FormGroup>
        </Form>
            </Card.Body>
        </Card>
        </Container>
    )
}
