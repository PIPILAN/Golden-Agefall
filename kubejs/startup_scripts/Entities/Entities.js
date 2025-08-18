EntityJSEvents.attributes(event => {
    //铁傀儡
    event.modify("minecraft:iron_golem", attribute => {
        attribute.add("minecraft:generic.max_health", 300)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.armor_toughness", 4)
        attribute.add("minecraft:generic.attack_damage", 25)
    })
    //快乐恶魂
    event.modify("vanillabackport:happy_ghast", attribute => {
        attribute.add("minecraft:generic.max_health", 200)
    })
})

