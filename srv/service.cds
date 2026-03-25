using { RiskManagement1 as my } from '../db/schema.cds';

using { API_BUSINESS_PARTNER } from './external/API_BUSINESS_PARTNER';

@path : '/service/RiskManagementService'
service RiskManagementService
{
    annotate Risks with @restrict :
    [
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    @cds.redirection.target
    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @cds.redirection.target
    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;

    @cds.redirection.target
    entity A_BusinessPartner as
        projection on API_BUSINESS_PARTNER.A_BusinessPartner
        {
            BusinessPartner,
            Customer,
            Supplier,
            BusinessPartnerCategory,
            BusinessPartnerFullName,
            BusinessPartnerIsBlocked
        };
}

annotate RiskManagementService with @requires :
[
    'authenticated-user',
    'RiskViewer',
    'RiskManager'
];
