/*jshint esversion: 6 */

const { SwgohStatCalcHelper, StatEnum } = require('../swgoh-stat-calc-helper');

const assert = require('assert');

describe('Static methods - Base Attributes', () => {
    const charStats = require('./sampleCharStats.json');

    it ('getCharStrength', () => {    
        assert.strictEqual(2241, SwgohStatCalcHelper.getCharStrength(charStats));
    });

    it ('getCharAgility', () => {    
        assert.strictEqual(1882, SwgohStatCalcHelper.getCharAgility(charStats));
    });

    it ('getCharTactics', () => {    
        assert.strictEqual(3228, SwgohStatCalcHelper.getCharTactics(charStats));
    });

    it ('getCharStrengthGrowth', () => {    
        assert.strictEqual(21.6, SwgohStatCalcHelper.getCharStrengthGrowth(charStats));
    });

    it ('getCharAgilityGrowth', () => {    
        assert.strictEqual(20.6, SwgohStatCalcHelper.getCharAgilityGrowth(charStats));
    });

    it ('getCharTacticsGrowth', () => {    
        assert.strictEqual(22.6, SwgohStatCalcHelper.getCharTacticsGrowth(charStats));
    });

});