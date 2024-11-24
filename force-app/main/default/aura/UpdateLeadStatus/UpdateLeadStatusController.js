({
    updateLeadStatus: function (component, event, helper) {
        const action = component.get("c.updateStatus");
        action.setParams({
            leadId: component.get("v.recordId"),
            status: component.get("v.status")
        });

        action.setCallback(this, function (response) {
            const state = response.getState();
            if (state === "SUCCESS") {
                $A.get("e.force:refreshView").fire();
            } else if (state === "ERROR") {
                const errors = response.getError();
                component.find('notifLib').showToast({
                    "variant": "error",
                    "title": "Error",
                    "message": errors[0].message
                });
            }
        });

        $A.enqueueAction(action);
    }
})