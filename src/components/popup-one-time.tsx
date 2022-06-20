import * as React from 'react';
import styled from '@emotion/styled'

// mui
import MuiModal from '@mui/material/Modal';
import MuiCard from '@mui/material/Box';
import MuiIconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Modal = styled(MuiModal)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0 10 32 / 60%);
  z-index: 100;

  .hopr-snowflake {
    //color: #fff;
    position: absolute;
    top: -20px;
    animation: fall linear forwards;
  }

  .hopr-snowflake:before {
    content:"";
    position:relative; /*or absolute*/
    display: inline-block;
    z-index: 1;
    left:-50px;
    top:10px;
    background-image: url("/assets/icons/hopr-pride-token.png");
    background-size: 25px 25px;
    width: 25px;
    height: 25px;
  }

  @keyframes fall {
    to {
      transform: translateY(105vh);
    }
  }


`

const SCard = styled(MuiCard)`
  width: 100%;
  max-width: 600px;
  max-height: 500px;
  background: white;
  padding: 16px;
  margin: 16px;
  position: relative;
  border: solid 3px rgb(0,70,217);
  z-index: 200;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 300px) {
    height: 100%;
  }
`

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  svg {
    color: rgb(0,70,217);
  }
`

const Logo = styled.div`
  height: 34px;
  display: flex;
  gap: 10px;
`

const IconButton = styled(MuiIconButton)`
  margin-top: -8px;
  width: 40px;
  height: -8px;
  height: 40px;
  margin-right: -8px;
`

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    max-width: 350px;
    width: 100%;
    margin: 8px;
  }
`

const Message = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 31px;
  color: rgb(0,70,217);
  @media screen and (max-width: 300px) {
    font-size: 20px;
  }
`

const Message2 = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: rgb(0,70,217);
  @media screen and (max-width: 300px) {
    font-size: 20px;
  }
`

function createSnowFlake() {
  const snow_flake = document.createElement('i');
  snow_flake.classList.add('hopr-snowflake');
  snow_flake.style.left = Math.random() * window.innerWidth + 'px';
  snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
  snow_flake.style.opacity = `${Math.random()}`;
  snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';

  document.getElementById("popup-one-time")!.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 5000)
};

export const PopUp: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  React.useEffect(() => {
    const interval = setInterval(createSnowFlake, 50);
    return () => clearInterval(interval);
  }, []);

  return (
      <Modal
        id="popup-one-time"
        open={open}
        onClose={onClose}
      >
        <SCard>
          <TitleBar>
            <Logo>
              <img
                src="/logo.svg"
                alt="Hopr Logo"
              />
            </Logo>
            <IconButton
              onClick={onClose}
            >
              <CloseIcon/>
            </IconButton>
          </TitleBar>

          <ImageContainer>
            <img src="/happy-hacker.jpg" alt="Happy Hacking" />
          </ImageContainer>
          <Message>
            HOPR dApp Building Contest
          </Message>
          <Message2>
            7000 USD of $HOPR in prizes!
            <br/>
            Runs 20th June - 4th July
            <br/>
            Click a bounty tagged CONTEST to learn more.
          </Message2>
        </SCard>
      </Modal>
  );
}
