LootJS.lootTables(event => {
    event
        .getLootTable("minecraft:gameplay/hero_of_the_village/librarian_gift").createPool(pool => {
            pool
                .addEntry(
                    LootEntry.of("goldenagefall:token_of_the_heroic")
                    .randomChance(0.1)
                )
        })
})
