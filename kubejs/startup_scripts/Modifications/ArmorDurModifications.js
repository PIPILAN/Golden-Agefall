// 动态添加武器属性修饰符
let $ItemAttributeModifierEvent = Java.loadClass("net.neoforged.neoforge.event.ItemAttributeModifierEvent");

// 批量护甲最大耐久
const armorMaxDurabilities = {
    "hyrule_terrors:zora_helmet": 600,
    "hyrule_terrors:zora_chestplate": 600,
    "hyrule_terrors:zora_leggings": 600,
    "hyrule_terrors:zora_boots": 600,
    "hyrule_terrors:barbarian_chestplate": 600,
    "hyrule_terrors:barbarian_leggings": 600,
    "hyrule_terrors:barbarian_boots": 600,
    "hyrule_terrors:knight_helmet": 600,
    "hyrule_terrors:knight_chestplate": 600,
    "hyrule_terrors:knight_leggings": 600,
    "hyrule_terrors:knight_boots": 600,
    "hyrule_terrors:evil_spirit_helmet": 800,
    "hyrule_terrors:evil_spirit_chestplate": 800,
    "hyrule_terrors:evil_spirit_leggings": 800,
    "hyrule_terrors:evil_spirit_boots": 800,
    "block_factorys_bosses:enhanced_shield": 650,
    "block_factorys_bosses:dragon_guard_shield": 980,
    "block_factorys_bosses:frozen_fist": 1500,

};

// 批量设定最大耐久
ItemEvents.modification(event => {
    Object.entries(armorMaxDurabilities).forEach(([id, dur]) => {
        event.modify(id, item => {
            item.setMaxDamage(dur);
        });
    });
});
