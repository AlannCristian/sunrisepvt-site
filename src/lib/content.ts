import { events, sets, gallery } from '../data/portal';

export type PortalEvent = (typeof events)[number] & {
  uploadedFlyer?: boolean;
  date?: string;
  location?: string;
  tickets?: string;
};

type PortalPhoto = (typeof gallery)[number] & { alt?: string };
type PortalContent = { events: PortalEvent[]; sets: typeof sets; gallery: PortalPhoto[] };

const query = `{
  "events": *[_type == "portalEvent" && defined(flyer.asset->url)] | order(coalesce(order, 0), date asc, _id asc) {
    name, genre, description, date, location, tickets, "cover": flyer.asset->url,
    "color": "#ff5e36", "headline": name, "edition": "", "uploadedFlyer": true
  },
  "sets": *[_type == "portalSet"] | order(coalesce(order, 0), _id asc) {
    title, dj, style, embed, "cover": coalesce(cover.asset->url, "/media/stage.webp")
  },
  "gallery": *[_type == "portalPhoto" && defined(photo.asset->url)] | order(coalesce(order, 0), _id asc) {
    title, alt, category, "src": photo.asset->url
  }
}`;

function soundCloudPlayer(value?: string) {
  try {
    const url = new URL(value ?? '');
    if (url.origin !== 'https://w.soundcloud.com' || url.pathname !== '/player/' || !url.searchParams.get('url')) return undefined;
    url.searchParams.set('auto_play', 'false');
    return url.toString();
  } catch {
    return undefined;
  }
}

export function isTicketLink(value?: string) {
  try {
    return new URL(value ?? '').protocol === 'https:';
  } catch {
    return false;
  }
}

export async function loadContent() {
  const projectId = import.meta.env.SANITY_PROJECT_ID?.trim();
  const dataset = import.meta.env.SANITY_DATASET?.trim() || 'production';

  if (!projectId) return { events: events as PortalEvent[], sets, gallery: gallery as PortalPhoto[], isDemo: true };
  if (!/^[a-z0-9]+$/.test(projectId) || !/^[a-z0-9_-]+$/.test(dataset)) {
    throw new Error('Confira SANITY_PROJECT_ID e SANITY_DATASET.');
  }

  const url = new URL(`https://${projectId}.api.sanity.io/v2026-03-01/data/query/${dataset}`);
  url.search = new URLSearchParams({ query, perspective: 'published' }).toString();
  const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error(`Não foi possível consultar o Sanity (HTTP ${response.status}).`);

  const { result } = await response.json() as { result: PortalContent };
  return {
    ...result,
    sets: result.sets.map(set => ({ ...set, embed: soundCloudPlayer(set.embed) })),
    isDemo: false,
  };
}
