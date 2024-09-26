import styled from "styled-components";

const PolarizeImg = styled.div`
  padding: 15px 15px 30px 15px;
  background-color: white;
  display: inline-block;
  border-radius: 15px;
`;

const ImagePol = ({ children }) => {
 

  return <PolarizeImg>{children}</PolarizeImg>;
};

export default ImagePol;
