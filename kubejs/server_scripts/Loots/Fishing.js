
// 钓鱼板条箱战利品修改
LootJS.lootTables(event => {
    [
        "tide:gameplay/fishing/crates/overworld/water_deep",
        "tide:gameplay/fishing/crates/overworld/water_ocean",
        "tide:gameplay/fishing/crates/overworld/water_river",
        "tide:gameplay/fishing/crates/overworld/water_underground"
    ].forEach(table => {
        event
            .getLootTable(table)
            .createPool()
            .addEntry(LootEntry.of("goldenagefall:bionic_gillflap").randomChance(0.01))
    });
})