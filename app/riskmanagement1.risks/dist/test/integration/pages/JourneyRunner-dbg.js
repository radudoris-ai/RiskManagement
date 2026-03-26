sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"riskmanagement1/risks/test/integration/pages/RisksList",
	"riskmanagement1/risks/test/integration/pages/RisksObjectPage"
], function (JourneyRunner, RisksList, RisksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('riskmanagement1/risks') + '/test/flpSandbox.html#riskmanagement1risks-tile',
        pages: {
			onTheRisksList: RisksList,
			onTheRisksObjectPage: RisksObjectPage
        },
        async: true
    });

    return runner;
});

