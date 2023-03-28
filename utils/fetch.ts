export const fetchWithDelay = async (url: string) => {
  const minDelay = 2000;
  const maxDelay = 10000;

  return new Promise<any>((r) =>
    setTimeout(async () => {
      const response = await fetch(url, { cache: 'no-store' });      
      r(response.json());
    }, Math.random() * (maxDelay - minDelay) + minDelay)
  );
};
