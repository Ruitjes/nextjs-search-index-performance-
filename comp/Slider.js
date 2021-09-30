import React, {useState} from 'react';

function Checkbox(props) {
    console.log(props)


    const [rangeval, setRangeval] = useState(1900);

    function handleChange(event) {
        props.setQuery({
            ...props.query,
            [event.target.name]: value
          });    }

    return (
        <div>
            Since {rangeval} <input type="range" min="1900" max="2018" className="slider" id="slider" value={props.query.slider} onChange={handleChange} />
            {/* Since {rangeval} <input type="range" min="1900" max="2018" className="slider" id="myRange" value={rangeval} onChange={handleChange} /> */}

        </div>
    );
}

export default Checkbox;