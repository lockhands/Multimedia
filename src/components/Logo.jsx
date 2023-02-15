import { css } from '@emotion/react'

import logo from '../assets/logo.jpg'


import React from 'react'

function Logo() {
  return (
    <div
        css={css`
            background-color:red;
            display:flex;
            justify-content:center;
            width:250px;
            height:275px;
            
        `}
    >
            <img
                css={css`
                    object-position: cover;
                    width:300px;
                    height:300px;
                `}
                src={logo} alt="LOGO" 
            />
    </div>
  )
}

export default Logo