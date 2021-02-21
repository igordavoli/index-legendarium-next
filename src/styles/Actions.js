import styled from 'styled-components';

export const ActionsElement = styled.div`
align-self: flex-end;
display: flex;
align-items: center;
height: 30px;
width: 100%;
font-size: 1.3rem;
font-family: sans-serif;
color: #999;
@media (min-width: 768px) {
  align-self: center;
  order: +2;
  width: 150px;
}
@media (min-width: 1025px) {
  width: 250px;
}
`;

export const AddWord = styled.a`
display: flex;
align-items: center;
justify-content: center; 
width: auto;

.add-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  padding: 2.5px 0 2.5px 0;
  transition: background-color  300ms;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.border.radius};
}
.add-icon {
  margin-left: 2.5px;
  padding: 2px;
}
.add-icon:hover {
  background-color: ${({ theme }) => theme.colors.tertiaryHover };
}
`;

export const Options = styled.a`
margin-left: auto;
align-self: flex-end;
display: flex;
align-items: center; 
justify-content: center;
height: 30px;
font-size: 1.3rem;
font-family: sans-serif;
color: #999;
border-radius: ${({ theme }) => theme.border.radius};
transition: background-color  300ms;
:hover  {
  background-color: ${({ theme }) => theme.colors.tertiaryHover};
}
.user-icon,
.options-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  padding: 2.5px 0 2.5px 0;
}
.user-icon {
  padding: 0;
  margin-left: 2.5px;
}
.user-icon svg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
}
.options-icon {
  width: 22.5px;  
}
.options-icon svg {
  width: 10px;
  height: 22.5px;
}
`;