import React from 'react'
import { css } from '@emotion/react'

function Logo() {
  return (
    <div
        css={css`
            display:flex;
            justify-content:center;
            align-items:center;
            width:250px;
            background-color: #D9D9D9;
            height:250px;
            border-radius:1000px;
          
            h1 {
              font-size:3rem;
            }

        `}
    >
      <h1> Logo </h1>
    </div>
  )
}

export default Logo