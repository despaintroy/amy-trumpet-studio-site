import {MetadataRoute} from 'next'
import {CONTACT_URL} from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: CONTACT_URL + 'sitemap.xml',
  }
}
