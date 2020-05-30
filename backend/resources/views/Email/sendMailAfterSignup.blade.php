@component('mail::message')
# Activez votre compte

Cliquez sur le bouton ci-dessous pour activer votre compte :

@component('mail::button', ['url' => 'http://bandedeconfs/activation?token='.$token])
Activer votre compte
@endcomponent

Si le lien ne fonctionne pas, veuillez copier / coller le lien suivant dans votre navigateur : <br>
http://bandedeconfs/activation?token={{ $token }}
<br>
Merci,<br>
L'équipe de Bande de Conf's,<br>
{{ config('app.name') }}
@endcomponent

{{--@component('mail::message')--}}
    {{--# Change password Request--}}

    {{--Click on the button below to change password--}}

    {{--@component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?token='.$token])--}}
        {{--Reset Password--}}
    {{--@endcomponent--}}

    {{--Thanks,<br>--}}
    {{--{{ config('app.name') }}--}}
{{--@endcomponent--}}
