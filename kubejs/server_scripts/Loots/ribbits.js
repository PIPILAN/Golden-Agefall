

// gardener
LootJS.lootTables(event => {
    event.getLootTable("ribbits:chests/gardener").createPool(pool => {
        pool.addEntry(LootEntry.of("goldenagefall:amulet_of_gwakwa").randomChance(0.1));
    })
})
// nitwit
LootJS.lootTables(event => {
    event.getLootTable("ribbits:chests/nitwit").createPool(pool => {
        pool.addEntry(LootEntry.of("goldenagefall:amulet_of_gwakwa").randomChance(0.1));
    })
})
// sorcerer
LootJS.lootTables(event => {
    event.getLootTable("ribbits:chests/sorcerer").createPool(pool => {
        pool.addEntry(LootEntry.of("goldenagefall:amulet_of_gwakwa").randomChance(0.1));
    })
})
// merchant
LootJS.lootTables(event => {
    event.getLootTable("ribbits:chests/merchant").createPool(pool => {
        pool.addEntry(LootEntry.of("goldenagefall:amulet_of_gwakwa").randomChance(0.1));
    })
})

// fisherman_storage
LootJS.lootTables(event => {
    event.getLootTable("ribbits:chests/fisherman_storage").createPool(pool => {
        pool.addEntry(LootEntry.of("tide:amethyst_fishing_bobber").randomChance(0.1));
    })
})


// fisherman_main
LootJS.lootTables(event => {
    event.getLootTable("ribbits:chests/fisherman_main").createPool(pool => {
        pool.addEntry(LootEntry.of("tide:crystal_fishing_rod").randomChance(0.1));
    })
})