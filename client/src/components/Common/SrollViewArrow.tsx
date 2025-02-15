import { ReactElement, useState, memo, useEffect } from "react"
import arrowRight from '@assets/images/arrow/right.png';
import arrowLeft from '@assets/images/arrow/left.png'

const SrollViewArrow = (): {
    left: ReactElement,
    right: ReactElement,
} => {
    return {
        left:
            <img
                id= "left"
                src={arrowLeft}
                alt="Arrow left"
                className={"w-12 h-12 z-999 object-cover cursor-pointer absolute left-0 opacity-30 hover:opacity-100"}
            />,
        right:
            <img
                id= "right"
                src={arrowRight}
                alt="Arrow right"
                className={"w-12 h-12 z-999 object-cover cursor-pointer absolute right-0 opacity-30 hover:opacity-100"}
            />
    }
}

export default SrollViewArrow;