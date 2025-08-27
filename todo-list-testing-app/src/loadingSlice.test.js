import { loadingSliceDef } from './loadingSlice.js';

function testLoadingSlice () {
    const fakeState = { value: { completed: true} };
    loadingSliceDef.reducers.loadingStarted(fakeState);
    if (fakeState.value.completed) {
        throw new Error('Test failed');
    } else {
        console.log('Test passed');
    }
}

testLoadingSlice();