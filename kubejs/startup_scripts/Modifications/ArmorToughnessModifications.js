let $ItemAttributeModifierEvent = Java.loadClass("net.neoforged.neoforge.event.ItemAttributeModifierEvent");


// 护甲列表
const helmetToughnessBonus = {
    "mowziesmobs:wrought_helmet": 2.0,
    "mowziesmobs:sol_visage": 3.0,
    "hyrule_terrors:evil_spirit_helmet": 0.5,
    "codex_of_champions:blood_soul_mask": 1.0,
    "mutantmonsters:mutant_skeleton_skull": 3.0,
    "livingthings:ancient_helmet": 1.0,
    "cataclysm:bone_reptile_helmet": 1.5,
    "hyrule_terrors:zora_helmet": 2.5,
    "hyrule_terrors:knight_helmet": 0.5,
    "hazennstuff:rotten_girl_helmet": 1.0,
    "irons_spellbooks:shadowwalker_helmet": 3.0
};

const chestplateToughnessBonus = {
    "hyrule_terrors:evil_spirit_chestplate": 0.5,
    "codex_of_champions:blood_soul_robes": 1.0,
    "mutantmonsters:mutant_skeleton_chestplate": 3.0,
    "crystal_chronicles:evoker_chestplate": 1.0,
    "cataclysm:bone_reptile_chestplate": 1.5,
    "cataclysm:bloom_stone_pauldrons": 1.5,
    "hyrule_terrors:zora_chestplate": 2.5,
    "hyrule_terrors:knight_chestplate": 0.5,
    "hazennstuff:rotten_girl_chestplate": 1.0,
    "irons_spellbooks:shadowwalker_chestplate": 3.0
};

const leggingsToughnessBonus = {
    "hyrule_terrors:evil_spirit_leggings": 0.5,
    "codex_of_champions:blood_soul_leggings": 1.0,
    "mutantmonsters:mutant_skeleton_leggings": 3.0,
    "crystal_chronicles:evoker_leggings": 1.0,
    "hyrule_terrors:zora_leggings": 2.5,
    "hyrule_terrors:knight_leggings": 0.5,
    "hazennstuff:rotten_girl_leggings": 1.0,
    "irons_spellbooks:shadowwalker_leggings": 3.0
};

const bootsToughnessBonus = {
    "hyrule_terrors:evil_spirit_boots": 0.5,
    "codex_of_champions:blood_soul_boots": 1.0,
    "mowziesmobs:geomancer_sandals": 2.0,
    "mutantmonsters:mutant_skeleton_boots": 3.0,
    "crystal_chronicles:evoker_boots": 1.0,
    "hyrule_terrors:zora_boots": 0.5,
    "hyrule_terrors:knight_boots": 0.5,
    "hazennstuff:rotten_girl_boots": 1.0,
    "irons_spellbooks:cryomancer_boots": 3.0,
    "irons_spellbooks:shadowwalker_boots": 4.0
};

NativeEvents.onEvent($ItemAttributeModifierEvent, function(event) {
    var id = event.itemStack.id;
    if (helmetToughnessBonus[id] !== undefined) {
        event.addModifier(
            "minecraft:generic.armor_toughness",
            { id: id + "_toughness_mod", amount: helmetToughnessBonus[id], operation: "add_value" },
            "head"
        );
    }
});

NativeEvents.onEvent($ItemAttributeModifierEvent, function(event) {
    var id = event.itemStack.id;
    if (chestplateToughnessBonus[id] !== undefined) {
        event.addModifier(
            "minecraft:generic.armor_toughness",
            { id: id + "_toughness_mod", amount: chestplateToughnessBonus[id], operation: "add_value" },
            "chest"
        );
    }
});

NativeEvents.onEvent($ItemAttributeModifierEvent, function(event) {
    var id = event.itemStack.id;
    if (leggingsToughnessBonus[id] !== undefined) {
        event.addModifier(
            "minecraft:generic.armor_toughness",
            { id: id + "_toughness_mod", amount: leggingsToughnessBonus[id], operation: "add_value" },
            "legs"
        );
    }
});

NativeEvents.onEvent($ItemAttributeModifierEvent, function(event) {
    var id = event.itemStack.id;
    if (bootsToughnessBonus[id] !== undefined) {
        event.addModifier(
            "minecraft:generic.armor_toughness",
            { id: id + "_toughness_mod", amount: bootsToughnessBonus[id], operation: "add_value" },
            "feet"
        );
    }
});
