import { css } from '@emotion/react'
import React from 'react'

function PedidosList({children}) {
  return (
    <ul
        css={css`
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            @media (min-width: 801px) {
                display: grid; /* 1 */
                grid-template-columns: repeat(auto-fill, 13rem); /* 2 */
                justify-content:initial;
                column-gap:3.5rem;
                row-gap:2.5rem;
            }
        `}
    >
        {children}
    </ul>
  )
}

export default PedidosList