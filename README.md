# Wirebrite - Visualforce to Lightning Migration for EG Manufacture

Wirebrite is a technology consulting firm tasked with migrating EG Manufacture’s Salesforce application from **Salesforce Classic** to **Lightning Experience**. EG Manufacture, a large tapestry manufacturer, is undergoing this migration to leverage the latest Salesforce features, improve user experience, and increase the efficiency of its sales team.

---

## Prerequisites

Before starting the migration, ensure you have the following tools installed and configured:

- A command-line terminal (e.g., Terminal for macOS, Git Bash for Windows)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli) (for managing Salesforce environments)
- [Salesforce Extensions Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode) (for Salesforce development)
- Access to EG Manufacture’s Salesforce sandbox or production environment
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (optional for local file viewing)

---

## Installation

To get started, follow these steps:

1. Open your terminal and navigate to the folder where you want to clone the project.

2. Run the following command to clone the repository: git clone https://github.com/Aiyeesha/EGManufacture-VisualforceProject.git
3. Open the cloned project in **Visual Studio Code**: 

4. Refer to the [installation manual]([https://example.com/manuel-installation](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Salesforce_P7_FR/Manuel+d'installation+EG+Manufacturing+.pdf)) provided by EG Manufacture to properly configure your development environment. This document contains detailed steps to ensure that your Salesforce org is properly configured and connected.

5. Ensure that you have set up a Salesforce sandbox or development environment to deploy and test the project.

---

## Startup

Once the environment is set up and the repository is cloned, follow these steps to get started with the migration:

1. **Connect to Salesforce Org**:
   - Use Salesforce CLI to authenticate your Salesforce org: sfdx force:auth:web:login -d -a "Your_Org_Alias"
     

2. **Deploy the Visualforce Pages**:
   - Run the following command to deploy the Visualforce pages to your Salesforce environment: sfdx force:source:deploy -p force-app/main/default

3. **Test in Salesforce Lightning**:
   - Open the Salesforce org in your browser, switch to Lightning Experience, and navigate through the Visualforce pages to assess their functionality.

4. **Migrate JavaScript Buttons**:
   - Replace any JavaScript buttons that no longer function in Lightning using **Lightning Actions**.

5. **Validate Compatibility**:
   - Ensure all components are properly working by reviewing them in the **Lightning Experience** environment and making any necessary configuration adjustments.

---

## Key Features

This project focuses on the following major tasks:

1. **Visualforce to Lightning Component Conversion**:
   - Convert legacy Visualforce pages into **Lightning Components** for better performance and a modern user experience.

2. **JavaScript Button Migration**:
   - Replace obsolete JavaScript buttons with **Lightning Actions**, ensuring full compatibility with Lightning Experience.

3. **Performance Enhancements**:
   - Optimize the application for Lightning’s faster load times and smoother interactions.

4. **Side-by-Side Interface Comparison**:
   - Compare **Salesforce Classic** and **Lightning Experience** interfaces with screenshots and provide detailed explanations of the benefits of Lightning.

---

## Benefits of Lightning Migration

Migrating to Salesforce Lightning offers several advantages for EG Manufacture:

- **Modern User Interface**: A more intuitive and customizable interface for users.
- **Enhanced Productivity**: Lightning’s advanced features like **Kanban views** and **App Builder** streamline workflows.
- **Access to Latest Features**: Only available in Lightning, new features such as **Einstein Analytics** and **Dynamic Forms** will enhance EG Manufacture’s sales operations.
- **Mobile Compatibility**: Lightning Experience provides built-in mobile access, improving flexibility for the sales team.

---

## Technologies Used

- **Salesforce CLI**: For deployment and environment management
- **Apex & Visualforce**: Custom backend and front-end logic
- **Lightning Components**: To modernize and enhance the user experience
- **JavaScript**: For handling button logic that needs conversion to Lightning standards

---

## Author

**Aïcha Imène DAHOUMANE**  
GitHub: [@Aiyeesha](https://github.com/Aiyeesha)
