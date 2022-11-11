/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
import React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../utils/GlobalStyle';
import PaperScroll from '../assets/paper-scroll.png';
import CompassImg from '../assets/compass.png';
// import game, { generateMoves } from '../reducers/game';
import { generateMoves } from '../reducers/game';

const GameBoard = () => {
  const description = useSelector((store) => store.game.description);
  const actions = useSelector((store) => store.game.actions);
  const dispatch = useDispatch();

  // const onRestartButton = () => {
  //   dispatch(game.actions.setUsername(''));
  //   dispatch(game.actions.restartGame());
  //   /* window.location.reload() */
  // };

  console.log(actions);

  return (
    <GameBoardStyle>
      <ScrollWrapper>
        <Scroll>
          <EventText> {description}</EventText>
          {/* <Button restart type="button" onClick={onRestartButton}>
            Restart game
          </Button> */}
        </Scroll>
      </ScrollWrapper>
      <CompassWrapper>
        {actions.length > 0 &&
          actions.map((action) => (
            <>
              {console.log(action)}
              <Button
                className={action.direction}
                direction={action.direction}
                key={action.direction}
                onClick={() => dispatch(generateMoves(action.direction))}
              >
                <div>{action.description}</div>
              </Button>
              <Compass />
            </>
          ))}
      </CompassWrapper>
    </GameBoardStyle>
  );
};

export default GameBoard;

const GameBoardStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /*  @media (max-width: 700px) {
    flex-wrap: wrap;
  } */

  // Flex direction column for mobile?
`;

const ScrollWrapper = styled.div`
  width: 50%;
  margin: -10% auto;

  /* up to desktop */
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0% auto;
  }

  /* big desktop */
  @media (min-width: 1300px) {
    margin: -5% auto;
  }
`;
const Scroll = styled.div`
  /* for desktop */
  background-image: url(${PaperScroll});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  position: relative;
  width: 100%;
  height: 100vh; // Need to change width on mobile
  text-align: center;
  margin: 0;
  padding: 0;

  /* up to desktop */
  @media (max-width: 1024px) {
    width: 100%;
    height: 50vh;
  }
  /* big desktop */
  @media (min-width: 1300px) {
    height: 75vh;
  }
`;

const EventText = styled.p`
  /* Desktop styling */
  width: 65%;
  margin: 25vh auto;
  padding-top: 25vh;
  font-size: 120%;

  /* Tablet Styling */
  @media (min-width: 500px) and (max-width: 1023px) {
    max-width: 275px;
    margin: 3vh auto;
    padding-top: 13vh;
    /* width: 50%; */
    font-size: 100%;
  }

  /* Mobile Styling*/
  @media (max-width: 499px) {
    width: 65%;
    font-size: 100%;
    padding-top: 15vh;
    margin: 0 auto;
  }
`;

const CompassWrapper = styled.div`
  width: 50%;
  margin-top: 3%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

  @media (min-width: 500px) and (max-width: 1023px) {
    height: 50vh;
  }

  /* big desktop */
  @media (min-width: 1300px) {
    height: 100vh;
  }

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-rows: repeat(4, 1fr);
  }

  .North {
    grid-area: 1 / 4 / span 2 / span 2;
    @media (max-width: 1024px) {
      grid-area: 1 / 3 / span 1 / span 4;
    }
  }
  .East {
    grid-area: 4 / 7 / span 2 / span 3;
    @media (max-width: 1024px) {
      grid-area: 2 / 6 / span 2 / span 3;
    }
  }
  .West {
    grid-area: 4 / 1 / span 2 / span 2;

    @media (max-width: 1024px) {
      grid-area: 2 / 1 / span 2 / span 3;
    }
  }
  .South {
    grid-area: 7 / 3 / span 1 / span 4;

    @media (max-width: 1024px) {
      grid-area: 4 / 3 / span 1 / span 4;
    }
  }
`;

const Compass = styled.div`
  background-image: url(${CompassImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  grid-area: 3 / 3 / span 4 / span 4;

  @media (max-width: 1024px) {
    grid-area: 2 / 4 / span 2 / span 2;
  }
`;