import { Helmet } from 'react-helmet-async';
import SixView from 'src/sections/ten/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Ten</title>
      </Helmet>

      <SixView />
    </>
  );
}
