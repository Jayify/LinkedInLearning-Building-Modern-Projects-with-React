import { getCompletedTodos } from "./selectors.js"; // Needs .js extension to work in modules/Node.js

function testSelectors() {
    const fakeState = { 
        todos: { 
            value: [
                { text: 'Task 1', isCompleted: true },
                { text: 'Task 2', isCompleted: false },
                { text: 'Task 3', isCompleted: true },
            ] 
        } 
    };

    const completed = getCompletedTodos(fakeState);
    if (completed.length !== 2 && completed.every(t => t.isCompleted)) {
        throw new Error('Test failed');
    } else {
        console.log('Test passed');
    }
}

testSelectors();