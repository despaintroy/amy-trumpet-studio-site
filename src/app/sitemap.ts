import {MetadataRoute} from 'next'
import {CONTACT_URL, INSTRUMENT_PAGES} from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CONTACT_URL,
      lastModified: new Date(),
    },
    ...INSTRUMENT_PAGES.map((instrument) => ({
      url: `${CONTACT_URL}${instrument}`,
      lastModified: new Date(),
    })),
  ]
}
