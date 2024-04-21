"use client";

import { Song } from '@/types';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";
import UseOnPlay from "@/hooks/useOnPlay";
interface ListItemProps {
    image: string;
    name: string;
    href: string;
    songs: Song[];
}

const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href,
    songs
}) => {
    const router = useRouter();

    const onPlay = UseOnPlay(songs);

    const onClick = () => {
        //Add authentication before push
        router.push(href);
    }

    return ( 
        <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4" onClick={onClick}>
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image className='object-cover' fill src={image} alt='Image'/>
            </div>
            <p className='font-medium truncate py-5'>
                {name}
                </p>
            <button className='absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110'>
                <FaPlay className='text-black' onClick={(event: React.MouseEvent<SVGElement, MouseEvent>) => {
                    event.stopPropagation();
                    onPlay(songs[0].id)
                }}/>
            </button>
        </button>
     );
}
 
export default ListItem;