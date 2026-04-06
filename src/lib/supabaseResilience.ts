const TRANSIENT_DB_PATTERNS = [
  'fetch failed',
  'network',
  'timeout',
  'timed out',
  'temporarily unavailable',
  'connection',
  'socket',
  'econnreset',
  'econnrefused',
  'etimedout',
  'tenant or user not found',
  'service unavailable',
  'gateway timeout',
  'bad gateway',
  'upstream',
  'worker exited',
  'failed to send a request',
  'connection terminated',
];

export const GUESTBOOK_TEMPORARY_ERROR_MESSAGE =
  '방명록 저장이 조금 지연되고 있어요. 잠시 후 다시 시도해 주세요.';

export function isLikelyTransientSupabaseError(error: unknown): boolean {
  const message = getErrorMessage(error).toLowerCase();
  if (!message) return false;
  return TRANSIENT_DB_PATTERNS.some((pattern) => message.includes(pattern));
}

export function getErrorMessage(error: unknown): string {
  if (!error) return '';
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message || String(error);
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const value = (error as { message?: unknown }).message;
    return typeof value === 'string' ? value : String(value ?? '');
  }
  return String(error);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function retrySupabaseOperation<T>(
  operation: () => Promise<T>,
  options?: { retries?: number; delayMs?: number; backoffMs?: number; shouldRetry?: (error: unknown) => boolean }
): Promise<T> {
  const retries = Math.max(0, options?.retries ?? 2);
  const delayMs = Math.max(0, options?.delayMs ?? 500);
  const backoffMs = Math.max(0, options?.backoffMs ?? 400);
  const shouldRetry = options?.shouldRetry ?? isLikelyTransientSupabaseError;

  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt === retries || !shouldRetry(error)) {
        throw error;
      }
      await sleep(delayMs + attempt * backoffMs);
    }
  }

  throw lastError;
}
