import icons from './icons';

export function loadIcon(iconName: keyof typeof icons): string {
  const icon = icons[iconName];

  if (!icon) {
    throw new Error(`Icon ${iconName} not found`);
  }

  return icon; // Retorna el SVG como string
}
