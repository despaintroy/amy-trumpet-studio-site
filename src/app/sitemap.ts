import {MetadataRoute} from 'next'
import {CONTACT_URL, INSTRUMENTS} from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CONTACT_URL,
      lastModified: new Date(),
    },
    ...INSTRUMENTS.map((instrument) => ({
      url: `${CONTACT_URL}${instrument}`,
      lastModified: new Date(),
    })),
  ]
}
