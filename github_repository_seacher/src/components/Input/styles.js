import styled from 'styled-components'

export const InputContainer = styled.div`
    width:80%;
    height:3vh;
    border: 1px solid white;
    border-radius:2rem;
    background-color: white;

    input{
        background-color:transparent;
        width:99.9%;
        height:99.9%;
        border:0;
        border-radius:2rem;
        text-align:center
    }

    input:hover{
        background-color:rgba(165, 184, 239, 0.5);
    }

    @media(min-width:1000px){
        width:70%;
    }
`