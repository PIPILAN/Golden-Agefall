// 深渊监守者 重铸宝石
LootJS.lootTables(event => {
    event.create("spice:entities/warden_boss").createPool(pool => {
        pool.addEntry(
            LootEntry.of('goldenagefall:bauble_reforge_gem')
            .withWeight(1)
            .setCount([2, 4])
            .killedByPlayer()
            .applyEnchantmentBonus("minecraft:looting", [0, 2])
        )
    })
})

// 监守者 重铸宝石
LootJS.lootTables(event => {
    event.modifyEntityTables("minecraft:warden").createPool(pool => {
        pool.addEntry(
            LootEntry.of('goldenagefall:bauble_reforge_gem')
                .withWeight(1)
                .setCount([0, 1])
                .killedByPlayer()
                .applyEnchantmentBonus("minecraft:looting", [0, 1])
        )
    })
})

// 女巫 烈焰粉
LootJS.lootTables(event => {
    event
        .getEntityTable("minecraft:witch")
        .firstPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:blaze_powder")
                    .withWeight(1)
                    .setCount([1, 2])
                    .applyEnchantmentBonus("minecraft:looting", [0, 1])
            )
        })
})

// 僵尸
LootJS.lootTables(event => {
    event
        .getEntityTable("minecraft:zombie")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:corrupted_flesh_gauntlet")
                    .randomTableBonus("minecraft:looting", [0.005, 0.010, 0.015, 0.020])
            )
        })
})
// 燃烧僵尸
LootJS.lootTables(event => {
    event
        .getEntityTable("rottencreatures:burned")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:corrupted_flesh_gauntlet")
                    .randomTableBonus("minecraft:looting", [0.005, 0.010, 0.015, 0.020])
            )
        })
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:molten_coreheart")
                    .randomTableBonus("minecraft:looting", [0.001, 0.0015, 0.002, 0.025])
            )
        })
})
// 突变僵尸
LootJS.lootTables(event => {
    event
        .getEntityTable("mutantmonsters:mutant_zombie")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:corrupted_flesh_gauntlet")
                    .randomTableBonus("minecraft:looting", [0.5, 0.6, 0.8, 1.0])
            )
        })
})
//沼泽僵尸
LootJS.lootTables(event => {
    event
        .getEntityTable("rottencreatures:swampy")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:corrupted_flesh_gauntlet")
                    .randomTableBonus("minecraft:looting", [0.005, 0.010, 0.015, 0.020])
            )
        })
})
//僵尸海盗船长
LootJS.lootTables(event => {
    event
        .getEntityTable("rottencreatures:dead_beard")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:corrupted_flesh_gauntlet")
            )
        })
})
//海盗走狗僵尸
LootJS.lootTables(event => {
    event
        .getEntityTable("rottencreatures:zombie_lackey")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:corrupted_flesh_gauntlet")
                    .randomTableBonus("minecraft:looting", [0.005, 0.010, 0.015, 0.020])
            )
        })
})
// 骷髅
LootJS.lootTables(event => {
    event
        .getEntityTable("minecraft:skeleton")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:palewood_phalange")
                    .randomTableBonus("minecraft:looting", [0.005, 0.010, 0.015, 0.020])
            )
        })
})
// 骷髅仆从
LootJS.lootTables(event => {
    event
        .create("remnant_bosses:entities/skeleton_minions")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:palewood_phalange")
                    .randomTableBonus("minecraft:looting", [0.005, 0.010, 0.015, 0.020])
            )
    })
})
// 突变骷髅
LootJS.lootTables(event => {
    event
        .getEntityTable("mutantmonsters:mutant_skeleton")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:palewood_phalange")
                    .randomTableBonus("minecraft:looting", [0.5, 0.6, 0.8, 1.0])
            )
        })
})
// 巫师
LootJS.lootTables(event => {
    event
        .create("wizard_tower:entities/wizard")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:grimoire_of_arcanum")
                    .randomTableBonus("minecraft:looting", [0.02, 0.04, 0.06, 0.08])
            )
        })
})
// 火焰法师
LootJS.lootTables(event => {
    event
        .getEntityTable("irons_spellbooks:pyromancer")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:grimoire_of_arcanum")
                    .randomTableBonus("minecraft:looting", [0.02, 0.04, 0.06, 0.08])
            )
        })
})
// 冰霜法师
LootJS.lootTables(event => {
    event
        .getEntityTable("irons_spellbooks:cryomancer")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:grimoire_of_arcanum")
                    .randomTableBonus("minecraft:looting", [0.02, 0.04, 0.06, 0.08])
            )
        })
})
// 铁魔法 死灵法师
LootJS.lootTables(event => {
    event
        .getEntityTable("irons_spellbooks:necromancer")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:grimoire_of_arcanum")
                    .randomTableBonus("minecraft:looting", [0.02, 0.04, 0.06, 0.08])
            )
        })
})
// 灾厄侵扰 死灵法师
LootJS.lootTables(event => {
    event
        .getEntityTable("illagerinvasion:necromancer")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("goldenagefall:grimoire_of_arcanum")
                    .randomTableBonus("minecraft:looting", [0.02, 0.04, 0.06, 0.08])
            )
        })
})
// 远古烈焰人
LootJS.lootTables(event => {
    event
        .getEntityTable("livingthings:ancient_blaze")
        .createPool(pool => {
            pool.addEntry(LootEntry.of("goldenagefall:flamefist"))
        })
})
// 祈灵师
LootJS.lootTables(event => {
    event
        .getEntityTable("illagerinvasion:invoker")
        .createPool(pool => {
            pool.addEntry(LootEntry.of("goldenagefall:emblem_of_evokelight"))
        })
})