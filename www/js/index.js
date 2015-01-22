/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.bindActions();
        this.setFormValidations();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    onDeviceReady: function() {
        
    },
    bindActions: function(){
        //REGISTER PAGE
        $("#registerbtn_register").bind("click",this.registerSubmit);
    },
    //UI BIND FUNCTIONS
    registerSubmit: function(){
        if($("#registerform").valid()){
            alert("VALID FORM");
        }
        else
        {
         alert("INVALID FORM");   
        }
    },
    // SET FORM VALIDATIONS
    setFormValidations: function(){
        //REGISTER FORM
        $("#registerform").validate({
            rules:{
                    name_register: "required",
                    email_register: {
                        required: true,
                        email: true
                        },
                    password_register: {
                        required: true,
                        minlength: 5
                    },
                    passwordconfirmation_register: {
                        required: true,
                        minlength: 5,
                        equalTo: "#password_register"
                    },
                    agree_register: "required"
            },
            messages: {
                    name_register: "Insira seu nome",
                    email_register: {
                        required: "Preencha o seu email",
                        email: "Forneça um email válido"
                        },
                    password_register: {
                        required: "Informe uma senha",
                        minlength: "A senha deve ter no mínimo 5 caracteres"
                    },
                    passwordconfirmation_register: {
                        required: "Confirme a senha",
                        minlength: "A senha deve ter no mínimo 5 caracteres",
                        equalTo: "A confirmação de senha deve ser igual a senha"
                    },
                    agree_register: "Aceite os termos de uso"
                    }
                });
    }

};
