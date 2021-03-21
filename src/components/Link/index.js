import NextLink from "next/link";
import styled from "styled-components";

const secundaryFontColor = ({ theme }) => theme.font.SecudaryColor;
const tertiaryFontColor = ({ theme }) => theme.font.tertiaryColor;

const A = styled.a`
  text-decoration: none;
  color: ${secundaryFontColor};

  transition: color 100ms;

  :hover {
    color: ${tertiaryFontColor};
  }
`;

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <A as='a' {...props}>
        {children}
      </A>
    </NextLink>
  );
}
