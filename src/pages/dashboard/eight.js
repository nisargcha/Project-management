import { Helmet } from 'react-helmet-async';
// sections
import EightView from 'src/sections/eight/View';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Eight</title>
      </Helmet>

      <EightView />
    </>
  );
}
