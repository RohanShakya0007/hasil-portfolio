const modules = import.meta.glob(
  ["../img/*.png", "../img/*.jpg", "../img/*.jpeg", "../img/*.webp"],
  { eager: true },
);

export const imageUrls = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.split("/").pop(), mod.default]),
);

export const portraitImage =
  imageUrls["profile.png"] ??
  imageUrls["profile.jpg"] ??
  Object.values(imageUrls)[0];
