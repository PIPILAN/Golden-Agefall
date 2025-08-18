
// 遁地尖矛
ServerEvents.recipes(event => {
    event.remove({id : 'bosses_of_mass_destruction:earthdive_spear'});
});

ServerEvents.recipes(event => {
    event.shaped('bosses_of_mass_destruction:earthdive_spear', [
		' N ',
		' V ',
		' S '
	], {
		N: 'minecraft:netherite_ingot',
        V: 'bosses_of_mass_destruction:void_thorn',
        S: 'minecraft:stick'
    });
});