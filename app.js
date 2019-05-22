//Issue controller
const IssueCtrl = (function() {

    const Issue = function(id, description, severity, assignedTo, status) {
        this.id = id;
        this.description = description;
        this.assignedTo = assignedTo;
        this.severity = severity;
        this.status = status;
    };
    
    //Data structure
    const data = {
        issues: [
            {id: 0, description: 'kdshjfkjdfh', severity: 'Low', assignedTo: 'Bob', status: false}
        ]
    }
    return {
       logData: function() {
           return data;
       }
    }
})();

//UI controller
const UICtrl = (function() {

})();

//Application controller
const App = (function(IssueCtrl, UICtrl) {

    //Load event listeners

    const loadEventListeners = function() {
        
    }
    return {
        init: function() {
            loadEventListeners();
        }
    };
})(IssueCtrl, UICtrl);

App.init();