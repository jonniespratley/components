import {useState, useEffect} from 'react';

/**
 * @param observable
 * @param onNext
 * @param onError
 */
export default function useObservable(observable, onNext, onError) {
  const [value, setValue] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const subscription = observable.subscribe((val) => {
      if (onNext) {
        return onNext(val);
      }

      return setValue(val);
    }, onError || setError);

    return () => subscription.unsubscribe();
  }, [observable, onNext, onError]);

  return [error, value];
}
