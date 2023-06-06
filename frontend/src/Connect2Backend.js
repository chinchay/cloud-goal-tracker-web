import axios from "axios"
import { useState, useEffect } from 'react';

export function Request2Backend(){
    const [response, setResponse] = useState(null)

    // cannot do `await sleep(1000)`
    // because I get this error
    // error: Invalid hook call. Hooks can only be called inside of the body of a function component...
    // so  I had to comment it out
    // await sleep(1000)
    // Instead, I added `time.sleep(2)` in the backend/, in views.api()  ;)

    const url = 'http://localhost:8000/api/'

    useEffect(() => {
        axios
            .get(url)
            .then(
                response => {
                    setResponse(response.data)            
                }
            )
            .catch(
                error => {console.error(error);}
            )
    }, []);

    return response

}
