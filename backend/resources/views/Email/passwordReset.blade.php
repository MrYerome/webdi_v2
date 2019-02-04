@component('mail::message')
# Changer votre mot de passe

Cliquez sur le bouton ci-dessous pour mettre à jour votre mot de passe :

@component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?token='.$token])
Reset Password
@endcomponent

Merci,<br>
L'équipe des Dîners Intéressants,<br>
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
