import { Helmet } from 'react-helmet-async';
import SixView from 'src/sections/nine/View';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Nine</title>
      </Helmet>

      <SixView />
    </>
  );
}
