import { ReactElement, useEffect, useState } from "react"
import arrowRight from '@assets/images/arrow/right.png';
import arrowLeft from '@assets/images/arrow/left.png'

interface SrollViewArrowProps {
    top: number | 1;
    bottom: number | 3;
    step: number | 1;
    max: number | 1;
    setCurrentIndex: (index: number) => void;
}

const SrollViewArrow: React.FC<SrollViewArrowProps> = ({
    top,
    bottom,
    step,
    max,
    setCurrentIndex,
}): ReactElement => {

    if(max <= bottom) {
        return <></>;
    }

    const [map, setMap] = useState({ top, bottom});
    const [isDisabledRight, setIsDisabledRight] = useState(false);
    const [isDisabledLeft, setIsDisabledLeft] = useState(false);

    const nextF = () => {
        if (isDisabledRight) return;
        
        setIsDisabledRight(true);
        if (map.bottom < max) {
            setCurrentIndex(map.bottom + step);
            setMap((last) => ({ top: last.top += step, bottom: last.bottom += step}));
        } else {
            setCurrentIndex(1);
            setMap(({ top: top, bottom:  bottom}));
        }
        setTimeout(() => {
            setIsDisabledRight(false);
        }, 500);
    };

    const prevF = () => {
        if (isDisabledLeft) return;
        setIsDisabledLeft(true);
        if (map.top > 1) {
            setCurrentIndex(map.top - step);
            setMap((last) => ({ top: last.top -= step, bottom: last.bottom -= step}));
        } else {
            setCurrentIndex(max);
            setMap(({ top: max - (bottom - step), bottom: max }));
        }
        setTimeout(() => {
            setIsDisabledLeft(false);
        }, 500);
    };

    return (
        <>
            <img
                onClick={prevF}
                src={arrowLeft} alt="Arrow left"
                className={`w-12 h-12 object-cover cursor-pointer absolute left-0 opacity-30 hover:opacity-100 ${isDisabledLeft ? 'hover:opacity-30 cursor-not-allowed' : ''}`}
            />
            <img
                onClick={nextF}
                src={arrowRight}
                alt="Arrow right"
                className={`w-12 h-12 object-cover cursor-pointer absolute right-0 opacity-30 hover:opacity-100 ${isDisabledRight ? 'hover:opacity-30 cursor-not-allowed' : ''}`}
            />
        </>
    )
}

export default SrollViewArrow;