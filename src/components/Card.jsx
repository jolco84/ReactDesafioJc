import React from 'react';
import Card from "react-bootstrap/Card";


const Tarjeta = ({ src, titulo, descripcion }) => {
    return (
        <Card >
            <Card.Img variant="top" src={src} id="src" alt={titulo} />
            <Card.Body>
                <Card.Title id="titulo">{titulo}</Card.Title>
                <Card.Text id="descripcion">
                    {descripcion}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Tarjeta;