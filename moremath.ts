/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

/**
 * More math functions
 */
//% weight=100 color=#0fbc11 icon=""
namespace moreMath {
    /**
     * x raised to the power y
     * @param x the base value
     * @param y the exponent
     */
    //% blockId="moremath_cpow" block="%x|pow %y"
    //% shim=moreMath::cpow
    export function cpow(x: number, y: number): number {
        return Math.pow(x, y)
    }

    /**
     * x raised to the power y
     * @param x the base value
     * @param y the exponent
     */
    //% blockId="moremath_fpow" block="%x|fpow %y"
    export function fpow(x: number, y: number) {
        if (x == 0) {
            return 0
        }
        if (y == 0) {
            return 1
        }
        if (x < 0) {
            return Math.pow(x, y)
        }
        return Math.exp( y * Math.log( x))
    }

    /**
     * x raised to the power y
     * @param x the base value
     * @param y the exponent
     */
    //% blockId="moremath_tpow" block="%x|tpow %y"
    export function tpow(x: number, y: number) {
        return Math.pow(x, y)
    }
}
