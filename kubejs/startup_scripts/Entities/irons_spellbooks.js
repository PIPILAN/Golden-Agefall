
EntityJSEvents.attributes(event => {

    // 召唤的僵尸属性调整
    event.modify('irons_spellbooks:summoned_zombie', attribute => {
        attribute.add("minecraft:generic.max_health", 100)
        attribute.add("minecraft:generic.armor", 8)
        attribute.add("minecraft:generic.attack_damage", 8)
    })// 召唤的骷髅属性调整
    event.modify('irons_spellbooks:summoned_skeleton', attribute => {
        attribute.add("minecraft:generic.max_health", 75)
        attribute.add("minecraft:generic.armor", 5)
    })// 召唤的恼鬼属性调整
    event.modify('irons_spellbooks:summoned_vex', attribute => {
        attribute.add("minecraft:generic.max_health", 20)
        attribute.add("minecraft:generic.armor", 12)
        attribute.add("minecraft:generic.attack_damage", 35)
    })// 召唤的阔剑属性调整
    event.modify('irons_spellbooks:summoned_claymore', attribute => {
        attribute.add("minecraft:generic.max_health", 80)
        attribute.add("minecraft:generic.attack_damage", 18)
    })// 召唤的北极熊属性调整
    event.modify('irons_spellbooks:summoned_polar_bear', attribute => {
        attribute.add("minecraft:generic.max_health", 120)
        attribute.add("minecraft:generic.attack_damage", 15)
    })// 召唤的刺剑属性调整
    event.modify('irons_spellbooks:summoned_rapier', attribute => {
        attribute.add("minecraft:generic.max_health", 40)
        attribute.add("minecraft:generic.attack_damage", 30)
    })// 召唤的剑属性调整
    event.modify('irons_spellbooks:summoned_sword', attribute => {
        attribute.add("minecraft:generic.max_health", 60)
        attribute.add("minecraft:generic.attack_damage", 20)
    })

})