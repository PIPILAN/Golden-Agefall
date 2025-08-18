
StartupEvents.registry('creative_mode_tab', event => {
	event.create('goldenagefallitems').displayName('黄金终焉纪 - 物品').icon(() => 'goldenagefall:silver_zora_core').content(() => [
        'goldenagefall:silver_zora_core',
        'goldenagefall:hard_leather',
        'goldenagefall:knight_upgrade_smithing_template',
        'goldenagefall:bauble_reforge_gem'
	])
})

StartupEvents.registry('item', event => {
    event.create('goldenagefall:silver_zora_core')
        .displayName('§b卓拉银核')
        .tooltip('§f卓拉族锻造材料')
        .texture('goldenagefall:item/silver_zora_core')
})

StartupEvents.registry('item', event => {
    event.create('goldenagefall:hard_leather')
        .displayName('§f蛮族硬质皮革')
        .tooltip('§f蛮族传统工艺打造的皮革')
        .texture('goldenagefall:item/hard_leather')
        .tag('icarus:leathers')
        .tag('c:leathers')
})

StartupEvents.registry('item', event => {
    event.create('goldenagefall:knight_upgrade_smithing_template')
        .displayName('§f钢制锻造模板')
        .tooltip('§f精钢所制，坚硬无比')
        .texture('goldenagefall:item/knight_upgrade_smithing_template')
})

StartupEvents.registry('item', event => {
    event.create('goldenagefall:bauble_reforge_gem')
        .displayName('§6饰品重铸宝石')
        .tooltip('§a当铸匠的符文唤醒沉睡的宝石，一场元素的重生便在金属间启幕。')
        .tooltip('§a重铸不是替换，是让宝石与饰品的灵魂共振。')
        .tooltip('§a被重铸的饰品从此成为元素的容器，每一道折射的光里，都藏着远古契约的回响。')
        .texture('goldenagefall:item/bauble_reforge_gem')
})

