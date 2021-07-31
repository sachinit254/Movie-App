import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
// Types
type Props = {
  backdrop: string;
}
export const Wrapper = styled.div<Props>`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  h3 {
    margin: 10px 0;
  }
  .overview{
   width:70%;
   @media(max-width: 768px){
       width: 90%;
   }  
}


  .rating-directors {
    display: flex;
    justify-content: flex-start;
    padding: 20px 0;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: black;
    font-weight: 800;
    border-radius: 50%;
    margin: 10px;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 10px;
    }
  }
  h1 {
    margin: 20px 0;
    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
