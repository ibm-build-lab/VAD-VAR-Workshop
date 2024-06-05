import { useIntersectionObserver } from '@uidotdev/usehooks';

/**
 *
 * Used to determine is element is visible on page
 *
 * @param def default boolean value
 * @param opts IntersectionObserver options
 */
export default function useWhenVisible(
  def: boolean,
  opts: IntersectionObserverInit = {}
) {
  const [ref, entry] = useIntersectionObserver(opts);
  return [ref, entry ? entry.isIntersecting : def] as [typeof ref, boolean];
}
