const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {

  // Connect to external Business Partner API
  const bp = await cds.connect.to('API_BUSINESS_PARTNER')

  /**
   * READ handler for A_BusinessPartner
   */
  this.on('READ', 'A_BusinessPartner', async (req) => {
    try {
      // Forward the incoming OData query to the external service
      const result = await bp.run(req.query)

      // Ensure field is present
      return result.map(bp => ({
        ...bp,
        BusinessPartnerFullName: bp.BusinessPartnerFullName || ''
      }))

    } catch (error) {
      console.error('Error while fetching Business Partners:', error)

      req.error({
        code: 'EXTERNAL_API_ERROR',
        message: 'Failed to fetch Business Partner data'
      })
    }
  })

})