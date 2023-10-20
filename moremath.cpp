#include "pxt.h"

//% weight=100 color=#0fbc11 icon=""
namespace moreMath {

/**
  * cpow: x raised to the power y
  */
//% block="%x pow %y"
//%
double cpow( double x, double y) {
  return pow(x,y); 
}
}
