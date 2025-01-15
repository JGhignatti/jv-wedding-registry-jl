<script lang="ts">
  import { field, form } from 'svelte-forms';
  import { email as emailValidator, required } from 'svelte-forms/validators';

  const {
    onContinueFn,
  }: { onContinueFn: (name: string, email: string) => void } = $props();

  const name = field('name', '', [required()], { checkOnInit: true });
  let nameTouched = $state(false);
  const nameInvalid = $derived($name.invalid && nameTouched);

  const email = field('email', '', [required(), emailValidator()], {
    checkOnInit: true,
  });
  let emailTouched = $state(false);
  const emailInvalid = $derived($email.invalid && emailTouched);

  const infoForm = form(name, email);

  function onContinue(): void {
    onContinueFn($name.value, $email.value);
  }
</script>

<p class="italic">
  Você está a poucos passos de presentear os noivos. Os presentes são dados via
  Pix diretamente para eles.
</p>

<p class="italic">
  Depois de preencher suas informações, um código copia e cola e um QR Code
  serão gerados.<br />Utilize os códigos junto do app do seu banco para mandar
  seu presente.
</p>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <div class="flex flex-col gap-1">
    <label for="name--input">Nome</label>
    <input
      id="name--input"
      type="text"
      class="rounded-lg border border-zinc-400 focus:border-sky-600 focus:outline-none focus:ring-transparent focus-visible:outline-none"
      class:invalid={nameInvalid}
      bind:value={$name.value}
      onblur={() => (nameTouched = true)}
    />
    {#if nameInvalid}
      <span class="ml-1 text-xs text-red-600">Este campo é obrigatório</span>
    {/if}
  </div>

  <div class="flex flex-col gap-1">
    <label for="email--input">E-mail</label>
    <input
      id="email--input"
      type="email"
      class="rounded-lg border border-zinc-400 focus:border-sky-600 focus:outline-none focus:ring-transparent focus-visible:outline-none"
      class:invalid={emailInvalid}
      bind:value={$email.value}
      onblur={() => (emailTouched = true)}
    />
    {#if emailInvalid}
      <span class="ml-1 text-xs text-red-600">
        {$email.errors.includes('required')
          ? 'Este campo é obrigatório'
          : 'Digite um e-mail válido'}
      </span>
    {/if}
  </div>
</div>

<p class="text-sm italic">
  Seu nome e e-mail não são armazenados, são apenas usados para notificar os
  noivos do seu presente; uma cópia dos códigos que serão gerados serão enviados
  para o seu e-mail.
</p>

<button
  class="self-end rounded-lg bg-sky-600 px-4 py-2 text-white disabled:bg-gray-200 disabled:text-gray-400"
  disabled={!$infoForm.valid}
  onclick={() => onContinue()}
>
  Continuar
</button>
