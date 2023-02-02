import styled from "styled-components";

export const Dim = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3em;
  color: #fff;
  text-decoration: none;
  background: none;
  border: none;
  z-index: 999;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const Image = styled.img`
  max-width: 90%;
  max-height: 80%;
  margin-top: 2%;
  min-width:10%;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  touch-action: none;
`;

export const SwipeLButton = styled.span<{ data_disabled: boolean }>`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc((100% - 40px) / 2);
  color: white;
  line-height: 1.5;
  font-size: 2.8rem;
  cursor: pointer;
  z-index: 2;
  transition: opacity linear 0.5s;
  left: -20px;
  opacity: ${({ data_disabled }) => (data_disabled ? "0" : "1")};
  visibility: ${({ data_disabled }) => (data_disabled ? "hidden" : "visible")};
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const SwipeRButton = styled.span<{ data_disabled: boolean }>`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc((100% - 40px) / 2);
  color: white;
  line-height: 1.5;
  font-size: 2.8rem;
  cursor: pointer;
  z-index: 2;
  transition: opacity linear 0.5s;
  right: -20px;
  opacity: ${({ data_disabled }) => (data_disabled ? "0" : "1")};
  visibility: ${({ data_disabled }) => (data_disabled ? "hidden" : "visible")};
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const ImageList = styled.div<{ active : boolean }>`
  width: ${({ active }) => (active ? "100%" : "0")};
  height: 100%;
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
  opacity: ${({ active }) => (active ? "1" : "0")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: width linear 0.1s, opacity ease 0.6s;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  background: none;
`;