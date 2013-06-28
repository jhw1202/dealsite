window.App.SessionModel = Backbone.Model.extend({
    defaults: {
        sessionId: "",
        userName: "",
        password: "",
        userId: ""
    },

    isAuthorized: function(){
       return Boolean(this.get("sessionId"))
    }



})