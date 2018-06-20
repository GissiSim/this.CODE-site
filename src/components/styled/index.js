import styled from 'styled-components'
import Link from 'gatsby-link'

export const TitleWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgb(41, 50, 60), rgb(72, 85, 99));
`

export const Title = styled.h1`
  font-size: 10vw;
  color: red;

  position: relative;
  margin: 0;
`

export const SmallTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 2rem;
  margin-bottom: -2.5rem;
  font-size: 1.5rem;
  margin: 0 auto;
  max-width: 45rem;
  padding: 2rem 2rem 0;
`

export const MainContent = styled.div`
  margin: 0 auto;
  max-width: 45rem;
  padding: 0 2rem;
`
export const StyledLink = styled(Link)`
  color: ${props => (props.fp ? 'red' : 'black')};
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  transition: color 0.5s;

  &:hover {
    &::before {
      color: #ff8686;

      -webkit-transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1);
      transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1);
    }
  }
  &::before {
    content: '';
    position: absolute;
    height: 36px;
    width: 120%;
    top: 50%;
    margin-top: -18px;
    left: -10%;
    z-index: -1;
    background: #f9f9f9;
    transform: rotate3d(0, 0, 1, 45deg) scale3d(0, 1, 1);
    transition: transform 0.5s;
  }

  span {
    font-size: 20%;
    font-weight: 400;
    position: absolute;
    right: 9.3%;
    color: white;
    bottom: -10%;
    opacity: 1;
    transition: transform 0.5s, opacity 0.5s;
  }

  &:hover span {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`
