ItemEvents.modifyTooltips(event => {
    event.add('eternalpotions:hermes_grace', [
        '§e§l效果：§r§b急迫 II §7（2m30s）',
        '§e§l冷却时间：§r§c10分钟',
        '§e§l配方解锁条件：§r§a步行移动1000格'
    ])
    event.add('eternalpotions:atalantas_dash', [
        '§e§l效果：§r§b速度 II + 跳跃提升 §7（2m30s）',
        '§e§l冷却时间：§r§c6分钟',
        '§e§l配方解锁条件：§r§a跳跃100次'
    ])
    event.add('eternalpotions:ares_bulwark', [
        '§e§l效果：§r§b抗性提升 I + 伤害吸收 II §7（2m）',
        '§e§l冷却时间：§r§c12分钟',
        '§e§l配方解锁条件：§r§a用盾牌格挡一次攻击'
    ])
    event.add('eternalpotions:hephaestus_ember', [
        '§e§l效果：§r§b抗火 + 急迫 I §7（3m）',
        '§e§l冷却时间：§r§c15分钟',
        '§e§l配方解锁条件：§r§a进入下界'
    ])
    event.add('eternalpotions:poseidons_gift', [
        '§e§l效果：§r§b水下呼吸 + 速度 I §7（2m30s）',
        '§e§l冷却时间：§r§c8分钟',
        '§e§l配方解锁条件：§r§a钓到25条鱼'
    ])
    event.add('eternalpotions:demeters_bounty', [
        '§e§l效果：§r§b生命恢复 I + 饱和 §7（30s）',
        '§e§l冷却时间：§r§c10分钟',
        '§e§l配方解锁条件：§r§a制作一个金苹果'
    ])
    event.add('eternalpotions:heracles_might', [
        '§e§l效果：§r§b力量 II + 抗性提升 I §7（2m）',
        '§e§l冷却时间：§r§c12分钟',
        '§e§l配方解锁条件：§r§a击杀一个铁傀儡'
    ])
    event.add('eternalpotions:tyches_gamble', [
        '§e§l效果：§r§b幸运 III §7（2m）',
        '§e§l冷却时间：§r§c15分钟',
        '§e§l配方解锁条件：§r§a与村民交易5次'
    ])
    event.add('eternalpotions:artemis_veil', [
        '§e§l效果：§r§b夜视 + 抗性提升 I + 隐身 §7（2m30s）',
        '§e§l冷却时间：§r§c10分钟',
        '§e§l配方解锁条件：§r§a用弓箭击杀5只生物'
    ])
    event.add('eternalpotions:hygieias_draught', [
        '§e§l效果：§r§b瞬间治疗 I + 生命值提升 I §7（2m）',
        '§e§l冷却时间：§r§c12分钟',
        '§e§l配方解锁条件：§r§a食用一个闪烁的西瓜片'
    ])

  // Illager Invasion
    event.add('illagerinvasion:imbuing_table', [
        '可以让装备所拥有的附魔等级的突破原版上限的限制',
        '从左到右分别放入附魔书、附魔武器、神圣宝石',
        '附魔武器要求与附魔书效果等级相同'
    ])

  // Alshanex Familiars
    event.add('alshanex_familiars:rusty_helmet', [
        '对魔宠使用可提高魔宠的护甲值',
        '每个魔宠最多使用10次'
    ])
    event.add('alshanex_familiars:broken_shield', [
        '对魔宠使用可让其学会低概率格挡',
        '每个魔宠最多使用1次'
    ])
    event.add('alshanex_familiars:strange_mushroom', [
        '对魔宠使用可提供一层暴怒',
        '被击中时，有几率消耗一层怒气来获得几秒钟的止心术',
        '每个魔宠最多使用10次'
    ])
    event.add('alshanex_familiars:life_gem', [
        '对魔宠使用可永久提升他的生命值',
        '每个魔宠最多使用10次'
    ])
    event.add('alshanex_familiars:poison_vial', [
        '对德鲁伊魔宠使用可将其变为瘟疫医生魔宠',
        '可通过炼金锅制作'
    ])
    event.add('alshanex_familiars:spider_fang', [
        '用于制作剧毒试剂和治疗瘟疫医生魔宠',
        '洞穴蜘蛛可掉落'
    ])
    event.add('alshanex_familiars:mysterious_orb', [
        '右键使用，可获得竖琴或者律灵饰品'
    ])
    event.add('cataclysm:khopesh', {shift: false}, [
        '按住 §a§lShift§r 可查看详细信息'
    ])
    event.add('cataclysm:khopesh', {shift: true}, [
        '骸龙自身利骨铸成的弯刃剑，挥舞时透出死亡气息'
    ])
    event.add('cataclysm:coral_spear', {shift: false}, [
        '按住 §a§lShift§r 可查看详细信息'
    ])
    event.add('cataclysm:coral_spear', {shift: true}, [
        '由海底珊瑚打造的长矛，闪烁着深海的灵光'
    ])
    event.add('irons_spellbooks:magehunter', {shift: false}, [
        '按住 §a§lShift§r 可查看详细信息'
    ])
    event.add('irons_spellbooks:magehunter', {shift: true}, [
        '狩魔卫道士专用的利剑，专为斩断邪恶与异端而锻造'
    ])
    event.add('illagerinvasion:platinum_infused_hatchet', {shift: false}, [
        '按住 §a§lShift§r 可查看详细信息'
    ])
    event.add('illagerinvasion:platinum_infused_hatchet', {shift: true}, [
        '锋利的铂金短柄斧，是掳掠者劫掠村庄的利器'
    ])
    event.add('cataclysm:coral_bardiche', {shift: false}, [
        '按住 §a§lShift§r 可查看详细信息'
    ])
    event.add('cataclysm:coral_bardiche', {shift: true}, [
        '由珊瑚铸成的重型钺刃，可近战挥击，也可远程投掷'
    ])
})