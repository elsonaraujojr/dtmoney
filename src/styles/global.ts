import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	:root {
		--red: #e52e40;
		--blue: #5429cc;
		--green: #33cc95;

		--blue-light: #6933ff;

		--text-title: #363f5f;
		--text-body: #969cb3;

		--background: #373737;
		--shape: #fcfcfc;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* cont-size: 16px (Desktop) */
	/* Utilizar medida REM: 1rem = font-size(padrão desktop = 16px) */
	/* Porque não utilizar o px: porque o rem vai aumentar a fonte de acordo com a preferencia do usuário, o px é fixo. */
	html {
		@media (min-width: 1080px) {
			font-size: 93.75%; /* 16 x 0,9375 = 15px */
		}
		@media (min-width: 720px) {
			font-size: 87.5%; /* 16 x 0,875 = 14px */
		}
	}

	body {
		background: var(--background);
		--webkit-font-smoothing: antialiased;
	}

	body, input, button, textarea {
		font-family: Poppins, sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;