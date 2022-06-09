import React from "react";
import './Mems.css';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

const Mems = (props) => {
  const dispatch = useDispatch();
  const setUpvote = () => {
    dispatch({ type: "SET_UPVOTE", payload: props.id });
  };
  const setDownvote = () => {
    dispatch({ type: "SET_DOWNVOTE", payload: props.id });
  };
  const isFavorite = () => {
    dispatch({ type: "CHANGE_FAVORITE", payload: props.id });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions className="actions">
        <Button onClick={setUpvote} size="lg">
          <FontAwesomeIcon className="like-icon" icon={faThumbsUp} size="lg" />
          {props.upvotes}
        </Button>
        <Button onClick={setDownvote} size="lg">
          <FontAwesomeIcon className="like-icon" icon={faThumbsDown} size="lg" />
          {props.downvotes}
        </Button>
        <FontAwesomeIcon
          onClick={isFavorite}
          icon={faStar}
          size="lg"
          color={props.favorite ? "#ffbf00" : "#1976d2"}
        />
      </CardActions>
    </Card>
  );
};

export default Mems;
