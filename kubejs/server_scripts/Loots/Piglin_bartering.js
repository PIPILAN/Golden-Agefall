LootJS.lootTables(event => {
    event
        .getLootTable("minecraft:gameplay/piglin_bartering")
        .firstPool()
        .addEntry(LootEntry.of("goldenagefall:golem_charm").withWeight(5))
})