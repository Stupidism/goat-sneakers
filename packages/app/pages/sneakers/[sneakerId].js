import SneakersViewPage from '~/pages/SneakersViewPage';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  return <SneakersViewPage id={router.query.sneakerId} />;
};
