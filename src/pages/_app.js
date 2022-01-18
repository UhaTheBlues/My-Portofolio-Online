import Theme from '../styles/theme';

<link rel="shortcut icon" href="images/ulogo.png" type='image/x-icon' />

export default function App({ Component, pageProps }) {
  return (
    <>
    <title>Muhammad Iwan Ullinuha</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 