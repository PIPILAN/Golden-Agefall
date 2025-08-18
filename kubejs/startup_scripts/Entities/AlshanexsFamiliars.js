
EntityJSEvents.attributes(event => {

    // 雷霆术士魔宠
    event.modify('alshanex_familiars:mage_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 200)
        attribute.add("minecraft:generic.armor", 10)
    })//大法师魔宠
        event.modify('alshanex_familiars:archmage_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 300)
        attribute.add("minecraft:generic.armor", 15)
    })//唤魔师魔宠
        event.modify('alshanex_familiars:summoner_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 200)
        attribute.add("minecraft:generic.armor", 10)
    })//死灵法师魔宠
        event.modify('alshanex_familiars:necromancer_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 300)
        attribute.add("minecraft:generic.armor", 15)
    })//猎人魔宠
        event.modify('alshanex_familiars:hunter_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 200)
        attribute.add("minecraft:generic.armor", 10)
    })//德鲁伊魔宠
        event.modify('alshanex_familiars:druid_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 500)
        attribute.add("minecraft:generic.armor", 20)
    })//幻术师魔宠
        event.modify('alshanex_familiars:illusionist_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 300)
        attribute.add("minecraft:generic.armor", 15)
    })//炽热魔宠
        event.modify('alshanex_familiars:scorcher_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 400)
        attribute.add("minecraft:generic.armor", 18)
    })//牧师魔宠
        event.modify('alshanex_familiars:cleric_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 500)
        attribute.add("minecraft:generic.armor", 20)
    })//瘟疫医生魔宠
        event.modify('alshanex_familiars:plague_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 500)
        attribute.add("minecraft:generic.armor", 20)
    })//吟游诗人魔宠
        event.modify('alshanex_familiars:bard_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 500)
        attribute.add("minecraft:generic.armor", 20)
    })//召唤的暗影
        event.modify('alshanex_familiars:summoned_shadow', attribute => {
        attribute.add("minecraft:generic.max_health", 100)
        attribute.add("minecraft:generic.armor", 5)
        attribute.add("minecraft:generic.attack_damage", 8)
    })//幻术师的分身
        event.modify('alshanex_familiars:decoy', attribute => {
        attribute.add("minecraft:generic.max_health", 100)
    })//冰灵魔宠
        event.modify('alshanex_familiars:frostling_pet', attribute => {
        attribute.add("minecraft:generic.max_health", 400)
    })

})