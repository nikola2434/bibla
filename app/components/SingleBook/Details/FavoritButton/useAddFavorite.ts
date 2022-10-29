import { useToggleFavoritesMutation } from "../../../../../services/users/usersApi";

export const useAddFavorite = () => {
  const [toggleFavorite] = useToggleFavoritesMutation();

  const handleFavoriteBook = async (bookId: string) => {
    await toggleFavorite(bookId);
  };
  return { handleFavoriteBook };
};
