import { useFetch, useCounter } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  //   can only destructurize when there is real value
  //   if data is undefined this could get us an error
  //   if data is undefined --> !data = true, therefore
  //   !!data = false
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Nex quote
      </button>
    </>
  );
};
