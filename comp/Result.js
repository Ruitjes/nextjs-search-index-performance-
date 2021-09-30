import React from 'react';
import styles from '../styles/Home.module.css'

function Result(props) {
    return (
        <div>
            {props.firstSearch == true &&
                props.documents['RESULT'].map(result =>
                    <div key={result._doc._id} className={styles.card}>
                        <li>Id: {result._doc._id}</li> 
                        <li>Title: {result._doc.title}</li>
                        <li>Year: {result._doc.year}</li>
                        <li>Cast: {result._doc.cast}</li>
                        <li>Genre: {result._doc.genres}</li>
                    </div>
                )
            }
        </div>
    );
}

export default Result;