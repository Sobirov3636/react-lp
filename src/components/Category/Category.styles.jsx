import styled from "styled-components";

// export const CategoriyContainer = styled.div`
//   display: grid;
//   margin: 0 auto;
//   max-width: 1440px;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   column-gap: 40px;
//   row-gap: 50px;
// `;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

export const CategoriyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
