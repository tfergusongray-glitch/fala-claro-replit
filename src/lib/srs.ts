export type CardReview = {
  id: string;
  ease: number; // 1 to 5
  interval: number; // days
  due: string; // ISO date
};

export function nextReview(prev: CardReview, quality: 0|1) : CardReview {
  const now = new Date();
  let ease = prev.ease;
  if (quality === 1) ease = Math.min(5, ease + 0.1);
  else ease = Math.max(1.3, ease - 0.2);

  let interval = prev.interval;
  if (prev.interval === 0) interval = 1;
  else if (prev.interval === 1) interval = 3;
  else interval = Math.round(prev.interval * ease);

  const due = new Date(now.getTime() + interval * 24*60*60*1000).toISOString();
  return { ...prev, ease, interval, due };
}
