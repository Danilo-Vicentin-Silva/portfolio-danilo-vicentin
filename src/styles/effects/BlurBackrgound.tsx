import styled from "styled-components"

export const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  z-index: 2;

  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
