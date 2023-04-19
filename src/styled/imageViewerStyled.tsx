import styled from "styled-components";

export const SwipeLButton = styled.span<{ data_disabled: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc((100% - 40px) / 2);
  color: black;
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
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc((100% - 40px) / 2);
  color: black;
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

export const Container = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  background: #fff;
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


export const Image = styled.img`
  cursor: poiner;
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
`;