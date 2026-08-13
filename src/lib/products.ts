import type { Asset,EntrySkeletonType } from 'contentful'
import type { Document } from '@contentful/rich-text-types'
import { contentfulClient } from './contentful'



type ProductSkeleton = EntrySkeletonType<
  {
    name: string
    slug: string
    description: Document
    price: number
    photo?: Asset
  },
  'product'
>

export async function getProducts() {
  const response = await contentfulClient.getEntries<ProductSkeleton>({
    content_type: 'product',
  })

  return response.items
}