#include "pxt.h"

//% weight=100 color=#0fbc11 icon=""
namespace moreMath {

/**
  * cpow: x raised to the power y
  */
//% blockId="moremath_cpow" block="%x|pow %y"
//%
float cpow( float x, float y) {
  return pow(x,y); 
}
}
