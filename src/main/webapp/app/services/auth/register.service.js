(function () {
    'use strict';

    angular
        .module('jhipsterSampleAppAngularJsApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
