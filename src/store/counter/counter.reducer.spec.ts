import { Iterable } from 'immutable';
import { counterReducer } from './counter.reducer';
import { CounterActions } from '../../actions';
import { ICounterRecord } from './counter.types';

describe('counter reducer', () => {
  let initState: ICounterRecord;

  beforeEach(() => {
    initState = counterReducer(undefined, { type: 'TEST_INIT '});
  });

  it('should have an immutable initial state', () => {
    expect(Iterable.isIterable(initState)).toBe(true);
  });

  it('should increment state.count on INCREMENT_COUNTER', () => {
    const nextState = counterReducer(
      initState,
      { type: CounterActions.INCREMENT_COUNTER });
    expect(nextState.counter).toEqual(1);
  });

  it('should decrement state.count on DECREMENT_COUNTER', () => {
    const previousValue = initState.counter;
    const nextState = counterReducer(
      initState,
      { type: CounterActions.DECREMENT_COUNTER });
    expect(nextState.counter).toEqual(previousValue - 1);
  });
});
