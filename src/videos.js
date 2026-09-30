const modules = import.meta.glob(
  [
    "../Videos/Videos/G v*.mp4",
    "../Videos/Videos/N v*.mp4",
    "../Videos/Videos/v1.mp4",
    "../Videos/Videos/v2.mp4",
  ],
  { eager: true },
);

export const videoUrls = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.split("/").pop(), mod.default]),
);