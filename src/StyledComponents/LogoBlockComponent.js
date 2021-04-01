import styled from "styled-components";

export const LogoBlockComponent = styled.a`
	display: flex;
  flex-direction: column;
  align-items: center;

	.logo-icon {
  	width: 7rem;
  	fill: #fefefe;
  	transition: background-color  200ms;
	}

	.logo-title {
  	width: 250px;
  	height: 45px;
  	fill: #fefefe;
  	transition: background-color  200ms;
	}

/* 
  # IPAD PRO VERSION #
*/

  @media (min-width: 765px) { 
    flex-direction: row;
		width: 200px;
    .logo-icon {
      margin-right: 5px;
    }
  }


/* 
  # DESKTOP VERSION #
*/

	@media (min-width: 1025px) {
		width: 250px;
    .logo-icon {
  	width: 5rem;
    margin-right: 5px;
    }
    .logo-title {
      width: 200px;
    }
  }
`;