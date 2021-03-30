import React from 'react'
import styled from 'styled-components';

const FormInputStyles = styled.div`


`
const FormInput = (props) => {
    return ( 
        <FormInputStyles>
            <label htmlFor=""></label>
            <input type="text"/>
        </FormInputStyles>
     );
}
 
export default FormInput;