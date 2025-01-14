import { getContext, setContext } from 'svelte';

class Toasts {
  list = $state<
    {
      id: string;
      type: 'success' | 'error' | 'info';
      content: string;
    }[]
  >([]);

  success(content: string): void {
    this.insertToast('success', content);
  }

  error(content: string): void {
    this.insertToast('error', content);
  }

  info(content: string): void {
    this.insertToast('info', content);
  }

  remove(id: string): void {
    this.list = this.list.filter((toast) => toast.id !== id);
  }

  private insertToast(
    type: 'success' | 'error' | 'info',
    content: string,
  ): void {
    const id = Math.random().toString(36).slice(2);

    this.list = [
      ...this.list,
      {
        id,
        type,
        content,
      },
    ];

    setTimeout(() => {
      this.remove(id);
    }, 5000);
  }
}

const toastsKey = Symbol('Toasts');

export function setToasts(): void {
  setContext(toastsKey, new Toasts());
}

export function getToasts(): Toasts {
  return getContext(toastsKey);
}
