//BOSS

EntityJSEvents.attributes(event => {

    // 钢铁守护者
    event.modify("mowziesmobs:ferrous_wroughtnaut", attribute => {
        attribute.add("minecraft:generic.max_health", 250)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.armor_toughness", 5)
        attribute.add("minecraft:generic.attack_damage", 30)
    })//太阳鸟·乌姆武提
    event.modify("mowziesmobs:umvuthi", attribute => {
        attribute.add("minecraft:generic.max_health", 500)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.attack_damage", 10)
    })//祈灵师
    event.modify("illagerinvasion:invoker", attribute => {
        attribute.add("minecraft:generic.max_health", 2000)
        attribute.add("minecraft:generic.armor", 6)
        attribute.add("minecraft:generic.attack_damage", 10)
    })//霜冻巨兽
    event.modify("mowziesmobs:frostmaw", attribute => {
        attribute.add("minecraft:generic.max_health", 3000)
        attribute.add("minecraft:generic.armor", 15)
        attribute.add("minecraft:generic.attack_damage", 30)
    })//死者之王
    event.modify("irons_spellbooks:dead_king_corpse", attribute => {
        attribute.add("minecraft:generic.max_health", 5000)
        attribute.add("minecraft:generic.armor", 25)
        attribute.add("minecraft:generic.attack_damage", 35)
    })
    event.modify("irons_spellbooks:dead_king", attribute => {
        attribute.add("minecraft:generic.max_health", 5000)
        attribute.add("minecraft:generic.armor", 25)
        attribute.add("minecraft:generic.attack_damage", 35)
    })//遗迹·骨影
    event.modify("remnant_bosses:ossukage", attribute => {
        attribute.add("minecraft:generic.armor", 30)
    })//下届铁掌
    event.modify("bosses_of_mass_destruction:gauntlet", attribute => {
        attribute.add("minecraft:generic.armor_toughness", 10)
    })//黑曜巨石柱
    event.modify("bosses_of_mass_destruction:obsidilith", attribute => {
        attribute.add("minecraft:generic.armor_toughness", 15)
    })//下界合金巨兽
    event.modify("cataclysm:netherite_monstrosity", attribute => {
        attribute.add("minecraft:generic.armor", 40)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })//凋灵
    event.modify("minecraft:wither", attribute => {
        attribute.add("minecraft:generic.max_health", 750)
        attribute.add("minecraft:generic.armor", 8)
    })//末影龙
    event.modify("minecraft:ender_dragon", attribute => {
        attribute.add("minecraft:generic.max_health", 500)
        attribute.add("minecraft:generic.armor", 15)
    })//末影傀儡
    event.modify("cataclysm:ender_golem", attribute => {
        attribute.add("minecraft:generic.armor", 30)
        attribute.add("minecraft:generic.armor_toughness", 5)
    })//巨钳守卫
    event.modify("cataclysm:clawdian", attribute => {
        attribute.add("minecraft:generic.armor", 20)
    })//先驱者
    event.modify("cataclysm:the_harbinger", attribute => {
        attribute.add("minecraft:generic.armor", 30)
        attribute.add("minecraft:generic.armor_toughness", 5)
    })
})

EntityJSEvents.attributes(event => {
    //末影守卫
    event.modify("cataclysm:ender_guardian", attribute => {
        attribute.add("minecraft:generic.armor", 40)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })//远古遗魂
    event.modify("cataclysm:ancient_remnant", attribute => {
        attribute.add("minecraft:generic.armor", 35)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })//咒翼灵骸
    event.modify("cataclysm:maledictus", attribute => {
        attribute.add("minecraft:generic.armor", 30)
        attribute.add("minecraft:generic.armor_toughness", 5)
    })//斯库拉
    event.modify("cataclysm:scylla", attribute => {
        attribute.add("minecraft:generic.armor", 35)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })//利维坦
    event.modify("cataclysm:the_leviathan", attribute => {
        attribute.add("minecraft:generic.armor", 20)
    })//焰魔
    event.modify("cataclysm:ignis", attribute => {
        attribute.add("minecraft:generic.armor", 40)
        attribute.add("minecraft:generic.armor_toughness", 20)
    })//远古坚守者王族
    event.modify("spice:warden_boss", attribute => {
        attribute.add("minecraft:generic.max_health", 1000)
        attribute.add("minecraft:generic.attack_damage", 80)
    })//远古烈焰人
    event.modify("livingthings:ancient_blaze", attribute => {
        attribute.add("minecraft:generic.max_health", 2000)
        attribute.add("minecraft:generic.attack_damage", 35)
        attribute.add("minecraft:generic.armor", 10)
    })//僵尸海盗船长
    event.modify("rottencreatures:dead_beard", attribute => {
        attribute.add("minecraft:generic.max_health", 500)
        attribute.add("minecraft:generic.attack_damage", 15)
        attribute.add("minecraft:generic.armor", 5)
    })
})