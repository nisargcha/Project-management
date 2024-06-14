import { Helmet } from 'react-helmet-async';
import SixView from 'src/sections/six/Sixview';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Six</title>
      </Helmet>

      <SixView />
    </>
  );
}
