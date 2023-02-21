import { css } from '@emotion/react'
import React from 'react'

function ConfirmPopup({onResolve}) {
  return (
    <div
        css={css`
            height:100vh;
            position:fixed;
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            z-index:1000;
            
        `}
    >
        <div 
            css={css`
                background-color: #E05656;
                border-radius:0.5rem;
                width:100%;
                margin: 0 3rem;
                padding:1rem;
            `}
        >
            <div
                css={css`
                    text-align:center;
                `}
            >
                ¿Seguro de confirmar la compra?
            </div>
            <div
                css={css`
                    display:flex;
                    justify-content:space-between;
                    button {
                        margin: 1rem 2rem 0 2rem;
                        padding:0.5rem;
                        background-color: transparent;
                        outline:none;
                        border:solid white 1px;
                        border-radius:0.5rem;
                        color:white;
                    }
                `}
            >
                <button onClick={()=>onResolve(true)} >
                    Si
                </button>
                <button onClick={()=>onResolve(false)} > 
                    No
                </button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmPopup