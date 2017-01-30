var wg = wg || {}

wg.expCalculator = {
	options: {
		equipment: 1,
		battleCount: 0,
		experience: 0
	},
	init: function (options) {
		wg.expCalculator.options = $.extend(wg.expCalculator.options, options)
		wg.expCalculator.expirienceCalc(wg.expCalculator.options.equipment, wg.expCalculator.options.battleCount);
	},
	expirienceCalc: function (eq, bc) {
		var res = 0;
		if (!isNaN(eq) && !isNaN(bc)) {
			eq = parseInt(eq);
			bc = parseInt(bc);
			console.log("eq", eq);
			console.log("bc", bc);
			switch (eq) {
				case 1:
					res = bc * 3;
					break;
				case 2:
					res = bc * 3 * 1.1;
					break;
				case 3:
					console.log("case 3");
					res = bc * 3 * 1.2;
					break;
				default:
					res = 0;
					break;
			}
		}
		console.log("res", res);
		wg.expCalculator.options.experience = res;
		return res;
	}
}