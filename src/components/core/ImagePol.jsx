import styled from "styled-components";

const PolarizeImg = styled.div`
  padding: 10px 10px 45px 10px;
  background-color: white;
  display: inline-block;
  border-radius: 30px;
  border: var(--border);
  box-shadow: var(--shadow);
  transform: rotate(-10deg);
  font-family: var(--italic) !important;
`;

const ImagePol = ({ children }) => {
  return <PolarizeImg>{children}</PolarizeImg>;
};

export default ImagePol;
