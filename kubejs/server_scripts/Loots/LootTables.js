//向 minecraft:chests/ancient_city 添加 goldenagefall:eternalpotions
// 批量为多个战利品箱添加同一个自定义战利品池
LootJS.lootTables(event => {
    [
        "minecraft:chests/igloo_chest",
        "minecraft:chests/jungle_temple",
        "minecraft:chests/pillager_outpost",
        "minecraft:chests/ruined_portal",
        "minecraft:chests/shipwreck_supply",
        "minecraft:chests/simple_dungeon",
        "minecraft:chests/spawn_bonus_chest",
        "minecraft:chests/stronghold_crossing",
        "minecraft:chests/trial_chambers/corridor",
        "minecraft:chests/trial_chambers/reward",
        "minecraft:chests/trial_chambers/supply",
        "minecraft:chests/underwater_ruin_big",
        "minecraft:chests/underwater_ruin_small",
        "minecraft:chests/village/village_armorer",
        "minecraft:chests/village/village_weaponsmith",
    ].forEach(id => {
        event.getLootTable(id).createPool(pool => {
            pool.addEntry(LootEntry.reference("goldenagefall:curios_normal"))
        })
    })
})

LootJS.lootTables(event => {
    [
        "minecraft:chests/bastion_bridge",
        "minecraft:chests/bastion_other",
        "minecraft:chests/desert_pyramid",
        "minecraft:chests/nether_bridge",
        "minecraft:chests/stronghold_corridor",
        "minecraft:chests/bastion_other",
        "minecraft:chests/trial_chambers/intersection",
        "minecraft:chests/trial_chambers/intersection_barrel",
        "minecraft:chests/trial_chambers/reward_ominous_rare",
        "minecraft:chests/trial_chambers/reward_rare",
    ].forEach(id => {
        event.getLootTable(id).createPool(pool => {
            pool.addEntry(LootEntry.reference("goldenagefall:curios_rare"))
        })
    })
})

LootJS.lootTables(event => {
    [
        "minecraft:chests/bastion_treasure",
        "minecraft:chests/end_city_treasure",
        "minecraft:chests/buried_treasure",
        "minecraft:chests/shipwreck_treasure",
        "minecraft:chests/trial_chambers/reward_ominous_unique",
        "minecraft:chests/trial_chambers/reward_unique",
        "minecraft:chests/woodland_mansion",
    ].forEach(id => {
        event.getLootTable(id).createPool(pool => {
            pool.addEntry(LootEntry.reference("goldenagefall:curios_epic"))
        })
    })
})

// 永恒药水添加战利品表
LootJS.lootTables(event => {
    [
        "irons_spellbooks:chests/mangrove_hut/potion_ingredient_storage",
        "hopo:chests/mineshaft/big_rooms/potion",
    ].forEach(id => {
        event.getLootTable(id).createPool(pool => {
            pool.addEntry(LootEntry.reference("goldenagefall:eternalpotions_common"))
        })
    })
})

LootJS.lootTables(event => {
    [
        "irons_spellbooks:chests/mangrove_hut/hidden_potion_storage",
        "alshanex_familiars:chests/origin_island/workshop/potions",
    ].forEach(id => {
        event.getLootTable(id).createPool(pool => {
            pool.addEntry(LootEntry.reference("goldenagefall:eternalpotions_rare"))
        })
    })
})


// 永恒药水池
// 药水概率 10% 空气概率 90%
LootJS.lootTables(event => {
    event.create("goldenagefall:eternalpotions_common").createPool(pool => {
        // 批量添加永恒药水
        [
            "hermes_grace",
            "atalantas_dash",
            "ares_bulwark",
            "hephaestus_ember",
            "poseidons_gift",
            "demeters_bounty",
            "heracles_might",
            "tyches_gamble",
            "artemis_veil",
            "hygieias_draught"
        ].forEach(id => {
            pool.addEntry(LootEntry.of(`eternalpotions:${id}`).withWeight(1))
        })

        // 添加空战利品
        pool.addEntry(LootEntry.of("minecraft:air").withWeight(300))
    })
})

LootJS.lootTables(event => {
    event.create("goldenagefall:eternalpotions_rare").createPool(pool => {
        // 批量添加永恒药水
        [
            "hermes_grace",
            "atalantas_dash",
            "ares_bulwark",
            "hephaestus_ember",
            "poseidons_gift",
            "demeters_bounty",
            "heracles_might",
            "tyches_gamble",
            "artemis_veil",
            "hygieias_draught"
        ].forEach(id => {
            pool.addEntry(LootEntry.of(`eternalpotions:${id}`).withWeight(1))
        })

        // 添加空战利品
        pool.addEntry(LootEntry.of("minecraft:air").withWeight(100))
    })
})

// 随机战利品饰品池
// 添加 goldenagefall:curios_normal 战利品池
// 该池包含所有 战利品 饰品，权重为1
LootJS.lootTables(event => {
    event.create("goldenagefall:curios_normal").createPool(pool => {
        pool.addEntry(LootEntry.of("goldenagefall:heart_of_manathrum").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:diadem_of_dominion").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:amulet_of_zeus").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:nail_and_hammer").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bracelet_of_austerity").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:molten_coreheart").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_burning_blood").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:emberflame_bracelet").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:frostbite_circlet").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:chime_of_the_frostwhisper").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:shardstep_treadstone").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:stormstep_veil").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:emblem_of_thundercry").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_stormbreath").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:chain_of_sacred_edict").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_echoing_spirits").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:sanctified_bone_of_judicore").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bell_of_soulpact").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:oathbone_ring").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:crimson_moon_pendant").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:spellbone_core").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:scarf_of_forbidden_rites").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:fang_of_the_voidcorrupt").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:profane_bell").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:voidbeast_scale").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_the_voidtouch").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:gauntlet_of_the_abyssshade").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:eye_of_the_endshade").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:linkchain_of_the_netherbind").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bell_of_the_abyssgloom").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bell_of_sacrificial_pact").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:emblem_of_evokelight").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:soulring_of_arcanexus").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:urn_of_the_windwhisper").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bracelet_of_the_sylvan_spirit").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:vineserpent_greaves").withWeight(1));

        // 添加空战利品
        pool.addEntry(LootEntry.of("minecraft:air").withWeight(500))
    })
})

// 添加 goldenagefall:curios_rare 战利品池
LootJS.lootTables(event => {
    event.create("goldenagefall:curios_rare").createPool(pool => {
        pool.addEntry(LootEntry.of("goldenagefall:heart_of_manathrum").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:diadem_of_dominion").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:amulet_of_zeus").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:nail_and_hammer").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bracelet_of_austerity").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:molten_coreheart").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_burning_blood").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:emberflame_bracelet").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:frostbite_circlet").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:chime_of_the_frostwhisper").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:shardstep_treadstone").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:stormstep_veil").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:emblem_of_thundercry").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_stormbreath").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:chain_of_sacred_edict").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_echoing_spirits").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:sanctified_bone_of_judicore").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bell_of_soulpact").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:oathbone_ring").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:crimson_moon_pendant").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:spellbone_core").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:scarf_of_forbidden_rites").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:fang_of_the_voidcorrupt").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:profane_bell").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:voidbeast_scale").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_the_voidtouch").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:gauntlet_of_the_abyssshade").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:eye_of_the_endshade").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:linkchain_of_the_netherbind").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bell_of_the_abyssgloom").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bell_of_sacrificial_pact").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:emblem_of_evokelight").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:soulring_of_arcanexus").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:urn_of_the_windwhisper").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bracelet_of_the_sylvan_spirit").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:vineserpent_greaves").withWeight(1));

        // 添加空战利品
        pool.addEntry(LootEntry.of("minecraft:air").withWeight(300))
    })
})

// 添加 goldenagefall:curios_epic 战利品池
LootJS.lootTables(event => {
    event.create("goldenagefall:curios_epic").createPool(pool => {
        pool.addEntry(LootEntry.of("goldenagefall:heart_of_manathrum").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:diadem_of_dominion").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:amulet_of_zeus").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:nail_and_hammer").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bracelet_of_austerity").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:molten_coreheart").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_burning_blood").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:emberflame_bracelet").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:frostbite_circlet").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:chime_of_the_frostwhisper").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:shardstep_treadstone").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:stormstep_veil").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:emblem_of_thundercry").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_stormbreath").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:chain_of_sacred_edict").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_echoing_spirits").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:sanctified_bone_of_judicore").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bell_of_soulpact").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:oathbone_ring").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:crimson_moon_pendant").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:spellbone_core").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:scarf_of_forbidden_rites").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:fang_of_the_voidcorrupt").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:profane_bell").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:voidbeast_scale").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:ring_of_the_voidtouch").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:gauntlet_of_the_abyssshade").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:eye_of_the_endshade").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:linkchain_of_the_netherbind").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bell_of_the_abyssgloom").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bell_of_sacrificial_pact").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:emblem_of_evokelight").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:soulring_of_arcanexus").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:urn_of_the_windwhisper").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:bracelet_of_the_sylvan_spirit").withWeight(1));
        pool.addEntry(LootEntry.of("goldenagefall:vineserpent_greaves").withWeight(1));

        // 添加空战利品
        pool.addEntry(LootEntry.of("minecraft:air").withWeight(100))
    })
})
