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
    //% block
    export function tpow(x: number, y: number) {
        return Math.pow(x, y)
    }

    /**
     * x raised to the power y
     * @param x the base value
     * @param y the exponent
     */
    //% block
    //% shim=moreMath::cpow
    export function cpow(x: number, y: number) {
        return Math.pow(x, y)
    }
}
