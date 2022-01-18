import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ProfileImage = styled.img`
    width:100%;
    max-width:250px;
    border-radius:50%;
    margin-right:40px;
    @media ${(props) => props.theme.breakpoints.sm} {
      width:50%;
      margin:0 auto;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      width:50%;
      margin:0 auto;
    }
`;

export const ProfileWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    
    @media ${(props) => props.theme.breakpoints.sm} {
      width: 80%;
      display: flex;
      flex-direction: column;
  
      margin: 0 auto;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      width: 100%;
      display: flex;
      flex-direction: column;
  
      margin: 0 auto;
    }
`;