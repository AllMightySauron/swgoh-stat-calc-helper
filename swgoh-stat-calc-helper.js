/*jshint esversion: 6 */

/**
 *  StatEnum is the enum with mod unit stat values.
 */
 const StatEnum = {
	"StatHealth": 1,
	"StatStrength": 2,
	"StatAgility": 3,
	"StatIntelligence": 4,
	"StatSpeed": 5,
	"StatAttackDamage": 6,
	"StatAbilityPower": 7,
	"StatArmor": 8,
	"StatSuppression": 9,
	"StatArmorPenetration": 10,
	"StatSuppressionPenetration": 11,
	"StatDodgeRating": 12,
	"StatDeflectionRating": 13,
	"StatAttackCriticalRating": 14,
	"StatAbilityCriticalRating": 15,
	"StatCriticalDamage": 16,
	"StatAccuracy": 17,
	"StatResistance": 18,
	"StatDodgePercentAdditive": 19,
	"StatDeflectionPercentAdditive": 20,
	"StatAttackCriticalPercentAdditive": 21,
	"StatAbilityCriticalPercentAdditive": 22,
	"StatArmorPercentAdditive": 23,
	"StatSuppressionPercentAdditive": 24,
	"StatArmorPenetrationPercentAdditive": 25,
	"StatSuppressionPenetrationPercentAdditive" : 26,
	"StatHealthSteal": 27,
	"StatMaxShield": 28,
	"StatShieldPenetration": 29,
    "StatHealthRegen": 30,
	"StatAttackDamagePercentAdditive": 31,
	"StatAbilityPowerPercentAdditive": 32,
	"StatDodgeNegatePercentAdditive": 33,
	"StatDeflectionNegatePercentAdditive": 34,
	"StatAttackCriticalNegatePercentAdditive": 35,
	"StatAbilityCriticalNegatePercentAdditive": 36,
	"StatDodgeNegateRating": 37,
	"StatDeflectionNegateRating": 38,
	"StatAttackCriticalNegateRating": 39,
	"StatAbilityCriticalNegateRating": 40,
	"StatOffense": 41,
	"StatDefense": 42,
	"StatDefensePenetration": 43,
	"StatEvasionRating": 44,
    "StatCriticalRating": 45,
	"StatEvasionNegateRating": 46,
	"StatCriticalNegateRating": 47,
	"StatOffensePercentAdditive": 48,
	"StatDefensePercentAdditive": 49,
	"StatDefensePenetrationPercentAdditive": 50,
	"StatEvasionPercentAdditive": 51,
	"StatEvasionNegatePercentAdditive": 52,
	"StatCriticalChancePercentAdditive" : 53,
	"StatCriticalNegateChancePercentAdditive": 54,
	"StatMaxHealthPercentAdditive": 55,
	"StatMaxShieldPercentAdditive": 56,
	"StatSpeedPercentAdditive": 57,
	"StatCounterAttackRating": 58,
	"StatTaunt": 59
};

/** 
 * Main API helper class.
 * */
 class SwgohStatCalcHelper {
    
    /**
     * Default constructor.
     */
    constructor() {   
    }

    /**
     * Get the full stats from a unit (base + mods).
     * @param {*} unitStats The unit stats object as calculated by the stats calc package.
     * @param {number} stat The desired stat from StatEnum.
     * @returns The full stat including (base + mods).
     */
    static getFullStats(unitStats, stat) {
        return unitStats.base[stat] + (unitStats.mods[stat] ? unitStats.mods[stat] : 0);
    }

    /**
     * Get the char Strength (STR) as computed from the char stats.
     * @param {*} charStats 
     * @returns {number} The char Strength (STR).
     */
    static getCharStrength(charStats) {
        return charStats.base[StatEnum.StatStrength];
    }

    /**
     * Get the char Agility (AGI) as computed from the char stats.
     * @param {*} charStats 
     * @returns {number} The unit Agility (AGI).
     */
    static getCharAgility(charStats) {
        return charStats.base[StatEnum.StatAgility];
    }

    /**
     * Get the char Tactics (TAC) as computed from the char stats.
     * @param {*} charStats 
     * @returns {number} The unit Tactics (TAC).
     */
    static getCharTactics(charStats) {
        return charStats.base[StatEnum.StatIntelligence];
    }

    /**
     * Get the char Strength Growth as computed from the char stats.
     * @param {*} charStats 
     * @returns {number} The unit Strenght Growth.
     */
    static getCharStrengthGrowth(charStats) {
        return charStats.growthModifiers[StatEnum.StatStrength];
    }

    /**
     * Get the char Agility Growth as computed from the char stats.
     * @param {*} charStats 
     * @returns {number} The unit Agility Growth.
     */
     static getCharAgilityGrowth(charStats) {
        return charStats.growthModifiers[StatEnum.StatAgility];
    }

    /**
     * Get the char Tactics Growth as computed from the char stats.
     * @param {*} charStats 
     * @returns {number} The unit Tactics Growth.
     */
     static getCharTacticsGrowth(charStats) {
        return charStats.growthModifiers[StatEnum.StatIntelligence];
    }

}

 module.exports = { SwgohStatCalcHelper, StatEnum };