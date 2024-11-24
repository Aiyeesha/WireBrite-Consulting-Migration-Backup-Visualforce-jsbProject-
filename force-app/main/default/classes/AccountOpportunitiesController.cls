public with sharing class AccountOpportunitiesController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(Id accountId, String searchTerm) {
        String searchPattern = '%' + searchTerm + '%';
        return [
            SELECT Id, Name, Amount, StageName, CloseDate
            FROM Opportunity
            WHERE AccountId = :accountId
            AND Name LIKE :searchPattern
            ORDER BY CloseDate DESC
        ];
    }
}