import React from 'react'
import { Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap'

const MovieList = ({titulo, imagen, sinopsis, duracion, genero, puntuacion}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle><h5>{titulo}</h5></CardTitle>
          <CardImg className="imagen" src={imagen} alt={titulo}></CardImg>
          <CardText>{sinopsis}</CardText>
          <CardText>Duración: {duracion}</CardText>
          <CardText>Género: {genero}</CardText>
          <CardText>Puntuación: {puntuacion}</CardText>
          <a role="button" href="/" className="btn btn-success">Seleccionar Asientos</a>
        </CardBody>
      </Card>
    </div>
  )
}

export default MovieList;
