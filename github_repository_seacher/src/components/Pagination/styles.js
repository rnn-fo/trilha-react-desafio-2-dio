import styled from'styled-components'

export const PaginationContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    padding:1rem;

    button{
        background-color: #FAFAFA;
        border: 1px solid #FAFAFA;
        border-radius: 20%;
        margin:2%;
        height:20px;
        width:20px;
    }
    button:hover {
        background-color: #FAFAFA40;
        cursor: pointer;
    }

    button.active{
        background-color:rgb(31, 111, 235);;
    }
`