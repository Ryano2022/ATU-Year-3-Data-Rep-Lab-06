import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read(){
    const [data, setData] = useState([]); // Set to an empty array.
    useEffect(
        () => {
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920') // API URL
            .then(
                (response) => {
                    setData(response.data.books); // Update value.
                }
            )
            .catch(
                (error) => {
                    console.log(error); // Log the error.
                }
            );
        }, 
        []
    )

    return(
        <div>
            <h3>Hello from read.js component.</h3>
            <Books myBooks={data}></Books> 
        </div>
    );
}

export default Read;