import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import stylesheet from 'styles/index.scss';
import ForkThis from '../components/github-fork';
// This is the default document. All documents will include this code
export default class extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <title>Dinosure</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />

          {/* Load font awesome and our external stylesheets */}
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          <ForkThis />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
