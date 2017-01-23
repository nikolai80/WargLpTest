var wg = wg || {}

wg.expCalculator = {
	options: {
		equipment: "",
		experience: "",
		battleCount:""
	},
	init: function (options) {
		wg.expCalculator.options = $.extend(wg.expCalculator.options, options)
		
	},
	expirienceCalc:function(){}
}