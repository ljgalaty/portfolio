import styled, {keyframes} from 'styled-components';
import headShot from '../../images/HeadShot.jpg';

export const SlideIn = keyframes`
    0% {
      margin-left: 0%;
    }
    50% {
      margin-left: 300px;
    }
    100% {
      margin-left: 0%;
    }
`

export const Text = styled.h1 `
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translate(-50%, -50%);
    color: white;
    font-family: 'glacial_indifferenceregular';
    font-size: 50px;
    animation-duration: 8s;
    animation-name: ${SlideIn};
    animation-iteration-count: infinite;
`

export const Pic = styled.img `
    width: 100vw;
`

export const Greeting = styled.div `
    max-width: 100%;
    position: absolute;
    right: 8%;
    top: 50%;
    background-color: ${props => props.theme.atomicTangerine};
    padding: 30px;
    border: solid white;
    border-width: 5px;
    color: ${props => props.theme.charcoal};
    font-size: 18px;
    @media (max-width: 600px) {
        right: 5%;
        top: 50%;
        padding: 15px;
        width: 80%;
    }
    @media (min-width: 768px) {
      right: 5%;
      top: 50%
    }
`

export const MainDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: 'glacial_indifferenceregular';
    border: solid white;
    border-width: 5px;
    background-image: url(${headShot});
    background-size: cover;

`

export const Hi = styled.h1`
  font-size: 4vw;
  @media (max-width: 600px) {
        font-size: 10vw;
    }
`

export const HiHi = styled.h2`
  font-size: 2vw;
  @media (max-width: 600px) {
        font-size: 7vw;
    }
`
