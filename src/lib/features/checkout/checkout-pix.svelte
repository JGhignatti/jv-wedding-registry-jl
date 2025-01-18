<script lang="ts">
  import { getCartItems } from '$lib/contexts/cart-items.svelte';
  import { getToasts } from '$lib/contexts/toasts.svelte';
  import { createStaticPix, hasError } from 'pix-utils';
  import { onMount } from 'svelte';
  import FrameCorner from './frame-corner.svelte';

  const { userInfo }: { userInfo: { name: string; email: string } } = $props();

  const toasts = getToasts();
  const cartItems = getCartItems();

  const totalPrice = `R$ ${cartItems.list
    .reduce((acc, cur) => acc + cur.price, 0)
    .toFixed(2)
    .replace('.', ',')}`;
  const totalAmount = cartItems.list.reduce((acc, cur) => acc + cur.price, 0);
  let errorCreatingPix = $state(false);
  let hasCopiedCode = $state(false);
  let code = $state('');
  let qrCode = $state<Promise<string> | null>(null);

  onMount(() => {
    const pix = createStaticPix({
      merchantName: 'Luiza Vieira',
      merchantCity: 'Porto Alegre',
      pixKey: 'luizabarasuol@gmail.com',
      transactionAmount: totalAmount,
    });

    if (!hasError(pix)) {
      code = pix.toBRCode();
      qrCode = pix.toImage();

      sendMail();

      setTimeout(() => {
        cartItems.list = [];
      }, 500);
    } else {
      errorCreatingPix = true;
    }
  });

  async function sendMail(): Promise<void> {
    try {
      const response = await fetch('/api/mail/checkout', {
        method: 'POST',
        body: JSON.stringify({
          userInfo,
          items: cartItems.list.map((item) => item.name),
          totalPrice,
        }),
        headers: {
          'content-type': 'application/json',
        },
      });

      const body = await response.json();

      if (body.status === 'failed') {
        toasts.error('Não foi possível lhe enviar o e-mail de confirmação.');
      }
    } catch {
      toasts.error('Não foi possível lhe enviar o e-mail de confirmação.');
    }
  }

  function copyCode(): void {
    if (!code) {
      return;
    }

    const success = () => {
      hasCopiedCode = true;

      toasts.success('Código copiado com sucesso!');

      setTimeout(() => {
        hasCopiedCode = false;
      }, 2000);
    };
    const error = () => {
      toasts.error(
        'Ocorreu um problema ao copiar automaticamente o código. Tente copiar manualmente ou usar o QR Code.',
      );
    };

    if (!navigator.clipboard) {
      const el = document.createElement('textarea') as HTMLTextAreaElement;
      el.value = code;

      el.style.top = '0';
      el.style.left = '0';
      el.style.position = 'fixed';

      document.body.appendChild(el);
      el.focus();
      el.select();
      el.setSelectionRange(0, 99999);

      try {
        if (document.execCommand('copy')) {
          success();
        } else {
          error();
        }
      } catch {
        error();
      }

      document.body.removeChild(el);
    } else {
      navigator.clipboard.writeText(code).then(success, error);
    }
  }
</script>

{#if errorCreatingPix}
  Ocorreu um erro ao gerar o Pix para pagamento.<br />
  Por favor, tente novamente ou entre em contato com Luiza Vieira pelo número +55
  51 9 9809-8134.
{:else}
  <div class="frame relative mx-auto w-full max-w-screen-sm">
    <FrameCorner
      type="primary"
      classes="size-24 xs:size-28 sm:size-44 absolute top-0 right-0 rotate-180"
    />

    <div
      class="relative bg-shadow-100/40 p-6 font-serif text-2xl font-bold italic"
    >
      <p>
        Obrigado, <strong>{userInfo.name}</strong>!<br /><br />A sua
        contribuição para o nosso começo de vida juntos fará toda a diferença e
        será lembrada com muito amor e gratidão. Estamos contando os dias para
        celebrar com você e todos os nossos amigos e familiares.<br /><br />Com
        carinho,
      </p>

      <div
        class="flex flex-col items-center justify-center font-script text-5xl text-deer-600 sm:grid sm:grid-cols-[1fr_auto_2fr] sm:gap-x-4"
      >
        <span class="sm:justify-self-end">Luiza</span>
        <span class="text-shadow-600">&</span>
        <span
          class="text-center sm:col-span-2 sm:col-start-2 sm:row-start-2 sm:text-left"
        >
          João Henrique
        </span>
      </div>
    </div>
  </div>

  <div class="mx-auto flex w-full max-w-screen-md flex-col gap-2">
    <h3 class="text-lg">Código copia e cola</h3>

    <div class="flex items-center gap-2 px-4">
      <input
        readonly
        class="grow rounded-lg border border-zinc-300 bg-zinc-100 text-zinc-400 focus:border-zinc-300 focus:outline-none focus:ring-transparent focus-visible:outline-none"
        bind:value={code}
      />

      <button
        aria-label="Copiar código"
        class="flex shrink-0 items-center justify-center gap-2 rounded-lg border-2 border-sky-600 p-2 text-sky-600"
        onclick={() => copyCode()}
      >
        {#if hasCopiedCode}
          <svg
            class="size-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Z"
            />
            <path
              fill-rule="evenodd"
              d="M11 7V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm4.707 5.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="hidden font-semibold md:inline">Código copiado</span>
        {:else}
          <svg
            class="size-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="hidden font-semibold md:inline">Copiar código</span>
        {/if}
      </button>
    </div>
  </div>

  <div class="mx-auto flex w-full max-w-screen-md flex-col gap-2">
    <h3 class="text-lg">QR Code</h3>

    {#if qrCode !== null}
      {#await qrCode then src}
        <img {src} alt="QR Code" class="mx-auto w-full max-w-lg" />
      {/await}
    {/if}
  </div>

  <p class="mx-auto w-full max-w-screen-md italic">
    Use o seu celular junto do app do seu banco para enviar o presente via Pix.
  </p>

  <div class="mx-auto w-full max-w-screen-md">
    Antes de confirmar a transferência, certifique-se de que:

    <ol class="list-decimal">
      <li class="ml-8">A recipiente é Luiza Vieira da Cunha Barasuol</li>
      <li class="ml-8">O valor é de {totalPrice}</li>
    </ol>
  </div>

  <p class="mx-auto w-full max-w-screen-md italic">
    Para fazer a transfência manualmente, use a chave pix "<span
      class="font-semibold">luizabarasuol@gmail.com</span
    >" e o valor de <span class="font-semibold">{totalPrice}</span>.
  </p>
{/if}

<style>
  .frame {
    border: 1em solid;
    border-image-source: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="rgb(134 137 93 / 0.2)"><path d="M0 0h2v2H0zm0 3h2v2H0zm0 3h2v2H0zm6 0h2v2H6zm0-3h2v2H6zM3 6h2v2H3zm0-6h2v2H3zm3 0h2v2H6z" /></svg>');
    border-image-slice: 3;
  }
</style>
