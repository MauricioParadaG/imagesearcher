import React, {useState} from 'react';
import ErrorComponent from './Error.component';

const FormComponent = props => {

    const [search, setSearchState] = useState('');

    const [error, setErrorState] = useState(false);

    const onSubmit = event => {
        event.preventDefault();

        // validation
        if (search.trim() ==='' ){
            setErrorState(true);
            return;
        } 
        setErrorState(false);

        props.setFormSearchedState(search);

        setSearchState('');
    }


    return (
       <form onSubmit={onSubmit}>
        {/** if - error message with Bootstrap*/}
        {error ?
            <ErrorComponent message="Please type inside the box"/>
            : null
        }

           <div className="row">

               <div className="form-group col-md-8">
                <input type="text"
                className="form-control form-control-lg"
                placeholder="Search an image"
                onChange={event => setSearchState(event.target.value)}
                />    
               </div>

                {/** Button */}
               <div className="form-group col-md-4">
                <input type="submit"
                className="btn btn-lg btn-danger btn-block"
                value="Search"
                />    
               </div>

           </div>
       </form>
    )
}

export default FormComponent;
