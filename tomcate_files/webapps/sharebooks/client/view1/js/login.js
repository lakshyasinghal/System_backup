function init(){
    //cleanInputBoxes();
    putCalendarForDOB();
    signInPanel.init();
    signUpPanel.init();
    windowHandler.init();
    $("#title").click(function(){
        $pages.about();
    });
}


// function cleanInputBoxes(){
//  $("input").val("");
// }


function putCalendarForDOB(){
    $("#birthday").datepicker({
        dateFormat: 'dd/mm/yy',
        minDate: '-100y',
        maxDate: '-1d',
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true
    });
}



var messageContainerIds = ["signInMessageContainer" , "registerUserMessageContainer"];



var windowHandler = {
    ids : ["signInPanel" , "signUpPanel"],
    selectedClass : "panel",

    init : function(){
        try{
            var self = windowHandler;

            $("#signUpPanel input").click(function(e){
                e.preventDefault();
                e.stopPropagation();
            });

            // $("#signUpPanel").on("click" , ".ui-datepicker", function(e){
            //     e.preventDefault();
            //     e.stopPropagation();
            // });


            $("#signInPanel input").click(function(e){
                e.preventDefault();
                e.stopPropagation();
            });

            $(window).click(function(e){
                self.closeAll();
            });
        }
        catch(err){
            $logger.err("init" , err.message);
        }
    },

    closeAll : function(){
        try{
            var self = windowHandler;

            $("#signUpPanel").hide();
            //$("#signInPanel").css("opacity" , 0);
        }
        catch(err){
            $logger.err("closeAll" , err.message);
        }
    }
};




var signInPanel = {
    id : "signInPanel",
    parameterIds : ["signIn_username" , "signIn_password"],
    parameterNames : ["username" , "password"],
    messageContainerId : "signInMessageContainer",

    init : function(){
        try{
            var self = window.signInPanel;
            //$("#" + self.id).hover(self.togglePanel);
            $("#signInButton").click(self.signIn);
            $("#forgotPasswordLink").click(function(){
                $pages.resetPassword();
            });
            $("#preferencesLink").click(function(){
                $pages.preferences();
            });
            self.setDefaultValues();
        }
        catch(err){
            $logger.err("init" , err.message);
        }
    },

    setDefaultValues : function(){
        try{
            var userName = cookieHandler.readCookie("sharebooks_username");
            if(userName){
                $("#signIn_username").val(userName);
            }
            var password = cookieHandler.readCookie("sharebooks_password");
            if(password){
                $("#signIn_password").val(password);
            }
        }
        catch(err){
            $logger.err("setDefaultValues" , err.message);
        }
    },

    cleanUp : function(){
        try{
            var self = window.signInPanel;
            $("#" + self.id + " input").val("");
            $("#" + self.messageContainerId).text("");
        }
        catch(err){
            $logger.err("cleanUp" , err.message);
        }
    },

    signIn : function(e){
        try{
            e.preventDefault();
            e.stopPropagation();
            var self = window.signInPanel;
            var params = getDataObject(self.parameterNames , self.parameterIds);

            removeMessages(self.messageContainerId);
            $httpService.signIn(params , self.success , self.failure);
        }
        catch(err){
            $logger.err("signIn" , err.message);
        }
    },

    success : function(data){
        try{
            var self = window.signInPanel;
            data = JSON.parse(data);

            if(data.success){
                self.modifyCookies();
                $pages.home();
            }
            else{
                displayMessage(self.messageContainerId , messages[data.statusCode - 1] , messageColors.ERROR);
            }
        }
        catch(err){
            $logger.err("success" , err.message);
        }
    },

    failure : function(){
        var self = window.signInPanel;
    },

    togglePanel : function(){
        try{
            var self = window.signInPanel;
            var opacity = $("#" + self.id).css("opacity");
            if(opacity == 0){
                self.cleanUp();
                $("#" + self.id).animate({opacity : 1});
            }
            else{
                $("#" + self.id).animate({opacity : 0});
            }
            
        }
        catch(err){
            $logger.err("togglePanel" , err.message);
        }
    },


    modifyCookies : function(){
        try{
            var userName = cookieHandler.readCookie("sharebooks_username");
            if($("#signIn_username").val() != userName){
                cookieHandler.createCookie("sharebooks_username" , $("#signIn_username").val() , 1 , "sharebooks");
            }
            var password = cookieHandler.readCookie("sharebooks_password");
            if( $("#signIn_password").val() != password){
                cookieHandler.createCookie("sharebooks_password" , $("#signIn_password").val() , 1 , "sharebooks");
            }
        }
        catch(err){
            $logger.err("modifyCookies" , err.message);
        }
    }


};








var signUpPanel = {
    id : "signUpPanel",
    parameterIds : ["id" , "username" , "password" , "name" , "birthday" , "address" , "city" , "state" , "pincode" , "mobileNo"],
    parameterNames : ["id" , "username" , "password" , "name" , "birthday" , "address" , "city" , "state" , "pincode" , "mobileNo"],
    buttonId : "userSignUpButton",
    messageContainerId : "userRegistrationMessageContainer",


    init : function(){
        try{
            var self = window.signUpPanel;

            $("#signUpPanel #id").val(-1);

            $("#birthday").click(function(e){
                setTimeout(function(){
                    $(".ui-datepicker").on("click" , function(e){
                        e.preventDefault();
                        e.stopPropagation();
                    });
                } , 100);
            });

            $("#signUpPanel").click(function(e){
                e.preventDefault();
                e.stopPropagation();
            });

            $("#signUpButton").click(function(e){
                e.preventDefault();
                e.stopPropagation();

                self.cleanUp();

                var display = $("#" + self.id).css("display");

                if(display == "none"){
                    $("#" + self.id).show("slide", { direction: "right" }, 500);
                }
                else{
                    $("#" + self.id).hide();
                }
            });

            $("#" + self.buttonId).click(self.signUpUser);
        }
        catch(err){
            $logger.err("init" , err.message);
        }
    },

    cleanUp : function(){
        try{
            var self = window.signUpPanel;

            $("#" + self.id + " input").val("");
            $("#" + self.messageContainerId).text("");
            $("#signUpPanel #id").val(-1);
        }
        catch(err){
            $logger.err("cleanUp" , err.message);
        }
    },

    validate : function(){
        try{
            var self = window.signUpPanel;
            var proceed = true;
            //var inputFields = $("#" + self.id + " input");

            $("#" + self.id + " input").each(function(index , element){
                if($(element).val() == ""){
                    proceed = false;
                }
            });

            displayMessage(self.messageContainerId , validationMessages.EMPTY_FIELDS , messageColors.WARNING);

            return proceed;
        }
        catch(err){
            $logger.err("validate" , err.message);
        }
    },

    signUpUser : function(e){
        try{
            e.preventDefault();
            e.stopPropagation();

            var self = window.signUpPanel;
            
            var proceed = self.validate();

            if(!proceed){
                return;
            }

            var params = getDataObject(self.parameterNames , self.parameterIds);
            removeMessages(self.messageContainerId);
            $httpService.signUp(params , self.success , self.failure);
        }
        catch(err){
            $logger.err("signUpUser" , err.message);
        }
    },


    success : function(data){
        var self = window.signUpPanel;
        data = JSON.parse(data);

        if(data.success){
            displayMessage(self.messageContainerId , messages[data.statusCode - 1] , messageColors.SUCCESS);
        }
        else{
            displayMessage(self.messageContainerId , messages[data.statusCode - 1] , messageColors.WARNING);
        }
    },

    failure : function(){
        var self = window.signUpPanel;
    }
};


window.onload = init;

