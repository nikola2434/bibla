import { useAppDispatch } from "./../../../../../hooks/useAppDispatch";
import { IUser } from "../../../../UI/types";
import {
  useGetByIdQuery,
  useUpdateUserMutation,
} from "../../../../../services/usersApi";

interface FavoriteProps {
  userRedux: IUser;
  bookId: string;
}

export const useAddFavorite = ({ userRedux }: FavoriteProps) => {
  const [changeFavoriteBook] = useUpdateUserMutation();
  const { data: User } = useGetByIdQuery(userRedux._id);

  const { update } = useAppDispatch();

  const handleFavoriteBook = async (isFavorite: boolean, bookId: string) => {
    if (isFavorite && User) {
      await changeFavoriteBook({
        id: User.id,
        user: {
          ...User,
          user: {
            ...userRedux,
            favoriteBooks: User.user.favoriteBooks.filter(
              (book) => book !== bookId
            ),
          },
        },
      });
      update({ id: User.id });
    } else if (!isFavorite && User) {
      await changeFavoriteBook({
        id: User.id,
        user: {
          ...User,
          user: {
            ...userRedux,
            favoriteBooks: [...User.user.favoriteBooks, bookId],
          },
        },
      });
      update({ id: User.id });
    }
  };

  return { handleFavoriteBook };
};
