let $ItemAttributeModifierEvent = Java.loadClass("net.neoforged.neoforge.event.ItemAttributeModifierEvent");

// 头部护甲加值
const armorHelmetBonus = {
    "cataclysm_spellbooks:ignis_helmet": 2.0,
    "cataclysm_spellbooks:cursium_mage_circlet": 2.0,
    "mowziesmobs:wrought_helmet": 1.0,
    "mowziesmobs:umvuthana_mask_fury": 1.0,
    "mowziesmobs:umvuthana_mask_fear": 1.0,
    "mowziesmobs:umvuthana_mask_rage": 1.0,
    "mowziesmobs:umvuthana_mask_bliss": 1.0,
    "mowziesmobs:umvuthana_mask_misery": 1.0,
    "mowziesmobs:umvuthana_mask_faith": 1.0,
    "mowziesmobs:sol_visage": 2.5,
    "mowziesmobs:geomancer_beads": 1.0,
    "livingthings:ancient_helmet": 1.5,
    "cataclysm:ignitium_helmet": 6.0,
    "cataclysm:cursium_helmet": 5.0,
    "cataclysm:monstrous_helm": 2.0,
    "hyrule_terrors:zora_helmet": 2.0,
    "hyrule_terrors:knight_helmet": 1.5,
    "hyrule_terrors:evil_spirit_helmet": 2.0,
    "codex_of_champions:blood_soul_mask": 3.0,
    "hazennstuff:creaking_helmet": 2.0,
    "hazennstuff:legionnaire_helmet": 2.0,
    "hazennstuff:seraph_helmet": 2.0,
    "hazennstuff:charged_scourge_helmet": 2.0,
    "hazennstuff:soul_flame_helmet": 2.0,
    "hazennstuff:supreme_witch_helmet": 2.0,
    "hazennstuff:cryogenic_ruler_helmet": 2.0,
    "hazennstuff:flesh_mass_helmet": 2.0,
    "hazennstuff:ender_dragon_helmet": 2.0,
    "hazennstuff:dark_ritual_templar_helmet": 1.5,
    "hazennstuff:frieren_helmet": 1.5,
    "hazennstuff:synthesizer_v_helmet": 1.5,
    "hazennstuff:utau_helmet": 1.5,
    "hazennstuff:project_sekai_helmet": 1.5,
    "hazennstuff:rotten_girl_helmet": 1.5,
    "hazennstuff:fireblossom_crown": 2.0,
    "hazennstuff:fireblossom_helmet": 2.0,
    "hazennstuff:miner_helmet": 1.5,
    "hazennstuff:spectral_spelunker_helmet": 1.5,
    "hazennstuff:arbitrium_robes_helmet": 2.0,
    "hazennstuff:atlas_helmet": 1.5,
    "block_factorys_bosses:knight_helmet": 1.0,
    "block_factorys_bosses:dragon_skull": 3.0,
};

// 胸部护甲加值
const armorChestplateBonus = {
    "cataclysm_spellbooks:ignis_chestplate": 3.0,
    "cataclysm_spellbooks:ignis_chestplate_elytra": 3.0,
    "cataclysm_spellbooks:cursium_mage_chestplate": 3.0,
    "cataclysm_spellbooks:cursium_mage_elytra": 3.0,
    "cataclysm:ignitium_elytra_chestplate": 11.0,
    "cataclysm:ignitium_chestplate": 11.0,
    "cataclysm:cursium_chestplate": 10.0,
    "cataclysm:bloom_stone_pauldrons": 1.0,
    "hyrule_terrors:zora_chestplate": 6.0,
    "hyrule_terrors:barbarian_chestplate": 6.0,
    "hyrule_terrors:knight_chestplate": 5.0,
    "hyrule_terrors:evil_spirit_chestplate": 6.0,
    "codex_of_champions:blood_soul_robes": 5.0,
    "hazennstuff:creaking_chestplate": 4.5,
    "hazennstuff:legionnaire_chestplate": 4.5,
    "hazennstuff:seraph_chestplate": 4.5,
    "hazennstuff:charged_scourge_chestplate": 4.5,
    "hazennstuff:soul_flame_chestplate": 4.5,
    "hazennstuff:supreme_witch_chestplate": 4.5,
    "hazennstuff:cryogenic_ruler_chestplate": 4.5,
    "hazennstuff:flesh_mass_chestplate": 4.5,
    "hazennstuff:ender_dragon_chestplate": 4.5,
    "hazennstuff:dark_ritual_templar_chestplate": 4.0,
    "hazennstuff:frieren_chestplate": 4.0,
    "hazennstuff:synthesizer_v_chestplate": 4.0,
    "hazennstuff:utau_chestplate": 4.0,
    "hazennstuff:project_sekai_chestplate": 4.0,
    "hazennstuff:rotten_girl_chestplate": 4.0,
    "hazennstuff:fireblossom_chestplate": 4.5,
    "hazennstuff:miner_chestplate": 4.0,
    "hazennstuff:spectral_spelunker_chestplate": 4.0,
    "hazennstuff:arbitrium_robes_chestplate": 4.5,
    "hazennstuff:atlas_chestplate": 4.0,
    "irons_spellbooks:paladin_chestplate": 4.0,
    "block_factorys_bosses:knight_chestplate": 1.0,
    "block_factorys_bosses:dragon_bones_chestplate": 2.0,
};

// 腿部护甲加值
const armorLeggingsBonus = {
    "cataclysm_spellbooks:ignis_leggings": 3.0,
    "cataclysm_spellbooks:cursium_mage_skirt": 3.0,
    "cataclysm:ignitium_leggings": 9.0,
    "cataclysm:cursium_leggings": 8.0,
    "hyrule_terrors:zora_leggings": 4.0,
    "hyrule_terrors:barbarian_leggings": 5.0,
    "hyrule_terrors:knight_leggings": 3.5,
    "hyrule_terrors:evil_spirit_leggings": 5.0,
    "codex_of_champions:blood_soul_leggings": 4.0,
    "hazennstuff:creaking_leggings": 3.5,
    "hazennstuff:legionnaire_leggings": 3.5,
    "hazennstuff:seraph_leggings": 3.5,
    "hazennstuff:charged_scourge_leggings": 3.5,
    "hazennstuff:soul_flame_leggings": 3.5,
    "hazennstuff:supreme_witch_leggings": 3.5,
    "hazennstuff:cryogenic_ruler_leggings": 3.5,
    "hazennstuff:flesh_mass_leggings": 3.5,
    "hazennstuff:ender_dragon_leggings": 3.5,
    "hazennstuff:dark_ritual_templar_leggings": 3.0,
    "hazennstuff:frieren_leggings": 3.0,
    "hazennstuff:synthesizer_v_leggings": 3.0,
    "hazennstuff:utau_leggings": 3.0,
    "hazennstuff:project_sekai_leggings": 3.0,
    "hazennstuff:rotten_girl_leggings": 3.0,
    "hazennstuff:fireblossom_leggings": 3.5,
    "hazennstuff:miner_leggings": 3.0,
    "hazennstuff:spectral_spelunker_leggings": 3.0,
    "hazennstuff:arbitrium_robes_leggings": 3.5,
    "hazennstuff:atlas_leggings": 3.0,
    "block_factorys_bosses:knight_leggings": 1.0,
    "block_factorys_bosses:dragon_bones_leggings": 2.0,
};

// 脚部护甲加值
const armorBootsBonus = {
    "cataclysm_spellbooks:ignis_boots": 2.0,
    "cataclysm_spellbooks:cursium_mage_boots": 2.0,
    "cataclysm:ignitium_boots": 3.0,
    "cataclysm:cursium_boots": 5.0,
    "hyrule_terrors:zora_boots": 2.0,
    "hyrule_terrors:barbarian_boots": 3.0,
    "hyrule_terrors:knight_boots": 1.0,
    "hyrule_terrors:evil_spirit_boots": 2.0,
    "codex_of_champions:blood_soul_boots": 3.0,
    "hazennstuff:creaking_boots": 2.0,
    "hazennstuff:legionnaire_boots": 2.0,
    "hazennstuff:seraph_boots": 2.0,
    "hazennstuff:charged_scourge_boots": 2.0,
    "hazennstuff:soul_flame_boots": 2.0,
    "hazennstuff:supreme_witch_boots": 2.0,
    "hazennstuff:cryogenic_ruler_boots": 2.0,
    "hazennstuff:flesh_mass_boots": 2.0,
    "hazennstuff:ender_dragon_boots": 2.0,
    "hazennstuff:dark_ritual_templar_boots": 1.5,
    "hazennstuff:frieren_boots": 1.5,
    "hazennstuff:synthesizer_v_boots": 1.5,
    "hazennstuff:utau_boots": 1.5,
    "hazennstuff:project_sekai_boots": 1.5,
    "hazennstuff:rotten_girl_boots": 1.5,
    "hazennstuff:fireblossom_boots": 2.0,
    "hazennstuff:miner_boots": 1.5,
    "hazennstuff:spectral_spelunker_boots": 1.5,
    "hazennstuff:arbitrium_robes_boots": 2.0,
    "hazennstuff:atlas_boots": 1.5,
    "irons_spellbooks:speed_boots": 1.5,
    "block_factorys_bosses:knight_boots": 1.0,
    "block_factorys_bosses:dragon_bones_boots": 3.0,
};

// 副手护甲加值
const armorOffhandBonus = {
    "block_factorys_bosses:enhanced_shield": 3.0,
    "block_factorys_bosses:dragon_guard_shield": 5.0,
    "block_factorys_bosses:frozen_fist": 10.0,
    "endermanoverhaul:corrupted_shield": 5.0,
    "cataclysm:bulwark_of_the_flame": 15.0,
};

// 头盔属性修饰符操作
NativeEvents.onEvent($ItemAttributeModifierEvent, function(event) {
    var id = event.itemStack.id;
    if (armorHelmetBonus[id] !== undefined) {
        event.addModifier(
            "minecraft:generic.armor",
            { id: id + "_armor_mod", amount: armorHelmetBonus[id], operation: "add_value" },
            "head"
        );
    }
});

// 胸甲属性修饰符操作
NativeEvents.onEvent($ItemAttributeModifierEvent, function(event) {
    var id = event.itemStack.id;
    if (armorChestplateBonus[id] !== undefined) {
        event.addModifier(
            "minecraft:generic.armor",
            { id: id + "_armor_mod", amount: armorChestplateBonus[id], operation: "add_value" },
            "chest"
        );
    }
});

// 护腿属性修饰符操作
NativeEvents.onEvent($ItemAttributeModifierEvent, function(event) {
    var id = event.itemStack.id;
    if (armorLeggingsBonus[id] !== undefined) {
        event.addModifier(
            "minecraft:generic.armor",
            { id: id + "_armor_mod", amount: armorLeggingsBonus[id], operation: "add_value" },
            "legs"
        );
    }
});

// 靴子属性修饰符操作
NativeEvents.onEvent($ItemAttributeModifierEvent, function(event) {
    var id = event.itemStack.id;
    if (armorBootsBonus[id] !== undefined) {
        event.addModifier(
            "minecraft:generic.armor",
            { id: id + "_armor_mod", amount: armorBootsBonus[id], operation: "add_value" },
            "feet"
        );
    }
});

// 副手属性修饰符操作
NativeEvents.onEvent($ItemAttributeModifierEvent, function(event) {
    var id = event.itemStack.id;
    if (armorOffhandBonus[id] !== undefined) {
        event.addModifier(
            "minecraft:generic.armor",
            { id: id + "_armor_mod", amount: armorOffhandBonus[id], operation: "add_value" },
            "offhand"
        );
    }
});