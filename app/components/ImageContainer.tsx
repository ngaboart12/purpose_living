import Image from "next/image"

type props = {
    photo: any
}

export default function ImageContainer({ photo }: props) {
  

    return (
        <div className="w-full">
            <div className="   overflow-hidden">
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={250}
                    height={250}
                    className=" h-[40vh] rounded-xl cursor-pointer hover:opacity-85 object-cover group-hover:opacity-75"
                />
            </div>
        </div>
    )
}