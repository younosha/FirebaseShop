import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Styles from './Card.module.css'
import { useHistory } from "react-router-dom";
import { IsAdmin } from "../../utils/IsAdmin";

export default function CardComponent ({image, title, description, id, handleDelete}) {
  let history = useHistory();

    return (
        <Card className={Styles.main} onClick={() => history.push(`/catalog/${id}`)}>
          {IsAdmin().admin && <button className={Styles.deleteButton} onClick={(e) => handleDelete(e, id)}>x</button>}
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
}
