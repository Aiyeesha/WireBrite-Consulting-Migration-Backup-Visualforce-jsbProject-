import getOpportunities from '@salesforce/apex/AccountOpportunitiesController.getOpportunities';
import { LightningElement, api, track, wire } from 'lwc';

export default class AccountOpportunitiesSearch extends LightningElement {
    @api recordId; // L’ID de l’Account en cours
    @track opportunities = []; // Liste des opportunités récupérées
    searchTerm = ''; // Terme de recherche saisi

    // Colonnes de la table
    columns = [
        { label: 'Opportunity Name', fieldName: 'Name', type: 'text' },
        { label: 'Amount', fieldName: 'Amount', type: 'currency' },
        { label: 'Stage', fieldName: 'StageName', type: 'text' },
        { label: 'Close Date', fieldName: 'CloseDate', type: 'date' },
    ];

    // Appel Apex pour récupérer les opportunités
    @wire(getOpportunities, { accountId: '$recordId', searchTerm: '$searchTerm' })
    wiredOpportunities({ data, error }) {
        if (data) {
            this.opportunities = data;
        } else if (error) {
            console.error(error);
        }
    }

    // Met à jour le terme de recherche
    handleSearch(event) {
        this.searchTerm = event.target.value;
    }
}