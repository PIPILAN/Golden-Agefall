// 回响碎片

ServerEvents.recipes(event => {
    event.shaped('4x minecraft:echo_shard', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#c:ender_pearls',
        B: 'minecraft:ender_eye',
		C: 'minecraft:echo_shard'
    });
});