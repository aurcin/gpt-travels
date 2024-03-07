export function home() {
  return '/';
}

export function chat() {
  return '/chat';
}

export function profile() {
  return '/profile';
}

export function tours() {
  return '/tours';
}

export function toursNew() {
  return '/tours/new-tour';
}

export function tour(id: string) {
  return `/tours/${id}`;
}
