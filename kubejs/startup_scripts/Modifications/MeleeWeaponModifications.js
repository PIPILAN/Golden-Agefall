// 动态添加武器属性修饰符
let $ItemAttributeModifierEvent = Java.loadClass("net.neoforged.neoforge.event.ItemAttributeModifierEvent");

// 攻击力加值表-主手
const atkBonus = {
    "alshanex_familiars:bard_harp": 4.0,
    "cataclysm_spellbooks:bloom_stone_staff": 2.0,
    "cataclysm_spellbooks:coral_staff": 2.0,
    "cataclysm_spellbooks:fake_wudjets_staff": 3.0,
    "cataclysm_spellbooks:void_staff": 2.0,
    "cataclysm_spellbooks:spirit_sunderer": 2.0,
    "cataclysm_spellbooks:soul_brazier": 2.0,
    "cataclysm_spellbooks:monstrous_flamberge": 5.5,
    "cataclysm_spellbooks:hellfire_forge": 7.5,
    "mowziesmobs:wrought_axe": 5.5,
    "mowziesmobs:spear": 2.5,
    "mutantmonsters:hulk_hammer": 4.5,
    "mutantmonsters:creeper_shard": 1.5,
    "mutantmonsters:endersoul_hand": 3.0,
    "crystal_chronicles:paladin_sword": 4.5,
    "crystal_chronicles:ice_hammer": 6.0,
    "crystal_chronicles:chakram": 4.0,
    "crystal_chronicles:spear": 5.0,
    "crystal_chronicles:staff": 3.5,
    "crystal_chronicles:blood_scythe": 5.0,
    "crystal_chronicles:lightning_bident": 5.0,
    "crystal_chronicles:evocation_twinblade": 4.5,
    "illagerinvasion:platinum_infused_hatchet": 3.5,
    "cataclysm:coral_spear": 3.5,
    "cataclysm:coral_bardiche": 5.0,
    "cataclysm:athame": 2.5,
    "cataclysm:khopesh": 3.0,
    "cataclysm:black_steel_sword": 3.0,
    "cataclysm:black_steel_axe": 4.5,
    "cataclysm:gauntlet_of_guard": 5.5,
    "cataclysm:gauntlet_of_bulwark": 5.5,
    "cataclysm:gauntlet_of_maelstrom": 5.5,
    "cataclysm:the_incinerator": 7.0,
    "cataclysm:soul_render": 7.5,
    "cataclysm:the_annihilator": 4.0,
    "cataclysm:astrape": 5.5,
    "cataclysm:ceraunus": 8.0,
    "cataclysm:the_immolator": 4.0,
    "cataclysm:meat_shredder": 4.5,
    "cataclysm:void_forge": 6.5,
    "cataclysm:tidal_claws": 4.0,
    "cataclysm:infernal_forge": 6.5,
    "cataclysm:ancient_spear": 5.0,
    "hyrule_terrors:lizalfos_horn_dagger": 2.5,
    "hyrule_terrors:silver_longsword": 4.0,
    "hyrule_terrors:knights_claymore": 6.5,
    "hyrule_terrors:boulder_breaker": 7.0,
    "hyrule_terrors:bokoblin_arm": 2.0,
    "codex_of_champions:crystal_claymore": 6.5,
    "codex_of_champions:deathfire_greatsword": 6.0,
    "codex_of_champions:soulfire_greatsword": 5.5,
    "codex_of_champions:angelic_annhilator": 4.5,
    "codex_of_champions:excalibur": 4.0,
    "codex_of_champions:thunderbringer": 6.5,
    "codex_of_champions:brutis": 3.5,
    "codex_of_champions:worldbreaker": 6.5,
    "codex_of_champions:sculk_slicer": 3.5,
    "codex_of_champions:monosword": 5.0,
    "codex_of_champions:plasmasword": 5.0,
    "codex_of_champions:tri_blade": 16.0,
    "codex_of_champions:nameless_staff": 2.0,
    "tide:blazing_swordfish": 3.0,
    "hazennstuff:ice_pike": 5.5,
    "hazennstuff:fireblossom_rapier": 4.5,
    "hazennstuff:beongae": 4.0,
    "hazennstuff:ancient_warriors_axe": 5.0,
    "hazennstuff:skyscorcher": 5.0,
    "hazennstuff:bountiful_harvest": 7.0,
    "hazennstuff:starfury": 8.0,
    "hazennstuff:frieren_staff": 2.0,
    "hazennstuff:wisewood_cane": 2.0,
    "hazennstuff:rod_of_discord": 2.0,
    "hazennstuff:spectral_pickaxe": 3.5,
    "bosses_of_mass_destruction:earthdive_spear": 4.5,
    "endermanoverhaul:corrupted_blade": 3.5,
    "remnant_bosses:ossukage_sword": 6.0,
    "irons_spellbooks:graybeard_staff": 1.5,
    "irons_spellbooks:pyrium_staff": 4.5,
    "irons_spellbooks:artificer_cane": 2.0,
    "irons_spellbooks:ice_staff": 2.5,
    "irons_spellbooks:lightning_rod": 2.5,
    "irons_spellbooks:blood_staff": 4.0,
    "irons_spellbooks:magehunter": 3.5,
    "irons_spellbooks:spellbreaker": 5.0,
    "irons_spellbooks:claymore": 5.0,
    "irons_spellbooks:keeper_flamberge": 5.5,
    "irons_spellbooks:legionnaire_flamberge": 5.5,
    "irons_spellbooks:amethyst_rapier": 4.0,
    "irons_spellbooks:misery": 4.0,
    "irons_spellbooks:hellrazor": 6.5,
    "irons_spellbooks:decrepit_scythe": 5.5,
    "irons_spellbooks:boreal_blade": 8.0,
    "block_factorys_bosses:knight_sword": 2.5,
};

// 攻速加值表-主手
const atkSpeedBonus = {
    "mowziesmobs:wrought_axe": 0.1,
    "cataclysm:coral_bardiche": 0.2,
    "cataclysm:black_steel_axe": 0.1,
    "cataclysm:astrape": 0.1,
    "hyrule_terrors:silver_longsword": 0.3,
    "codex_of_champions:thunderbringer": 0.1,
    "hazennstuff:ice_pike": 0.5,
    "hazennstuff:beongae": 0.2,
    "hazennstuff:skyscorcher": 0.4,
    "codex_of_champions:deathfire_greatsword": 0.2,
    "block_factorys_bosses:knight_sword": 0.3,
};

// 攻击力加值表-副手
const atkBonusOffhand = {
    "block_factorys_bosses:frozen_fist": 3,
};

// 攻速加值表-副手
const atkSpeedBonusOffhand = {};

// 武器属性修饰符-主手
NativeEvents.onEvent($ItemAttributeModifierEvent, event => {
    let { itemStack } = event;
    let id = itemStack.id;

    // 攻击力修饰符
    if (atkBonus[id] !== undefined) {
        let atkModId = id + "_atk_mod";
        event.addModifier(
            "minecraft:generic.attack_damage",
            { id: atkModId, amount: atkBonus[id], operation: 'add_value' },
            'mainhand'
        );
    }
    // 攻速修饰符
    if (atkSpeedBonus[id] !== undefined) {
        let spdModId = id + "_spd_mod";
        event.addModifier(
            "minecraft:generic.attack_speed",
            { id: spdModId, amount: atkSpeedBonus[id], operation: 'add_value' },
            'mainhand'
        );
    }
});

// 武器属性修饰符-副手
NativeEvents.onEvent($ItemAttributeModifierEvent, event => {
    let { itemStack } = event;
    let id = itemStack.id;

    // 副手攻击力修饰符
    if (atkBonusOffhand[id] !== undefined) {
        let atkModId = id + "_atk_mod";
        event.addModifier(
            "minecraft:generic.attack_damage",
            { id: atkModId, amount: atkBonusOffhand[id], operation: 'add_value' },
            'offhand'
        );
    }
    // 副手攻速修饰符
    if (atkSpeedBonusOffhand[id] !== undefined) {
        let spdModId = id + "_spd_mod";
        event.addModifier(
            "minecraft:generic.attack_speed",
            { id: spdModId, amount: atkSpeedBonusOffhand[id], operation: 'add_value' },
            'offhand'
        );
    }
});

// 批量设置最大耐久
const maxDurabilities = {
    "mutantmonsters:hulk_hammer": 250,
    "mutantmonsters:endersoul_hand": 500,
    "cataclysm:coral_spear": 250,
    "cataclysm:coral_bardiche": 300,
    "cataclysm:athame": 250,
    "cataclysm:khopesh": 800,
    "hyrule_terrors:lizalfos_horn_dagger": 1561,
    "tide:blazing_swordfish": 500,
    "bosses_of_mass_destruction:earthdive_spear": 2031,
    "endermanoverhaul:corrupted_blade": 800,
    "hyrule_terrors:silver_longsword": 2031
};

ItemEvents.modification(event => {
    Object.entries(maxDurabilities).forEach(([id, dur]) => {
        event.modify(id, item => {
            item.setMaxDamage(dur);
        });
    });
});
