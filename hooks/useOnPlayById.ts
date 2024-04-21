import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlayById = () => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user } = useUser();

    const onPlay = (id: string) => {
        if(!user) {
            return authModal.onOpen();
        }

        player.setId(id);
    }

    return onPlay;
}

export default useOnPlayById;