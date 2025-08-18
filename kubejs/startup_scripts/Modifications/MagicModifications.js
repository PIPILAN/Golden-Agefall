// 动态添加武器属性修饰符
let $ItemAttributeModifierEvent = Java.loadClass("net.neoforged.neoforge.event.ItemAttributeModifierEvent");

// 炽焰法术加值表-副手-百分比
const FirePowerPercentOffhandBonus = {
    "cataclysm:bulwark_of_the_flame": 0.1,
};

// 炽焰法术修饰符-副手
NativeEvents.onEvent($ItemAttributeModifierEvent, event => {
    let { itemStack } = event;
    let id = itemStack.id;

    // 副手炽焰法术修饰符 - 百分比
    if (FirePowerPercentOffhandBonus[id] !== undefined) {
        let fireSpellPowerModId = id + "_fire_spell_power_mod";
        event.addModifier(
            "irons_spellbooks:fire_spell_power",
            { id: fireSpellPowerModId, amount: FirePowerPercentOffhandBonus[id], operation: 'add_multiplied_base' },
            'offhand'
        );
    }
});