import { useLayoutEffect } from "react";

export function useLockBodyScroll(locked = false) {

    const removeStylesAttribute = () => {
        document.body.removeAttribute('style');
    }
    
    useLayoutEffect(() => {
        if (locked) {
            document.body.style.overflow = 'hidden';
        } else {
            removeStylesAttribute()
        }

        return () => {
            removeStylesAttribute()
        }
    }, [locked])
}