import styled from 'styled-components'

export const StyledCommentToggler = styled.div`
padding : 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.commentsButton {
    border : 0;
    font-family : 'Courier New', Courier, monospace;
    font-size : 18px;
    width : 300px;
    :hover{
        cursor: pointer;
    }
}

`