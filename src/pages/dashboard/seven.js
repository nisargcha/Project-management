import { Helmet } from 'react-helmet-async';
// sections
import SevenView from 'src/sections/seven/View';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Four</title>
      </Helmet>

      <SevenView />
    </>
  );
}