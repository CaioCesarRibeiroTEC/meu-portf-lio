import styled from "styled-components";


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormTitle = styled.h1`
    color: aqua;
    display: flex;
    flex-direction: column;

    @media (max-width: 400px) { 
    font-size: 20px;
   }
`;

export const FormContent = styled.div`

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const FormB = styled.b`
  color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;

  @media (max-width: 400px) { 
    font-size: 20px;
   }
`;

export const FormInput = styled.input`
    display: block;
    width: 300px;
    height: 20px;
    border-radius: 5px;
    margin-left: 20px;

    @media (max-width: 400px) { 
     width: 200px;
    }
`;

export const FormTextarea = styled.textarea`
    display: block;
    width: 500px;
    height: 200px;
    border-radius: 5px;

    @media (max-width: 550px) { 
     width: 350px;
    }

    @media (max-width: 400px) { 
     width: 200px;
    }
`;

export const FormButton = styled.button`
    width:300px;
    border: none;
    background-color: aliceblue;
    color: #333;
    border-radius: 8px;
    padding: 8px 12px;
    margin-top: 20px;
    margin-left: 80px;
    cursor: pointer;

    @media (max-width: 550px) { 
     width: 150px;
     margin-left: 0;
    }
`;