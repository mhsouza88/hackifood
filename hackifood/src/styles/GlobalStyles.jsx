import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    flex-shrink: 0;
    
  }
  :root {
     /* Transições de viewport */
    --phone: 37.5rem;
    --tablet: 37.51rem;
    --landTablet: 48.1rem;
    --desktop: 62rem;
    --widescreen: 87.5rem;
    /* Cores */
    --primary: 'green';
		--details: 'yellow';
    --secondary: 'brown';
    --disabled: 'gray';
    // --error: ${({ settings }) => settings?.colors.error} : "#DA1E28";
		--error: #DA1E28;
    /* --success: ${({ settings }) => settings?.colors.success}; */
		--success: #24A148;
    --warning: 'red';
    --btn-text: 'black';
    --label: #393939;
    --white:  #F6F6F6;
    --background-white: #ffffff;
    --menu-text: #828282;
    --red-text: #EA1D2C;
  }
`;
