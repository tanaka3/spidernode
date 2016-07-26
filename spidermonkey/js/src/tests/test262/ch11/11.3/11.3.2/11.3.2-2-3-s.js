/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch11/11.3/11.3.2/11.3.2-2-3-s.js
 * @description Strict Mode - SyntaxError is not thrown if the identifier 'arguments[...]' appears as a PostfixExpression(arguments--)
 * @onlyStrict
 */


function testcase() {
        "use strict";
        arguments[1] = 7;
        arguments[1]--;
        return arguments[1]===6;
    }
runTestCase(testcase);
