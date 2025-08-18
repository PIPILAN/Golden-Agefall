// 腐化之刃
ServerEvents.recipes(event => {
    event.remove({id : 'endermanoverhaul:corrupted_blade'});
});

ServerEvents.recipes(event => {
    event.shaped('endermanoverhaul:corrupted_blade', [
		' T ',
		' T ',
		' D '
	], {
		T: 'endermanoverhaul:enderman_tooth',
        D: 'minecraft:diamond'
    });
});