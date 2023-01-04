import React, { useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.css';

// const UserForm = (props) => {
    const initialState = {
        firstname: {
            value: '',
            error: null
        },
        lastname: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };

    function reducer(state, action) {
        return{
            ...state,
            [action.type]: action.payload
        };
    }

    export default () => {
        const [state, dispatch] = useReducer(reducer, initialState);

        function handleChange(e){
            const {name, value} = e.target;
            dispatch({
                type: name,
                payload: value
            });
        }

        return (
          <>
          <form action="">
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" value={state.firstname} onChange={handleChange} name="firstname" id="firstname" className="form-control-md mt-3"/>
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" value={state.lastname} onChange={handleChange} name="lastname" id="lastname" className="form-control-md mt-3"/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" value={state.email} onChange={handleChange} name="email" id="email" className="form-control-md mt-3"/>
            </div>
          </form>
          </>
        );
    }
    
// }
//  export default UserForm;

