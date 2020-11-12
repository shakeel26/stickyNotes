import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {

    const deleteNote = () => {
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            <h1 className="title">{props.title}</h1>
            <p className="today">{props.today}</p>
            <p className="content">{props.content}</p>
            <IconButton onClick={deleteNote} aria-label="delete" >
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default Note;
