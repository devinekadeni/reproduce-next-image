import Image from "next/image"
import { useRouter } from "next/router"
import EmptyImage from '../../../assets/img/empty-image.webp'
import EmptyImageInside from './assets/empty-image-inside.webp'
import EmptyImagePublic from '../../../public/empty-image-public.webp'

export default function ProductPageDesktop() {
  const router = useRouter()

  return (
    <div>
      <h1>Product Page (Desktop) ({router.locale})</h1>
      <Image
        src={EmptyImage}
        alt="empty-img"
        width={200}
        height={200}
        blurDataURL={EmptyImage.blurDataURL}
        placeholder="blur"
      />
      <Image
        src={EmptyImageInside}
        alt="empty-img"
        width={200}
        height={200}
        blurDataURL={EmptyImageInside.blurDataURL}
        placeholder="blur"
      />
      <Image
        src={EmptyImagePublic}
        alt="empty-img"
        width={200}
        height={200}
        blurDataURL={EmptyImagePublic.blurDataURL}
        placeholder="blur"
      />
    </div>
  )
}
