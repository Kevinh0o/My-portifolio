import styled from "styled-components";

export const Button = styled.button`
    background: none;
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;

    margin: 10px;

	p{
		color: grey;

		${({ active }) => active && `
    	color: white
  		`}
	}
`;