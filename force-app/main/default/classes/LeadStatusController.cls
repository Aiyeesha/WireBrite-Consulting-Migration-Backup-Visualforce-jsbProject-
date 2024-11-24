/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-07-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class LeadStatusController {
    @AuraEnabled
    public static void updateStatus(Id leadId, String status) {
        Lead lead = [SELECT Id, Status FROM Lead WHERE Id = :leadId];
        lead.Status = status;

        try {
            update lead;
        } catch (DmlException e) {
            throw new AuraHandledException('Error updating lead status: ' + e.getMessage());
        }
    }
}