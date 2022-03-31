import {useEffect, useContext, useState, useCallback, useRef, useMemo} from 'react';
import {PersonStatus} from '@webex/component-adapter-interfaces';

import {AdapterContext} from './contexts';
import { Subject } from 'rxjs';

const useObservable = (callback) => {
  // create the action$ observable only 1 time
  const action$ = useRef(new Subject()).current;
  // the dipatch function is memoized with useCallback()
  const dispatch = useCallback((v) => action$.next(v), [action$]);
  // store the callback on a ref, ignoring any new callback values
  const fn = useRef(callback).current;

  const [state, setState] = useState();

  useEffect(() => {
    // use the callback to create the new state$ observable
    const state$ = fn(action$);

    const sub = state$.subscribe(setState);

    return () => sub.unsubscribe();
  }, [fn, action$]);

  return [state, dispatch];
};
/**
 * A Webex user.
 *
 * @external Person
 * @see {@link https://github.com/webex/component-adapter-interfaces/blob/master/src/PeopleAdapter.js#L6}
 */

/**
 * Custom hook that returns person data of the given ID.
 *
 * @param {string} personID  ID of the person for which to return data.
 * @returns {Person} Data of the person
 */
export default function usePerson(personID) {
  const [person, setPerson] = useState({});
  const {peopleAdapter} = useContext(AdapterContext);

  useEffect(() => {
    const onError = () => {
      setPerson({
        displayName: ' ',
      });
    };
    const onPerson = (data) => {
      const newPerson = {...data};
      // Convert the keys back to their corresponding
      // values, if the status is key based
      if (Object.keys(PersonStatus).includes(newPerson.status)) {
        newPerson.status = PersonStatus[newPerson.status];
      }
      setPerson(newPerson);
    };

    const subscription = peopleAdapter.getPerson(personID).subscribe(onPerson, onError);

    return () => {
      subscription.unsubscribe();
    };
  }, [peopleAdapter, personID]);

  return person;
}
